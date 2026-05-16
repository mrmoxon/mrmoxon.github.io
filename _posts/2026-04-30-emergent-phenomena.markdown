---
layout: post
title:  "Tractable Emergence"
date:   2026-04-30 00:00:00 -0700
categories: hierarchies
study: false
mini: true
favourite: 0
permalink: /emergent-phenomena/
excerpt: "A collection of studies I've found particularly interesting because they exhibit: (1) generative structure, (2) a non-trivial selection gradient, and (3) clues about some hidden universal assembly function."
---

<!-- We have come to our senses in an enormous universe with immense expressive capabilities. By developing media (mathematics, formal logic, computation, evolutionary search) we can better model our reality and adapt to it. Our defining search is for pockets of computational tractability where structure is rich enough for us to extract durable patterns.  -->

Here are a collection of studies that hint at universal discovery functions; recipes for finding durable structure inside small rule-sets. Each entry includes:

1. an environment with simple rules that produce high expressivity, and
2. a selection pressure that rewards persistence.

Broadly, I've broken these studies into four camps:

- **Simple solvers:** hand-specified procedures that reliably solve constrained problems. The reward is designed directly into the system.
- **Learned solvers:** systems that learn policies or models inside fixed environments. The reward is narrow but discovered through training. Think reinforcement learning, AlphaFold, AlphaZero, MuZero.
- **Discovery engines:** systems that search rich design spaces and use feedback to surface useful candidates. The reward is more general: interestingness, novelty, fitness, usefulness. This is the holy grail technology we're aiming for.
- **Computational media:** substrates where small rules decompress into domains much larger than the rules describe. The reward is effectively unbounded: persistence, expressivity, and structure emerge from the medium itself.

<div class="emergence-filters" aria-label="Filter entries by camp">
  <div class="filter-buttons" id="emergence-camp-filters">
    <button class="filter-btn active" data-camp-filter="all">all</button>
    <button class="filter-btn active" data-camp-filter="simple-solvers">simple solvers</button>
    <button class="filter-btn active" data-camp-filter="learned-solvers">learned solvers</button>
    <button class="filter-btn active" data-camp-filter="discovery-engines">discovery engines</button>
    <button class="filter-btn active" data-camp-filter="computational-media">computational media</button>
  </div>
</div>

<p class="emergence-empty" id="emergence-empty" hidden>No entries yet.</p>

<section class="emergence-entry" data-camp="computational-media" markdown="1">

## Particle Life

*Added: 16 May 2026*
{: .entry-added-date }

![Particle Life](/assets/particle-life.png){:style="width:70%;"}

Particle Life sets a few particle types loose in continuous space and lets each pair of types attract or repel through an asymmetric interaction matrix. The interesting thing is not any one force law, but how small matrices decompress into flocking, membranes, swarms, orbiting clusters, and metastable little ecologies. Najarro's implementation makes the medium inspectable: particle count, types, environments, initial conditions, physics, and the matrix can all be varied, while experiment mode searches over configurations using MAP-Elites archives. The selection pressure is persistence and structure under simple local attraction and repulsion, with the user or search loop deciding which particle worlds are worth preserving.

<details markdown="1">
<summary>Resources</summary>

