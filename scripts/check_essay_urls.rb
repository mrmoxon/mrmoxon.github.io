# Run after a Jekyll build: bundle exec ruby scripts/check_essay_urls.rb
require 'jekyll'
require 'json'
require 'rexml/document'
require 'uri'
require 'cgi'

Dir.chdir(File.expand_path('..', __dir__))
config = Jekyll.configuration('config' => ['_config.yml'], 'quiet' => true)
config['plugins'] = []
site = Jekyll::Site.new(config)
site.read
posts = site.posts.docs.reject { |post| post.data['standalone'] }
urls = posts.map(&:url)
raise 'Duplicate essay URLs' unless urls.uniq.length == urls.length
page_urls = site.pages.map(&:url)
raise 'Essay URL collides with a page' unless (urls & page_urls).empty?

def assert(condition, message)
  raise message unless condition
end

def output(url)
  path = File.join('_site', url.sub(%r{\A/}, ''))
  path = File.join(path, 'index.html') if url.end_with?('/')
  File.read(path)
end

sitemap = REXML::Document.new(File.read('_site/sitemap.xml'))
locations = REXML::XPath.match(sitemap, '//*[local-name()="loc"]').map(&:text)
redirects = []
posts.each do |post|
  assert(post.url == "/#{post.data['slug']}.html", "Unexpected URL: #{post.url}")
  html = output(post.url)
  canonical = site.config['url'] + site.baseurl + post.url
  assert(html.include?(%(<link rel="canonical" href="#{canonical}")), "Missing canonical: #{post.url}")
  assert(html.include?('class="post h-entry"'), "Article missing: #{post.url}")
  assert(locations.include?(canonical), "Missing sitemap entry: #{post.url}")
  aliases = Array(post.data['redirect_from'])
  assert(!aliases.empty?, "Missing legacy redirects: #{post.url}")
  aliases.each do |old|
    redirects << old
    redirect = output(old)
    assert(redirect.include?(%(<link rel="canonical" href="#{canonical}")), "Wrong redirect: #{old}")
    assert(redirect.include?('location.replace'), "Missing browser redirect: #{old}")
    assert(!locations.include?(site.config['url'] + site.baseurl + old), "Redirect indexed: #{old}")
  end
end
assert(redirects.uniq.length == redirects.length, 'Conflicting legacy redirects')
assert((redirects & urls).empty?, 'Redirect overwrites an article')
assert(output('/emergent-phenomena/').include?('Tractable Emergence'), 'Standalone page missing')

feed = REXML::Document.new(File.read('_site/feed.xml'))
REXML::XPath.each(feed, '//*[local-name()="entry"]/*[local-name()="link"]') do |link|
  next unless link.attributes['rel'] == 'alternate'
  path = URI(link.attributes['href']).path
  assert(!redirects.include?(path), "Feed points to legacy URL: #{path}")
end
search = JSON.parse(File.read('_site/search_index.json'))
search.each do |entry|
  assert(!redirects.include?(URI(entry.fetch('url')).path), 'Search points to legacy URL')
end
puts "Verified #{posts.length} short essay URLs, #{redirects.length} redirects, sitemap, feed, search, and standalone page."
