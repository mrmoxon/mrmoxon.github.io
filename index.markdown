---
layout: page
---

<div class="central-column">

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
    <!-- <a href="/essays/" class="essays-ellipsis"></a> -->
  </div>

  <br>  
  <p class="intro">London and SF based, curious about emergence, free energy, and multi-agent systems. Building your digital exoskeleton at <a href="https://realmachines.ai/" class="custom-link">realmachines.ai</a></p>
  <p>Previously researching long-horizon artificial intelligence at Kings College London.</p>
  <p>Some things I believe:</p>

  <ul class="custom-bullets">

    <li>On civilisation in the long-run
      <ul>
        <li>the universe is hyper young, life on Earth an <a href="https://grabbyaliens.com/" class="custom-link">outlier</a></li>
        
        <li>civilisation minimises <a href="https://www.nature.com/articles/nrn2787" class="custom-link">free energy</a>where markets provide all metabolic function, rarely calling for intervention</li>
                
        <li>healthy <a href="https://retrochronic.com/" class="custom-link">markets</a> churn fast and democratise technological progress quickly</li>
      </ul>
    </li>

    <li>On The Alignment Problem
      <ul>
        <li><a href="https://twitter.com/karpathy/status/1744179910347039080?lang=en" class="custom-link">democratising</a>intelligence will supercharge <a href="https://www.e-ir.info/2018/01/11/review-four-futures-life-after-capitalism/#:~:text=One%20can%20have%20abundance%20with,the%20eternal%20present%20of%20capitalism" class="custom-link">abundance</a></li>
        
        <li>society maintains alignment at the triple point of <i>"paleolithic emotions, medieval institutions and godlike technology<a href="https://www.oxfordreference.com/display/10.1093/acref/9780191826719.001.0001/q-oro-ed4-00016553" class="no-underline" target="_blank" rel="noopener noreferrer">"</a></i></li>

        <li>allocate this abundance optimally if you want to maintain technological optimism and stoke the fires of further growth</li>
      </ul>
    </li>

    <li>On civilisation in the short-run
      <ul>
        <li>EMH is weak at best: all opportunities emerge in the lag between market sentiment and reality, especially during breakthroughs</li>

        <li>most scientific fields have seen diminishing returns for sixty years, with exceptions in computing and <a href="https://www.oscarmoxon.com/leverage/2021/12/13/timeline-of-ai-1.html" class="custom-link">machine learning</a>which will produce a knowledge explosion</li>

        <li>with <a href="https://www.youtube.com/watch?v=lpvzs4xc7zA" class="custom-link">Culture-Minds</a>, agents will let us delegate research or make requests like <em>"build me a dyson sphere"</em></li>

        <li>LLMs tread closer to the realm of natural abstraction—next stop: telepathy</li>
      </ul>
    </li>

    <li>Thoughts on working in teams
        <ul>
            <li>great teams are priceless and give life meaning</li>
            <li>teams function like vector fields; vector sum equals velocity</li>
            <li>all orgs should be broken into small, focused groups with under a dozen members</li>
            <li><a href="https://retrochronic.com/#hyperstition" class="custom-link">narrative momentum</a> is essential when making fiction commonplace</li>
            <li>everyone has a common thread that connects the major decisions they make, and this instinct should be listened to</li>
        </ul>
    </li>
  </ul>

  <p>Deep enjoyer of black holes, The Fountainhead, Ex Machina, and Jungle</p>

  <p class="newsletter-signup-text">Join my email list and get notified when I post!</p>
  {% include convertkit.html %}

</div>

<!-- <li>digital platforms are victim to the moloch trap of human hyperstimuli and addiction. shortform reels are 0.5D <a href="https://twitter.com/oscarmoxon/status/1722378053924397277" class="custom-link">wireheading</a></li>

<li><a href="http://oscarmoxon.com/market-failure/2022/11/08/smartwatches.html" class="custom-link">bundling</a>is the next highly egregious form of market failure in 2025—regulation should focus on eradicating artificial switching costs</li> -->

<!-- <li>all people have a common <a href="/leverage" class="link">thread</a> that connects the major decisions they make</li> -->