- Najarro, [*Particle Life*](https://najarro.science/pl/){:target="_blank" rel="noopener noreferrer"}
- Ventrella, [*Clusters*](https://www.ventrella.com/Clusters/){:target="_blank" rel="noopener noreferrer"}
- ciphrd, [*Atomic Clusters: A Molecular Particle-Based Simulation*](https://ciphrd.com/articles/atomic-clusters-a-molecular-particle-based-simulation/){:target="_blank" rel="noopener noreferrer"}
- Mohr, [*Particle Life*](https://www.youtube.com/watch?v=p4YirERTVF0){:target="_blank" rel="noopener noreferrer"}
- Lisitsa, [*Particle Life simulation in browser using WebGPU*](https://lisyarus.github.io/blog/posts/particle-life-simulation-in-browser-using-webgpu.html){:target="_blank" rel="noopener noreferrer"}

</details>

</section>

<section class="emergence-entry" data-camp="computational-media" markdown="1">

## Hypergraphs (2020)

*Added: 3 May 2026*
{: .entry-added-date }

![Wolfram Project](/assets/wolfram-project.png){:style="width:70%;"}

The Wolfram Physics Project treats space as an evolving hypergraph: a network whose hyperedges can connect any number of nodes, updated by local rewrite rules. Repeated substitutions generate causal graphs, multiway systems, and large-scale structure that is conjectured to recover familiar physical behaviour in the continuum limit. The medium is rule-space itself: simple replacement systems decompress into candidate geometries, with persistence rewarded when update histories preserve coherent causal structure.

<details markdown="1">
<summary>Resources</summary>

- Wolfram Physics Project, [*Technical Introduction*](https://www.wolframphysics.org/technical-introduction/){:target="_blank" rel="noopener noreferrer"}
- Wolfram Physics Project, [*The Representation of Rules*](https://www.wolframphysics.org/technical-introduction/basic-form-of-models/the-representation-of-rules/){:target="_blank" rel="noopener noreferrer"}
- Gorard (2020), [*Some Relativistic and Gravitational Properties of the Wolfram Model*](https://arxiv.org/abs/2004.14810){:target="_blank" rel="noopener noreferrer"}

</details>

</section>

<section class="emergence-entry" data-camp="learned-solvers" markdown="1">

## AlphaZero (2017) and MuZero (2019)

*Added: 3 May 2026*
{: .entry-added-date }

![AlphaZero and MuZero](/assets/alphazero-muzero.png){:style="width:70%;"}

AlphaZero treats games as small, perfectly specified rule environments and uses self-play with Monte Carlo tree search to search game-trees, converting simple rules into superhuman policies in chess, shogi, and Go. MuZero is the later form: it preserves the planning/search loop, but learns the dynamics model from experience, matching AlphaZero in Go, chess, and shogi while extending the same machinery to Atari without being given the rules. The medium here is the game-tree: selection pressure is win/loss or reward, and persistence is the strategy that survives self-play.

<details markdown="1">
<summary>Resources</summary>

- Silver et al. (2018), [*A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play*](https://arxiv.org/abs/1712.01815){:target="_blank" rel="noopener noreferrer"}
- Schrittwieser et al. (2020), [*Mastering Atari, Go, chess and shogi by planning with a learned model*](https://arxiv.org/abs/1911.08265){:target="_blank" rel="noopener noreferrer"}
- Google DeepMind (2020), [*MuZero: Mastering Go, chess, shogi and Atari without rules*](https://deepmind.google/blog/muzero-mastering-go-chess-shogi-and-atari-without-rules/){:target="_blank" rel="noopener noreferrer"}

</details>

</section>

<section class="emergence-entry" data-camp="computational-media" markdown="1">

## Lenia (2018)

*Added: 3 May 2026*
{: .entry-added-date }

![Lenia](/assets/lenia.png){:style="width:70%;"}

Lenia is a continuous generalisation of Conway's Game of Life; cells are no longer binary, but smooth-valued fields evolving over continuous space and time through convolution kernels and growth mappings. It relaxes the Moore-neighbourhood grid into a richer artificial-life substrate, producing organism-like species such as Orbium with geometric, fuzzy, resilient, adaptive motion. The same ambition as GoL, but with a richer state space for discovering persistent artificial morphologies.

<details markdown="1">
<summary>Resources</summary>

- Chan (2019), [*Lenia: Biology of Artificial Life*](https://arxiv.org/abs/1812.05433){:target="_blank" rel="noopener noreferrer"}
- Artificial Life, [*Lenia*](https://alife.org/encyclopedia/software-platforms/lenia/){:target="_blank" rel="noopener noreferrer"}
- Chan (2020), [*Lenia and Expanded Universe*](https://arxiv.org/abs/2005.03742){:target="_blank" rel="noopener noreferrer"}

</details>

</section>

<section class="emergence-entry" data-camp="computational-media" markdown="1">

## Picbreeder (2008)

*Added: 30 April 2026*
{: .entry-added-date }

![Picbreeder figure](/assets/picbreeder-figure.png){:style="width:70%;"}

Picbreeder is a deceptively simple [website](https://nbenko1.github.io/#/evolve){:target="_blank" rel="noopener noreferrer"} that lets users 'breed' emergent complexity by applying simple covolutions in-series, collectively mapping the space of all possible patterns of a small feedforward neural net. The CPPN (a Compositional Pattern Producing Network) uses basic activations like sine, gaussian, and sigmoid that combine to produce recognisable forms like planets, butterflies, cars and mosques in 50–100 generations, before collapsing into high-entropy homogeneity as the process matures.

<details markdown="1">
<summary>Resources</summary>

- Secretan et al. (2011), [*Picbreeder: A case study in collaborative evolutionary exploration of design space*](https://direct.mit.edu/evco/article/19/3/373/1349/){:target="_blank" rel="noopener noreferrer"}
- Woolley & Stanley (2014), [*Exploring promising stepping stones by combining novelty search with interactive evolution*](https://arxiv.org/abs/1207.6682){:target="_blank" rel="noopener noreferrer"}
- Lehman & Stanley (2015), *Why Greatness Cannot Be Planned: The Myth of the Objective*
- Stanley (2007), [*Compositional pattern producing networks*](https://link.springer.com/article/10.1007/s10710-007-9028-8){:target="_blank" rel="noopener noreferrer"}

</details>

- Comments: Problem is that the only real discovery here is that in pure spaces like this, forecasting is intractable. This doesn't really say much. 

</section>

<section class="emergence-entry" data-camp="computational-media" markdown="1">

## Conway's Game of Life (1970)

*Added: 2 May 2026*
{: .entry-added-date }

![Cellular automata](/assets/cellular-automata.png){:style="width:70%;"}

A 2-state, grid-based cellular automaton following the "B3/S23" ruleset where a dead cell awakens if it has three live neighbours, and a live cell persists if it has two or three live neighbours. Still lifes, oscillators, spaceships (the glider), guns, puffers, and eaters characterfully emerge. Selected by Conway while combing the 262,144 possible rules in the basic Moore neighbourhood as the simplest rule satisfying the three criteria: (1) no obvious unbounded growth, (2) no obvious extinction, and (3) hard-to-predict long-term behavior.

<details markdown="1">
<summary>Resources</summary>

- Gardner (1970), *Mathematical Games: The fantastic combinations of John Conway's new solitaire game "Life"*
- LifeWiki, [*Conway's Game of Life*](https://conwaylife.com/wiki/Conway%27s_Game_of_Life){:target="_blank" rel="noopener noreferrer"}
- LifeWiki, [*Life-like cellular automaton*](https://conwaylife.com/wiki/Life-like_cellular_automaton){:target="_blank" rel="noopener noreferrer"}
- Scholarpedia, [*Game of Life*](https://www.scholarpedia.org/article/Game_of_Life){:target="_blank" rel="noopener noreferrer"}

</details>

- Comments: The problem is that we don't learn a whole lot

</section>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var filterContainer = document.getElementById('emergence-camp-filters');
    if (!filterContainer) return;

    var buttons = Array.from(filterContainer.querySelectorAll('[data-camp-filter]'));
    var entries = Array.from(document.querySelectorAll('.emergence-entry'));
    var emptyState = document.getElementById('emergence-empty');
    var selected = new Set(['all']);
    var campLabels = {
      'simple-solvers': 'simple solvers',
      'learned-solvers': 'learned solvers',
      'discovery-engines': 'discovery engines',
      'computational-media': 'computational media'
    };

    entries.forEach(function(entry) {
      var heading = entry.querySelector('h2');
      var camp = entry.getAttribute('data-camp');
      if (!heading) return;

      var body = document.createElement('div');
      body.className = 'emergence-entry-body';

      while (heading.nextSibling) {
        body.appendChild(heading.nextSibling);
      }

      entry.appendChild(body);

      if (camp && campLabels[camp]) {
        var campLabel = document.createElement('button');
        campLabel.type = 'button';
        campLabel.className = 'emergence-entry-camp-label';
        campLabel.textContent = campLabels[camp];
        campLabel.setAttribute('data-camp-label', camp);
        campLabel.setAttribute('aria-label', 'Show only ' + campLabels[camp]);
        entry.insertBefore(campLabel, body);

        campLabel.addEventListener('click', function(event) {
          event.stopPropagation();
          selectOnly(camp);
        });
      }

      heading.classList.add('emergence-entry-toggle');
      heading.setAttribute('role', 'button');
      heading.setAttribute('tabindex', '0');
      heading.setAttribute('aria-expanded', 'false');

      function toggleEntry() {
        var isOpen = entry.classList.toggle('is-open');
        heading.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }

      heading.addEventListener('click', toggleEntry);
      heading.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleEntry();
        }
      });
    });

    function selectOnly(filter) {
      selected.clear();
      selected.add(filter);
      updateButtons();
      applyFilters();
    }

    function activateAll() {
      selected.clear();
      selected.add('all');
      buttons.forEach(function(button) {
        button.classList.add('active');
      });
    }

    function updateButtons() {
      buttons.forEach(function(button) {
        var filter = button.getAttribute('data-camp-filter');
        button.classList.toggle('active', selected.has('all') || selected.has(filter));
      });
    }

    function applyFilters() {
      var visibleCount = 0;
      entries.forEach(function(entry) {
        var camp = entry.getAttribute('data-camp');
        var visible = selected.has('all') || selected.has(camp);
        entry.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
      }
    }

    activateAll();
    applyFilters();

    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var filter = button.getAttribute('data-camp-filter');

        if (filter === 'all') {
          activateAll();
        } else if (selected.has('all')) {
          selected.clear();
          selected.add(filter);
        } else if (selected.has(filter)) {
          selected.delete(filter);
          if (selected.size === 0) {
            selected.add('all');
          }
        } else {
          selected.add(filter);
        }

        updateButtons();
        applyFilters();
      });
    });
  });
</script>
