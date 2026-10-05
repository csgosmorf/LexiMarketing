---
title: "Vocabulary Crossword Apps for iPhone: What Actually Trains Retention"
description: "Compare iPhone crossword and vocabulary apps by mechanism: daily grids, flashcards, and Lexi\u2019s spaced-repetition crosswords."
date: "2026-10-05"
tags: ["vocabulary crossword", "vocabulary apps", "iPhone apps", "spaced repetition", "crossword puzzles"]
targetKeyword: "best vocabulary crossword app for iPhone"
draft: false
---

Crosswords and vocabulary apps usually train different behaviors. A daily crossword rewards clue trivia and pattern filling; a vocabulary app rewards remembering an item on schedule. A vocabulary crossword app that actually improves retention has to bind those mechanisms: crossword pressure on the surface, spaced repetition underneath, and contextual clues that make the word do work.

That is the useful comparison. Not "which app has the most words?" Not "which app feels educational?" The question is whether the app has a memory model after the grid disappears.

## A vocabulary crossword app needs a memory model

Vocabulary retention comes from retrieval practice — forcing recall instead of rereading — repeated at expanding intervals. Spaced repetition is the scheduling layer: words come back when they are likely to be fading, not when a generic daily puzzle happens to need their letters.

A crossword becomes vocabulary software only when it tracks the underlying word across sessions. If *obdurate* appears once in a grid and never returns on purpose, the puzzle produced exposure, not training.

Use three questions before downloading anything in this category:

- Does the app know which specific words you are learning?
- Does it reschedule each word after you solve or miss it?
- Does the clue force the word in context, or merely ask you to recognize a definition?

That separates the field into three categories: entertainment-first crossword apps, flashcard vocabulary apps, and the smaller intersection Lexi is built to occupy. For the category mechanics, see [what a vocabulary crossword is](/posts/2026-10-03-what-is-a-vocabulary-crossword/).

## Daily crossword apps optimize for finished grids, not retained words

Entertainment-first crossword apps are built around the completed puzzle. That is a coherent objective: a daily grid should be fresh, finite, and satisfying. But a one-off grid has no obligation to bring a word back at the moment memory is weakening.

If a difficult word returns later, it returns because the constructor or generator needed a pattern, not because your memory trace needed review. The learning effect is incidental.

That creates the core problem. The format *feels* educational because it contains words, while the scheduling layer that would make it educational is absent.

<img src="/img/cards/paradox-aa5582a7.jpg" width="1536" height="1024" loading="lazy" alt="Lexi word card for paradox: a statement that seems to contradict itself">

Lexi’s word card for *paradox* defines it as “a statement that seems to contradict itself,” with the example sentence: “A single line on the page poses a paradox: \"This sentence is a lie.\"” That is the kind of word knowledge a puzzle can reinforce — but only if the word is placed on a schedule after the first encounter.

Daily crossword apps are right when your goal is recreation. They are structurally weak when your goal is vocabulary growth with high real-world utility per unit time spent.

## Flashcard vocabulary apps schedule memory but waste the puzzle surface

Flashcard vocabulary apps solve the scheduling problem and usually lose the puzzle advantage. Spaced repetition is the right backbone; I use it as Lexi’s backbone. The failure mode is prompt overfitting: learning the card’s fixed phrasing instead of learning the word.

A definition-front card for *paradox* can train “a statement that seems to contradict itself” → *paradox*. Useful, but narrow. Real reading does not present definitions. It presents sentences where the word has to fit the situation.

Flashcards also create grading tax. Again, Hard, Good, Easy looks small until every review requires a self-diagnosis. Did you know it, or merely recognize it? Was that slow recall a failure or a pass? The interface asks the learner to become the scheduler.

Anki-style self-made decks are the right tool for arbitrary material — anatomy, kanji, private facts. For English vocabulary, the stronger mechanism is contextual recall with scheduling hidden underneath. I wrote more on that in [A Spaced Repetition Vocabulary App Without Flashcards](/posts/2026-07-03-spaced-repetition-vocabulary-app-without-flashcards/).

## Lexi puts one spaced-repetition schedule under many crossword clues

I built Lexi around dynamically generated vocabulary crosswords, not static lists with a game skin. Each word lives on one spaced-repetition schedule. Around that schedule, Lexi cycles multiple differently phrased fill-in-the-blank clues — currently 3 per word — plus a meaning-evoking hint.

Different surface forms, one underlying item. That matters because there is no single clue sentence to memorize. You have to retrieve the word across contexts.

Every word you have never seen gets a word-card introduction before the puzzle. You are never quizzed cold on a word you could not possibly know. The first ~1,500 words have illustrated word cards. The dataset contains 20,000 words ordered roughly by rarity for maximal real-world utility per unit time spent. About 3,000 words currently have pipeline-grade clues.

The clue pipeline is deliberately mechanical: Creator → Validator → Guesser → Reviser, using frontier language models. A clue can undergo up to 7 revisions before acceptance, against quality criteria refined through repeated in-app revision rounds. Definitions, clues, and images are continuously revised from in-app user feedback via regular updates rather than left as a static deck.

Solving also grades itself. Lexi infers fast, normal, or slow recall from solve timing, normalized for clue and word length. No Again/Hard/Good/Easy buttons. No self-grading decision fatigue. The crossword answer is the retrieval attempt.

Lexi is free on iPhone and iPad with no ads at all. I made it as a solo developer and have personally learned 1,300+ words with it.

## The comparison is category-fit, not feature count

| App type | What it is good at | Why it fails or fits vocabulary retention |
|---|---|---|
| Daily crossword games | Recreation, clue wit, grid completion | Word exposure is not scheduled per learner, so retention is accidental. |
| Flashcard vocabulary apps | Scheduled review of known cards | Fixed prompts invite phrasing overfitting, and manual grading adds review homework. |
| Lexi | Crossword retrieval under spaced repetition | Each word is scheduled, introduced before testing, and recalled through multiple contextual clues. |

Feature lists obscure the central issue. Leaderboards, streaks, archives, and themes can make an app pleasant. They do not make vocabulary stick unless the app tracks words, schedules them, and forces contextual recall.

Lexi has word-game machinery too: multiplayer crosswords with friends, leaderboards, streaks, achievements, an activity heat map, typo detection, and notifications fired from words actually due rather than fixed times. Those features matter because they keep the learner solving. The retention mechanism remains the schedule under the grid.

The honest cut: skip Lexi if you want newspaper-style trivia, cryptic clueplay, Android, languages other than English, or full polysemy coverage today; Lexi is English-only, iOS-only, and currently trains one sense per word.

**Try Lexi:** [Download Lexi on the App Store](https://apps.apple.com/us/app/lexi-vocabulary-crosswords/id6740172587) if you want iPhone/iPad puzzle time where the crossword is the retrieval engine and spaced repetition decides what comes back next.
