---
layout: post
title:  "How Agents Will Accelerate Research"
date:   2024-02-09 18:39:31 +0000
categories: agents
study: false
# recommended: false
# featured: true
---

![Overview](/assets/title-1.webp)

#### Contents
1. [Introduction](#part-1-introduction)

2. [Part I: A Brief History of Reasoning in Language Models](#part-1-main-body)

3. [Part II: Part II: Using LLMs in Multi-Agent Debate (MAD)](#part-2-main-body)

4. [Part III: Multi-Agent Debate Swarms](#part-3-main-body)

---

<a id="part-1-introduction"></a>

I’d like to shed some light on how we’re using LLMs, and where we’re going.

Lets focus on a recent story about Anthropic, a company raising at $18.4 billion with just one product: a language model called Claude. When Claude 2.1 arrived in November, it offered the largest context window for any transformer-based language model on the market; equivalent to around 500 pages of information or two Harry Potter and the Philosopher’s Stone(s) pasted in back-to-back.

People were impressed, until this [[1]](#ref-1) report by Greg Kamradt punched a hole in their roll-out. By conducting a “needle-in-the-haystack” test (to identify how accurately it used this context window), he showed that Claude’s quality averaged around 27% accuracy, and degraded at a near-linear rate. By launch, Claude 2.1 had been in development for at least nine months, and this seemed like a devastating blow that would require re-training and more research.

However, fast forward just fifteen days — before many even heard the news — and Anthropic had all but ‘patched’ this catastrophic error rate, and saved their startup in record time. Intriguingly, in their blogpost on the bug fix, they say that ‘adding just one sentence to the prompt resulted in near-complete fidelity throughout Claude 2.1’s 200k context window’ (that one sentence ensured the model used the words “Here is the most relevant sentence in the context” in its response). Just nine words had raised Claude 2.1’s average score from 27% accuracy to 98%. [[1]](#ref-1)

![Anthropic](/assets/anthropic.webp)
<br>
*Figure 1. Nine words of difference in retrieval capabilities for Claude 2.1.*

This miraculous overnight fix tells us two things.

- First, language models behave in unorthodox ways — Anthropic had launched a model that was both state-of-the-art on major benchmarks, and catastrophic at retrieval; something that would reasonably be considered essential to its general performance, but apparently not.
- Second, language models can be drastically improved overnight, without any additional training whatsoever.

We live in an era where developers describe their own software as ‘moody’. Towards the end of last year, one of the main complaints about ChatGPT was its increasing ‘laziness’, which OpenAI publicly described as a ‘bug’. Stranger still, while Anthropic was fixing Claude 2.1, one Twitter user of ChatGPT discovered that adding ‘I will tip $200’ would change its mood and make it far more verbose. Other users showed that telling it to ‘take a deep breath’ improved its math abilities, and saying ‘I have no fingers’ made it generate longer code. [[2]](#ref-2)

With this in mind, I would describe much of the progress in this area over the last few years as a search for clues. And in early 2024, there is enough evidence to draw a hypothesis with significant implications.

### I: A Brief History of Reasoning in Language Models<a id="part-1-main-body"></a>

Back in 2021, researchers at Google discovered that some language models outperformed models greater than twice their size, and speculated the difference was in the overall ‘quality’ of the training data. OpenAI observed similar effects; that models fine-tuned on code were better reasoners than larger, more generalised models. [[3]](#ref-3)

In January 2022, researchers showed that language models could drastically improve their reasoning by first making a plan of action. They called this Chain-of-Thought (CoT) prompting, and ultimately proved that reasoning abilities could be ‘unlocked’ for tasks once considered out of range for even the largest language models. [3]

In May of 2022, researchers showed that simply by adding ‘think step-by-step’ to the prompt, the model’s reasoning abilities improved on major benchmarks by up to 450%. What the researchers had stumbled across was the equivalent of Kahneman’s dual processes theory for transformer models. [[3]](#ref-3)

For the rest of the year, the focus was on optimising this process with multi-stage reasoning, where the model revisits the plan and improves it as it goes, based on the insights along the way. These methods are particularly useful now, when many agents can search the web in real-time to find new information. [[4]](#ref-4)

After the launch of ChatGPT on Nov. 30, 2022, there was a lot of work on tool-learning, where calculators, code environments, and APIs were built into the model to address the more obvious hallucinations (transformers aren’t best suited to solving maths, but they can use calculators). [[5]](#ref-5)

In March of last year, self-reflection was proposed to give models an instinct for stronger reasoning, by evaluating their past plan and adding an episodic memory buffer to induce better decision-making on subsequent trials. By maintaining this reflective narrative, agents could iteratively refine their strategies like a student developing a cookbook of good strategies. [[3]](#ref-3)

The most recent technique, Tree-of-Thought, offers more nuance to CoT; instead of following a linear train of thoughts, researchers encouraged the model to construct a branching tree of interconnected ideas, before applying heuristic search to test paths until convergence. [[3]](#ref-3)

Only in the last few months have we uncovered a strong explanation of why these models behave the way they do. In November, Stanford researchers showed that prompting models to ‘think step-by-step’ is literally causing the model to draw relationships between variables that might not have been directly connected in the training data. For a more detailed explanation, see [[6]](#ref-6).

This means methods like Tree-of-Thought are particularly useful for overcoming the “reversal curse” [[6]](#ref-6) because they allow the models to evaluate the validity of both forward and reverse relationships within a single reasoning tree. Therefore, given enough intermediary steps, any hypothesis may be conditionally deducible from sets of variables within well-trained language models; a natural language universal approximation theorem.

Humans are considered far more sample efficient than language models, as a result of how we perceive our world and build neurons, but we suffer from many of the same principles of the reversal curse, hence the importance of thinking deliberately and debating with people with different or unique perspectives.

### II: Using LLMs in Multi-Agent Debate (MAD)<a id="part-2-main-body"></a>
Given this understanding of how language models deliberate, lets imagine the potential strengths of these systems. How can we use language models to solve the most important problems?

In much the same way as humans, debate can break language models out of their echo chamber and expose them to better solutions to a problem. Groups can, under certain conditions, facilitate more innovation than lone agents are capable of.

Evidence suggests that groups generate a collective intelligence factor, which best describes a group’s performance on a wide variety of tasks. Woolley et al. (2010) call this property ‘c factor’, and they claim that among humans, this isn’t strongly correlated with either the average or maximum individual intelligence of group members. Rather, it is better predicted by the group’s equality of contribution, diversity, and agreeableness. I have deconstructed how these apply to LLMs here [[7]](#ref-7).

Debates focused on science and policy should aim to find novel solutions that diverge from conventional methods and open up better ways of thinking, as these global minima are more efficient than local-minima in the long-run. There are many barriers to this in human systems; social conventions and bias, status seeking, time constraints, bureaucracy, illness, and mood.

A well-designed, orchestrated group of artificial reasoning agents would expand the bounds of what is taken seriously to a maximal practical level. For instance, high-temperature models might best be mixed with more-objective and rational models, in order to efficiently converge on global maxima.

### III: Multi-Agent Debate Swarms<a id="part-3-main-body"></a>
It is not hard to imagine that with objective agents, debate would be far more efficient than at human institutions. While imperfect, autoregressive language models are on track to take up this mantle.

Some familiar dynamics will persist and need to be mitigated, such as groupthink (a form of multiple Degeneration-of-Thought and mass hallucination in agents), but over time such a system could be scaled up until top boards of executives, parliament, and research groups place significance on multi-agent debate as part of the deliberation process. [[8]](#ref-8)

![Swarms-1](/assets/swarms-1.webp)
<br>
*Figure 2. Dimensional localisation of training distributions shared by a multi-agent swarm.*

The race to build language models is contributing to what will downstream lead to a ‘Society of Minds’, where every agent in the system has a unique persona and localisation of variables within its training distribution. Multi-agent swarms will leverage the collective intelligence of clusters, operating in harmony to deliberate on multifaceted issues and deliver meaningful science. With the right design, the scale of these systems is limited only by compute and resources.

Much like AlphaZero, where millions of training runs allowed the machine to learn the optimal strategy, MAD swarms will be capable of simulating markets, societies, companies, and universities with nuance. Once built, the question of whether these systems will be effective will shift to how they will interact with one another, and the extent to which they are democratised.

![Swarms-2](/assets/swarms-2.webp)
<br>
*Figure 3. Various distributions for different applied sciences and processes.*

Fortunately, LLMs offer a relatively aligned and stable paradigm of AI. The larger a model, the more likely it becomes effective at ethical reasoning and understanding nuance, so for the most part these will be inert systems. However, naturally we should expect to see a landscape of competition, and it should be anticipated that those who best build autonomous embodiments of their multi-agent swarms shift the balance of power in their favour.

Parallel to this collective evolution is the rise of personalised language models — digital avatars attuned to one’s cognitive and emotional landscape. These agents could be decentralised and aligned only to you. They would act as your personal ‘exo-suit’ for navigating the digital world, enabling an envisioned Web 5.0. Over time you could trust your personal agent to complement your neurobiology and enhance your health, focus, and enjoyment when using the internet.

Such an agent would stand guard over your digital footprint; ensuring privacy, determining mental acuity, and aligning digital interactions with your personal well-being. They could negotiate with other web agents to improve the ads you are shown, and improve PageRank and algorithmic suggestions that are tailored to your mood that day.

If you chose to be productive, you could ask your agent, and it would organise your calendar and keep you on track. If you wanted to break a bad habit, your agent could help you avoid relapse in a healthy way. A host of different devices would allow this agent to become a constant companion, if that was what you desired, or if you so desired, it could help you minimise your time online.

As we usher in this era of individual-centric AI, the prospect of a truly representative democracy becomes tangible. It paves the way for a society where decision-making is streamlined, governance is responsive, and the individual’s voice is amplified. The burden of bureaucratic inefficiency and policy missteps can be lessened as these systems offer nuanced insights and ethical oversight.

Thus, we approach an age where AI empowers both the collective and the individual. Along the way, I’m confident we can look forward to a stable partnership with artificial intelligence.

<br>

---

## References

[1]<a id="ref-1"></a>

Greg Kamradt’s inital [tweet](https://twitter.com/GregKamradt/status/1727018183608193393).

Claude 2.1 at launch compared to GPT-4 Turbo: a [comparison](https://the-decoder.com/anthropics-best-claude-2-1-feature-suffers-the-same-fate-as-gpt-4-turbo/).

Anthropic’s [blogpost](https://www.anthropic.com/news/claude-2-1-prompting) on the bug fix.

[2]<a id="ref-2"></a>

Here’s a tip: [Tip $200](https://twitter.com/voooooogel/status/1730726744314069190).

‘I have no fingers’: https://arstechnica.com/information-technology/2023/12/is-chatgpt-becoming-lazier-because-its-december-people-run-tests-to-find-out/

[3]<a id="ref-3"></a>

Also, many researchers uncovered a trend, that models that were trained on code would trigger the ability to be enhanced later by Chain-of-Thought prompting; hence models that were far smaller could go a lot further than their larger counterparts.

Reasoning with Language Model Prompting: A Survey https://aclanthology.org/2023.acl-long.294.pdf#page=3&zoom=100,94,380

Chain of Thought Reasoning: https://arxiv.org/abs/2201.11903

Large Language Models are Zero-Shot Reasoners (think step-by-step): https://arxiv.org/abs/2205.11916

Reflection: https://arxiv.org/abs/2303.11366

Tree of Thoughts: https://arxiv.org/pdf/2305.10601.pdf

[4]<a id="ref-4"></a>

Language Models of Code are Few-Shot Common-sense Learners: https://arxiv.org/abs/2210.07128

Making Large Language Models Better Reasoners with Step-Aware Verifier https://arxiv.org/abs/2206.02336

Least-to_most Prompting Enables Comlex Reasoning in LLMs https://openreview.net/forum?id=WZH7099tgfM

Here’s a brilliant deep-dive in late December 2022 by Yao Fu: https://yaofu.notion.site/How-does-GPT-Obtain-its-Ability-Tracing-Emergent-Abilities-of-Language-Models-to-their-Sources-b9a57ac0fcf74f30a1ab9e3e36fa1dc1

[5]<a id="ref-5"></a>

There is also evidence that models can improve themselves by determining labels for new data and fine-tuning on these self-generated solutions.

ToolFormer: Langauge Models Can Teach Themselves to Use Tools: https://arxiv.org/pdf/2302.04761.pdf

[6]<a id="ref-6"></a>

Prystawski and Goodman (2023) Why Think Step By Step? Reasoning Emerges from the Locality of Experience: https://arxiv.org/abs/2304.03843

### An explanation:

Transformers (the technology underlying the LLM) are autoregressive in nature, meaning they generate text by predicting the next word in a sequence based on the words that precede it. The predicted word at any one point is the one with the highest probability, which was learned during the training process by showing the transformer many examples.

Once trained, the model stores these probabilities in the form of representations that situate each word among those it is commonly used with. These relationships between different words are stored in the weight matrix during inference (when the model generates its output given new input data). When the connections between two words are strong, the LLM is more confident about using them together, as it has seen this many times before. When these connections are weak, they respond with low confidence or hallucinations.

What Prystawski and Goodman (2023) formulated was the fact that where variables are strongly connected, they represent local clusters in a dimensional manifold. Chain-of-Thought excels when it can leverage these local inferences to bridge gaps between distantly related concepts.

Therefore, CoT is beneficial when estimating probabilities involving variables that rarely or never appear together in training. It can logically deduce the relationship between these variables through intermediate connections that connect them indirectly. This has the effect of reducing their estimation bias and improves their ability to solve promblems.

This has massive implications for the next generation of models, as it means new models can be more data-efficient if they are trained on locally-structured datasets than if they were trained on non-local datasets. This allows them to be trained on less comprehensive and complete data, because it makes up for the lack of data during runtime with CoT or ToT.

Note: this doesn’t mean that locally-structured datasets will always cause models to reason better, this is only the case if the underlying data describes a local distribution. It isn’t beneficial to reason over variables that are not best represented by a local structure. Thus, there exists a threshold when having models generate divergent and novel thoughts, as the data they’ve been trained on may reduce their confidence in actual strong hypotheses. CoT will not be a miracle cure when the data is not of high quality.

### The Reversal Curse

To better understand the above, here’s an example. During training, when variables are presented in a specific order (e.g. “A is B”), the model effectively encodes this directional relationship into its parameters, as this way it can replicate this relationship in predictions. Given the autoregressive nature of these models, where predictions are made sequentially, the learning process is inherently directional. This means the model becomes adept at predicting “B” given “A”, but not “A” given “B”.

This is shown in the following example: variable A (Tom Cruise), is linked directionally to variable B (his mother, Mary Lee Pfeiffer), while Mary Lee Pfeiffer, in isolation, does not have any conditional link to Tom Cruise, her son. This is not because the transformer lacks the logical capability to understand the symmetry of equivalence relations, but because its training has not encouraged the formation of a bidirectional connection between these specific variables.

One way of overcoming the reversal curse would be to enable intermediate steps that encourage the model to reason about variables in both directions, and unlock trains of thought that were not explicit in the weight matrix alone. Once the model states that Tom Cruise’s mother is Mary Lee Pfeiffer’s, it is able to explicitly draw the connection that Tom Cruise must be her son.

[7]<a id="ref-7"></a>

It is worth deconstructing these factors for the purpose of rebuilding this framework around LLMs, where intelligence inequalities may be magnitudes higher than those observed in human groups. 95% of humans fall within 30 points of the mean, while language models may perform ten times higher than another across all performance benchmarks.

Regarding the initial fact about individual intelligence, this is evidence of how similar humans really are. If there were a team of five 100-IQ individuals and one 400-IQ individual, assuming there are no major social defects, the persuasive capabilities and insight of that superhuman agent would change the group dynamic significantly. In the world of LLMs, there are models with hundreds of times the parameters and complexity of others, measuring the effect of a model’s capability across solo benchmarks must be considered as a factor when building a multi-agent debate.

Similarly, the agreeableness of the group (the ‘social sensitivity’) is significantly correlated to the proportion of females by Woolley et al. Default LLMs have no explicit gender, meaning measures such as tuning aggression or neutrality could in fact be possible over the course of the discussion, and is likely crucial to the nature of the outcome.

Lastly, the equality in contribution is a factor that can be explicitly set in a digital system, but comes with some effects that should be discussed. If all LLMs were to contribute in turns, and were given a set character limit, the most sophisticated models would dominate with their persuasive capabilities.

To mitigate this, models with the largest parameters could be more neutral or bipartisan, perhaps as the role of ‘judge’, while smaller models can be used to debate at different temperatures of creativity. The end goal is to maximally enable accurate divergent thought to propagate through the system, and the conditions when this happens are yet to be defined for any multi-agent system of LLMs.

Improving Factuality and Reasoning in Language Models through Multiagent Debate: https://arxiv.org/abs/2305.14325

[8]<a id="ref-8"></a>

By facilitating a search phase for a variety of facts and opinions, agents can ideate and debate over multiple rounds with oversight from a ‘judge’, played by a relatively larger language model or human expert. Such exploratory processes as parliament and the House of Lords (in the UK) converge on near-global minima in modern society.

[Lone Citation]
Woolley et al. (2010) https://www.science.org/doi/10.1126/science.1193147