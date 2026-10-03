---
title: "Apps Like Anki for Vocabulary Should Remove Review Homework"
description: "Apps like Anki for vocabulary should train contextual recall, not self-grading and card maintenance. Here is the mechanism Lexi uses instead."
date: "2026-10-02"
tags: ["vocabulary apps", "Anki alternatives", "spaced repetition", "vocabulary crossword", "Lexi"]
targetKeyword: ""
draft: false
---

Apps like Anki for vocabulary usually copy the visible shell of spaced repetition: a prompt appears, you answer, you grade yourself. Vocabulary has extra failure modes: definition overfitting, context-free recall, confusable synonyms. Review starts feeling like homework when the app offloads those problems onto the learner.

## Apps like Anki for vocabulary should remove review administration

Anki’s review loop is explicit: answer the card, then choose Again, Hard, Good, or Easy; the manual documents that flow [here](https://docs.ankiweb.net/studying.html). That architecture is right for arbitrary self-made decks: anatomy, kanji, formulas, any domain where you know exactly what fact belongs on each card.

English vocabulary is different. The target is not a fact but a word that must become available when a sentence needs it.

So the app should own the annoying parts: which words need review, how the clue is phrased, how much context is enough, how to infer partial fluency, and how to stop the learner from memorizing the card instead of the word.

I built Lexi around that requirement: spaced repetition delivered as dynamically generated crossword puzzles. You solve. The scheduling happens underneath.

## Flashcards train the wrong association

A one-line definition card has a hidden defect: it trains recall of that definition’s phrasing. After enough repetitions, you may not be retrieving *obsolete* so much as recognizing “no longer in use” from a familiar card.

Lexi removes the fixed prompt. Every word cycles through multiple differently phrased clues, currently three per word, under one spaced-repetition schedule per word. They are different surface forms of a single underlying item, so there is no single wording to overfit to.

<img src="/img/cards/obsolete-c59d0cfb.jpg" width="1536" height="1024" loading="lazy" alt="Lexi word card for obsolete: no longer in use">

The word card for *obsolete* defines it as “no longer in use” and gives the sentence: “My flip phone is now obsolete, gathering dust in a drawer.” That introduction happens before the puzzle. Lexi never quizzes you cold on a word you could not possibly know.

Then the clue does the real work: a fill-in-the-blank sentence plus a meaning-evoking hint. Recall happens in context, not against a naked definition. For the deeper mechanism, see [A Spaced Repetition Vocabulary App Without Flashcards](/posts/2026-07-03-spaced-repetition-vocabulary-app-without-flashcards/).

## Crosswords push retrieval in the useful direction

Good retrieval practice makes you produce the word. Bad review loops make you manage the interface.

A crossword slot gives you length, crossing letters, and sentence context. Those constraints do not make recall fake. They make it linguistic. Real reading and writing do not ask, “Which definition was on the card?” They ask, “What word fits here?”

Lexi grades automatically from solve timing: fast, normal, or slow, normalized for clue and word length. No Again/Hard/Good/Easy buttons. No self-grading paperwork. If you knew it quickly, the schedule can treat that differently from a word you dragged out letter by letter.

One self-grade is trivial. Hundreds are maintenance.

## A vocabulary system should winnow, not hoard

A giant deck looks productive because the number is large. It is often the wrong number.

Lexi’s dataset contains 20,000 words ordered roughly by rarity for maximal real-world utility per unit time spent. About 3,000 words currently have pipeline-grade clues, and the first roughly 1,500 have illustrated word cards. The goal is not to shovel every possible word at you. It is to move through useful vocabulary in a sane order.

<img src="/img/cards/winnow-ce653b00.jpg" width="1536" height="1024" loading="lazy" alt="Lexi word card for winnow: separate out the best from a larger group">

The card for *winnow* defines it as “separate out the best from a larger group”: “After receiving hundreds of applications, the hiring manager had to winnow the candidates down to a shortlist of five.” That is also the product philosophy. Vocabulary study should winnow attention.

The clues are not static deck entries. Lexi uses an iterative Creator → Validator → Guesser → Reviser pipeline with frontier language models; a clue can undergo up to seven revisions before acceptance, against quality criteria refined through repeated in-app revision rounds. Definitions, clues, and images are continuously revised from in-app user feedback via regular updates. A maintained learning corpus removes bad prompts centrally instead of making every learner work around them alone.

## Confusable words need contrast, not more repetition

Near-synonyms fail differently from unknown words. If you confuse *frugal* and *stingy*, another isolated definition does not fix the boundary. You need the distinction right when your brain reaches for the wrong word.

Lexi handles that two ways. First, synonym nuance comparisons let you tap any two synonyms in a synset to read precisely how they differ. Second, Premium adds contrastive training: nuance cards state exactly how two near-synonyms differ, match drills assign each word of a confusable cluster to the illustrated scene it fits best, and typing a confusable cousin into a slot surfaces the distinction at the moment of the mix-up.

If the failure is confusion between neighbors, the training has to put the neighbors in contact. See the style of distinction in [Frugal vs. stingy](/posts/2026-09-29-frugal-vs-stingy/).

## Choose the tool whose review loop matches the target skill

Use Anki if you need arbitrary self-authored decks. That is its natural terrain.

For English vocabulary, I built Lexi around a different review loop:

— varied clues under one spaced-repetition schedule, so you learn the word rather than a prompt  
— contextual fill-in-the-blank recall, so production happens inside language  
— automatic timing-based grading, so review does not turn into self-evaluation paperwork  
— word-card introductions before puzzles, so new words are learned before they are tested  
— nuance training for confusable synonyms, so the system attacks the mistakes vocabulary learners actually make

Skip Lexi if you need Android, non-English study, or full polysemy today; it is iOS-only, English-only, and one sense per word so far.

**CTA:** If you want spaced repetition through vocabulary crosswords instead of flashcard review homework, get Lexi free on iPhone or iPad: [Download Lexi on the App Store](https://apps.apple.com/us/app/lexi-vocabulary-crosswords/id6740172587). No ads.
