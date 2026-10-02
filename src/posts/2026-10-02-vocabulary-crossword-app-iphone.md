---
title: "Vocabulary Crossword App for iPhone: Learn New Words by Solving, Not Flipping Flashcards"
description: "What a vocabulary crossword app should do: introduce words first, test recall in context, space reviews, and avoid fixed clue memorization."
date: "2026-10-02"
tags: ["vocabulary crossword app", "vocabulary crosswords", "spaced repetition", "iPhone apps", "vocabulary learning"]
targetKeyword: "vocabulary crossword app"
draft: false
---

A word game can feel educational while training almost nothing: you solve from pattern, crosses, and clue trivia, then the word vanishes before retrieval has time to consolidate. A vocabulary crossword app should make a stricter bargain: every answer should be a word it introduced, tested in context, then rescheduled by memory strength.

That is the bar I built Lexi for: crossword play with a memory system underneath.

## A vocabulary crossword app should introduce before it tests

Cold quizzing is not rigor. It is noise. If you have never seen a word, a crossword clue can only measure guesswork, prior exposure, or how much help the crossings gave you.

Lexi introduces every unseen word with a word card *before* the puzzle. The card is styled like a collectible game card: an image designed to evoke the word’s meaning, a definition, an example sentence matching the image, and connotation tags. The first ~1,500 words have illustrated word cards.

That first exposure matters because the puzzle is not supposed to be a trivia trap. It is supposed to be retrieval practice: pulling a meaning back into working memory when a sentence calls for it.

Lexi’s dataset contains 20,000 words ordered roughly by rarity, so early time goes to higher-utility words before the stranger edges of English. About 3,000 words currently have pipeline-grade clues. The design target is maximal real-world utility per unit time spent, not a museum catalog of obscure words.

Take *rankle*, a word that is easy to half-know: something about annoyance, hard to pin down further. Its card defines it as “to cause lingering irritation or resentment” and shows two panels. In the first, a boss jabs a finger at an employee. In the second, the same man is unwrapping his lunch hours later with the barb still lodged in his chest. The example sentence matches the picture: “His boss’s morning jab rankles him even as he unwraps his lunch.”

<img src="/img/card-rankle.jpg" width="360" height="449" loading="lazy" alt="The Lexi word card for rankle: a boss snaps at an employee in the morning, and the remark still stings as he unwraps his lunch. Below are the definition and an example sentence.">

The image carries the part a bare definition tends to lose: *lingering*. The irritation is not the jab itself; it is what remains at lunch. So when a puzzle later asks “Years later, the unfair snub still [verb]d whenever the award was mentioned,” with the hint “gnaw at emotionally; make resentful or angry,” there is a scene to retrieve the word from, not just a string of synonyms.

## The clue should make you retrieve meaning in a sentence

Definition flashcards often reward recognition of a phrasing. If the front says “excessively talkative” often enough, the back becomes a reflex detached from actual use.

Lexi clues are fill-in-the-blank sentences plus a meaning-evoking hint. The sentence constrains usage. The hint constrains meaning. The crossings constrain spelling. You are not reciting the card; you are selecting the word that fits a situation.

That distinction is the point. Recognition and recall diverge: seeing a word on the page is easier than producing it when a sentence demands it. I wrote about that failure mode here: [why you recognize a word but can’t find it when you need it](/posts/2026-09-29-recognize-a-word-cant-recall-it/). A vocabulary crossword should train the production side.

## A vocabulary crossword app should repeat words on a schedule

A crossword that shows a word once is entertainment with a vocabulary aftertaste. Learning requires spaced repetition: showing an item again after time has passed, when retrieval is effortful enough to strengthen memory.

Lexi delivers spaced repetition through dynamically generated crossword puzzles. The puzzle is not a fixed sheet. It is assembled around words that are due.

The grading is automatic. Lexi infers recall strength from solve timing — fast, normal, or slow — normalized for clue and word length. There are no Again/Hard/Good/Easy buttons and no self-grading ritual after each card. If you solved quickly, the schedule treats that differently from a slow, crossing-assisted solve.

That is the right place to measure recall: inside the act of solving, not afterward while you introspect about how hard it felt.

For the broader design argument, see [A Spaced Repetition Vocabulary App Without Flashcards](/posts/2026-07-03-spaced-repetition-vocabulary-app-without-flashcards/).

## Fixed clues train clue memory

A static clue can become its own answer key. If *parsimonious* is always prompted by the same sentence, you can learn the sentence-answer pair without learning the word deeply.

Lexi avoids that failure by cycling multiple differently phrased clues under one spaced-repetition schedule per word. Currently, each word has 3 clue phrasings. Those clues are different surface forms of a single underlying item, not separate things to memorize.

That detail is load-bearing. If each clue had its own schedule, you would be scheduling clue familiarity. If the word has one schedule, every clue variant feeds the same memory model. There is no fixed phrasing to overfit to.

## Generated puzzles let memory choose the grid

A puzzle can be built around a theme, or it can be built around the words your memory needs next. For vocabulary learning, the second ordering is the mechanism that matters.

Lexi’s crosswords are generated dynamically from the learning system. Words due for review can appear because they are due, not because they happened to fit a prewritten puzzle.

Named word collections can also inspire puzzle generation: words with embeddings close to your collection get prioritized. That lets you bias play toward a domain without hand-building a deck.

Notifications use the same principle. They fire from words actually due, not fixed times pretending to be personalized.

## The clue pipeline has to reject pretty failures

A vocabulary crossword clue has two jobs: it must be solvable, and it must make the target meaning necessary. A clue can be elegant and still useless if it points to ten near-synonyms or rewards general world knowledge instead of word knowledge.

Lexi’s clues are produced by an iterative Creator → Validator → Guesser → Reviser pipeline using frontier language models. A clue can undergo up to 7 revisions before acceptance, against quality criteria refined through repeated in-app revision rounds.

The content is maintained, not frozen. Definitions, clues, and images are continuously revised from in-app user feedback via regular updates — v1.163 as of Sept 2026.

There are honest limits. Lexi is English only. It is iOS only. It currently trains one sense per word, so polysemy is not solved yet. Word cards and images cover the first ~1,500 words.

For a deeper explanation of the crossword side, see [Vocabulary Crossword Puzzles That Teach by Retrieval](/posts/2026-09-30-vocabulary-crossword-puzzles-for-adults/).

## On iPhone, the app should make word-game time count

On iPhone and iPad, Lexi teaches vocabulary through spaced repetition delivered as dynamically generated crossword puzzles. It introduces unseen words before quizzing, uses fill-in-the-blank clues plus meaning hints so recall happens in context, cycles 3 clue phrasings under one schedule per word, infers SRS grading from solve timing, includes synonym nuance comparisons, and is free with no ads at all.

I made Lexi because I wanted word-game minutes to count. I have personally learned 1,300+ words with it.

Do not bother if you need Android or non-English vocabulary today; Lexi is English-only and iOS-only.

**Try Lexi:** [Download Lexi on the App Store](https://apps.apple.com/us/app/lexi-vocabulary-crosswords/id6740172587). It is free on iPhone and iPad, with no ads.
