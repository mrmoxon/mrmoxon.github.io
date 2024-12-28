---
layout: page
---

<div class="central-column">
  <!-- <br> -->
  <!-- <p class="intro">b. may 2002, Bath, England. London based postgraduate, researching multi-agent swarms for debate and task automation.</p> -->

  {%- assign posts = site.posts -%}
  <div class="home">
    <span class="recent-essays-label">[recent essays]</span>
    <div class="recent-essays-container">
      {%- for post in posts limit:2 -%}
        <a href="{{ post.url | relative_url }}" class="recent-essay-link">
          <div class="recent-essay-content">
            <h3 class="recent-essay-title">{{ post.title | escape }}</h3>
            <span class="recent-essay-date">{{ post.date | date: "%b %Y" }}</span>
          </div>
        </a>
      {%- endfor -%}
    </div>
    <a href="/essays" class="essays-ellipsis"></a>
  </div>

  <!-- <br>   -->
  <br>
  <p>Some things I believe:</p>

  <ul class="bullets beliefs">

    <li>At the level of civilisation
      <ul>
        <li>our universe is hyper young, life on Earth an <a href="https://grabbyaliens.com/" class="custom-link">outlier</a></li>
        <li>sustained flourishing of life is a moral responsibility of intelligence</li>
        <li><a href="https://twitter.com/karpathy/status/1744179910347039080?lang=en" class="custom-link">democratising</a>intelligence will supercharge <a href="https://www.e-ir.info/2018/01/11/review-four-futures-life-after-capitalism/#:~:text=One%20can%20have%20abundance%20with,the%20eternal%20present%20of%20capitalism" class="custom-link">abundance</a>, but the rest is politics</li>
        <li>societies constantly regenerate around a function with ill-defined core values</li>
      </ul>
    </li>

    <li>An alignment problem determines the core behaviour of society
      <ul>
        <li>it is the triple point of "paleolithic emotions, medieval institutions and godlike technology<a href="https://www.oxfordreference.com/display/10.1093/acref/9780191826719.001.0001/q-oro-ed4-00016553" class="no-underline" target="_blank" rel="noopener noreferrer">"</a></li>
        <li>pure technology is undesirable, as it regenerates faster than humans ever will</li>
        <li>transformers do offer a stable and scalable paradigm for an early superintelligence by 2028</li>
      </ul>
    </li>

    <li>Lessons from economics:
        <ul>
            <li>EMH is weak at best, all opportunities emerge in the gaps of market rationality</li>
            <li>the fate of billions is steered overwhelmingly by the work of a few</li>
            <li>consolidations of market power are dangerous and wasteful, but short term optimal for investors</li>
        </ul>
    </li>

    <li>Lessons from research:
        <ul>
            <li>most fields have seen diminishing returns to science since the 60s, with a notable exception in computing and AI</li>
            <li>ultimate promise of LLMs is agents, ultimate promise of agents is a new paradigm of advanced science</li>
            <li>agent improve prompting from <em>"write me an essay"</em> to <em>"run my company"</em> or <em>"build me a dyson syphere"</em></li>
            <li>digital platforms maximise hyperstimuli and addiction, by choice or by nature. reels/tiktok are 0.5-d <a href="https://twitter.com/oscarmoxon/status/1722378053924397277" class="custom-link">wireheading</a></li>
            <li>with LLMs we tread closer to the realm of natural abstraction - next stop: telepathy</li>
        </ul>
    </li>

    <li>Some other thoughts:
        <ul>
            <li>innovation and agility thrive in small, focused groups working fast</li>
            <li>progress is rate limited by our ability to ask more meaningful questions, which favor the contrarian</li>
            <li>all people have a common <a href="/leverage" class="link">thread</a> that connects the major decisions they make</li>
        </ul>
    </li>
  </ul>

  <p>Deep enjoyer of painting, The Fountainhead (Ayn Rand), Ex Machina, and Jungle (band)</p>

  {% include convertkit.html %}

</div>

