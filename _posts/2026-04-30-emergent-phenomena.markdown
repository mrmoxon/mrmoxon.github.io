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

A collection of studies that hint at universal assembly functions. Each entry exhibits:

1. a simple generator that creates rich outputs,
2. a gradient that selects for interesting structure, and
3. a pattern that might generalise to other substrates.

Someone ought to do what Conway did for cellular automata (and what AlphaFold did for protein folding) for all disciplines: develop new replicating mediums for civilisation to discover useful expressions within.

![Cellular automata](/assets/cellular-automata.png){:style="width:70%;"}

## Conway's Game of Life

*Added: 2 May 2026*
{: .entry-added-date }

A 2-state, grid-based cellular automaton following the "B3/S23" ruleset where a dead cell awakens if it has three live neighbours, and a live cell persists if it has two or three live neighbours. Still lifes, oscillators, spaceships (the glider), guns, puffers, and eaters characterfully emerge. Selected by Conway while combing the 262,144 possible rules in the basic Moore neighbourhood as the simplest rule satisfying the three criteria: (1) no obvious unbounded growth, (2) no obvious extinction, and (3) hard-to-predict long-term behavior.

<details markdown="1">
<summary>Resources</summary>

- Gardner (1970), *Mathematical Games: The fantastic combinations of John Conway's new solitaire game "Life"*
- LifeWiki, [*Conway's Game of Life*](https://conwaylife.com/wiki/Conway%27s_Game_of_Life){:target="_blank" rel="noopener noreferrer"}
- LifeWiki, [*Life-like cellular automaton*](https://conwaylife.com/wiki/Life-like_cellular_automaton){:target="_blank" rel="noopener noreferrer"}
- Scholarpedia, [*Game of Life*](https://www.scholarpedia.org/article/Game_of_Life){:target="_blank" rel="noopener noreferrer"}

</details>

![Picbreeder figure](/assets/picbreeder-figure.png){:style="width:70%;"}

## Picbreeder

*Added: 30 April 2026*
{: .entry-added-date }

Picbreeder is a deceptively simple [website](https://nbenko1.github.io/#/evolve){:target="_blank" rel="noopener noreferrer"} that lets users 'breed' emergent complexity by applying simple covolutions in-series, collectively mapping the space of all possible patterns of a small feedforward neural net. The CPPN (a Compositional Pattern Producing Network) uses basic activations like sine, gaussian, and sigmoid that combine to produce recognisable forms like planets, butterflies, cars and mosques in 50–100 generations, before collapsing into high-entropy homogeneity as the process matures.

<details markdown="1">
<summary>Resources</summary>

- Secretan et al. (2011), [*Picbreeder: A case study in collaborative evolutionary exploration of design space*](https://direct.mit.edu/evco/article/19/3/373/1349/){:target="_blank" rel="noopener noreferrer"}
- Woolley & Stanley (2014), [*Exploring promising stepping stones by combining novelty search with interactive evolution*](https://arxiv.org/abs/1207.6682){:target="_blank" rel="noopener noreferrer"}
- Lehman & Stanley (2015), *Why Greatness Cannot Be Planned: The Myth of the Objective*
- Stanley (2007), [*Compositional pattern producing networks*](https://link.springer.com/article/10.1007/s10710-007-9028-8){:target="_blank" rel="noopener noreferrer"}

</details>
