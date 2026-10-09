---
title: "A Vocabulary Trainer App Should Train Recall, Not Recognition"
description: "A vocabulary trainer should pick useful words, introduce them before testing, force contextual recall, schedule reviews, and cut review friction."
date: "2026-10-09"
tags: ["vocabulary trainer app", "vocabulary app", "spaced repetition", "vocabulary builder", "retrieval practice"]
targetKeyword: "vocabulary trainer app"
draft: false
---

A vocabulary trainer app fails when it measures recognition instead of building recall. A dictionary, word-of-the-day feed, or static deck can expose you to words. Training means forcing the word back out of memory under conditions close enough to reading and writing that the skill transfers.

A vocabulary trainer has five jobs: pick useful words, introduce unseen ones before testing, force active recall, repeat at the right time, and remove review friction.

## A vocabulary trainer should spend time on useful unknown words

Selection is the first design problem. Time spent on words you already know is wasted. Time spent too early on museum-piece obscurities turns vocabulary study into trivia.

Lexi starts from a 20,000-word dataset ordered roughly by rarity, aiming for maximal real-world utility per unit time spent. I do not mean “follow a frequency list blindly.” I mean the curriculum should bias toward words that are rare enough to be worth learning but common enough to pay back in real reading.

That ordering matters because vocabulary has an ugly opportunity cost. Ten minutes on *obdurate* is ten minutes not spent on *placate*, *tacit*, or *intransigent*. A trainer should allocate practice like a curriculum, not a shuffled pile of impressive words.

Lexi also lets named word collections *inspire* puzzle generation: words with embeddings close to your collection get prioritized. That gives the system a second relevance signal without making you hand-build every review item.

## Quizzing cold measures ignorance; it does not teach

A trainer should not ask for a word it has never introduced. Many vocabulary tools still do exactly that: first encounter, immediate miss.

Lexi shows every never-seen word on a word card before the puzzle. For the first ~1,500 words, those cards are illustrated and include an image designed to evoke the meaning, a definition, an example sentence matching the image, and connotation tags.

<img src="/img/cards/pragmatic-cc2ab818.jpg" width="1536" height="1024" loading="lazy" alt="Lexi word card for pragmatic: focused on what works in practice">

For *pragmatic*, the card definition is “focused on what works in practice,” with the example: “She chose the pragmatic fix, patching the leak before discussing theory.”

<img src="/img/cards/tangible-88e6e41b.jpg" width="1536" height="1024" loading="lazy" alt="Lexi word card for tangible: Able to be treated as fact; real or concrete.">

For *tangible*, the card says “Able to be treated as fact; real or concrete.” The example sentence is: “The audit turned rumors into tangible evidence the board could not ignore.”

That first exposure matters. The image, sentence, and definition all point at the same semantic target from different angles. Testing after that is fair. Testing before it is just sorting.

## Flashcards often train the wrong association

Recognition is cheap. You can read a definition, feel familiar with it, and still fail to produce the word a day later. Recognition and recall are different tasks.

Lexi forces recall through dynamically generated crossword puzzles. Each clue is a fill-in-the-blank sentence plus a meaning-evoking hint, so the target word has to fit both context and meaning. You are not selecting from visible options. You are producing the word.

That changes what gets trained. A fixed definition card can teach an association from one stable phrase to one answer. Real vocabulary use is messier: you meet a sentence, feel the semantic shape it needs, and retrieve the word that belongs there.

I built Lexi’s clue system to train *that* retrieval problem. Clues are produced by an iterative Creator → Validator → Guesser → Reviser pipeline using frontier language models. A clue can go through up to 7 revisions before acceptance, against quality criteria refined through repeated in-app revision rounds. Generated content only helps if the generator is not the final judge.

## The schedule should attach to the word, not one clue

Spaced repetition means reviewing just late enough that retrieval is effortful but still succeeds. Vocabulary adds a specific failure mode: if the same card keeps returning, you can overfit to its wording.

Memorizing “unyielding; stubbornly resistant” can train recall of that phrase more than recall of *obdurate*. The prompt becomes the cue.

Lexi avoids that by cycling each word through multiple differently phrased clues, currently 3 per word, under *one* spaced-repetition schedule per word. Different surface forms, one underlying item. The schedule tracks the word, not the sentence that happened to ask for it.

That is the point of the format. The puzzle supplies repeated retrieval events. The clue variation stops those events from collapsing into a memorized card.

## Review friction weakens the training loop

Many spaced-repetition systems make you grade yourself: Again, Hard, Good, Easy. The buttons look trivial. The decision is not. You must judge how well retrieval went, then accept the schedule that judgment produces, hundreds of times.

Lexi infers SRS grading automatically from solve timing: fast, normal, or slow, normalized for clue and word length. Quick retrieval is treated differently from a long struggle. Hesitation is recorded without asking you to label it. No self-grading decision fatigue.

The same principle shows up elsewhere. Near-miss answers trigger a “likely a typo” toast instead of counting as wrong. Notifications fire from words actually due, not fixed times. Streaks can be rekindled: three consecutive days of play started within days of a slip restore the lost run, so one bad week does not erase months.

Friction is part of the mechanism. Every unnecessary decision competes with the retrieval act the app is supposed to train.

## The honest filter

Lexi is English only and iOS only. It teaches one sense per word so far, not polysemy yet. Word cards and images cover the first ~1,500 words, while ~3,000 words currently have pipeline-grade clues.

If you want arbitrary self-made decks for anatomy, kanji, or a class list your teacher controls, use a deck tool. If you want an English vocabulary trainer that introduces words before testing, forces contextual recall, and schedules review without flashcard buttons, Lexi is built for that.

## Try Lexi

Lexi is free on iPhone and iPad with no ads at all. It teaches vocabulary through spaced repetition delivered as dynamically generated crossword puzzles, with word-card introductions before new words and automatic review scheduling from solve performance.

[Download Lexi on the App Store](https://apps.apple.com/us/app/lexi-vocabulary-crosswords/id6740172587)
