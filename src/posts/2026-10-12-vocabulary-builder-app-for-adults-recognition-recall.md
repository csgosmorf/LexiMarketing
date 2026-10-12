---
title: "How to Choose a Vocabulary Builder App for Adults: Recognition Is Not Recall"
description: "Choose a vocabulary builder app for adults by the mechanism that matters: producing words from meaning and context, not recognizing visible answers."
date: "2026-10-12"
tags: ["vocabulary builder app for adults", "vocabulary apps", "spaced repetition", "retrieval practice", "Lexi"]
targetKeyword: "vocabulary builder app for adults"
draft: false
---

Recognition feels like knowledge because the word lights up when you see it. Production exposes the gap: you want *obdurate*, *taciturn*, or *fastidious*, but all you can retrieve is "stubborn," "quiet," or "picky." A vocabulary builder app for adults should be judged by how often it forces that missing act: recall from meaning and context, before the answer is visible.

This is the selection framework. Not polish. Not streak confetti. Not the largest list. The question is: does the app make you *produce* the word under useful constraints?

I wrote separately about [why you recognize a word but can’t recall it](/posts/2026-09-29-recognize-a-word-cant-recall-it/). This post is the buying test.

## A vocabulary builder app for adults must train production, not recognition

Most vocabulary products sit somewhere on this table:

| App pattern | What you practice | Failure mode |
|---|---|---|
| Word lists | Seeing many words quickly | Exposure feels productive, but no retrieval occurs |
| Word-of-the-day feeds | Brief recognition and novelty | Tomorrow’s word has no scheduled return |
| Definition flashcards | Mapping a word to a definition, or a definition to one phrasing | You can memorize the card rather than the word |
| Multiple-choice quizzes | Picking the visible answer | The options do part of the retrieval for you |
| Word games | Solving letter or pattern constraints | Meaning can become secondary |
| Contextual recall | Producing the word from sentence meaning | This is the adult-vocabulary target |

Recognition is not useless. You need an introduction before recall can start. But recognition should be the *input* stage, not the whole product.

Lexi starts from that distinction: every unseen word gets a word-card introduction before the puzzle, then spaced repetition is delivered through dynamically generated crossword puzzles. The review event is not "do I remember this definition?" It is "can I produce the word that fits this sentence and this meaning-evoking hint?"

## Definitions introduce; clues train

Take *infer*.

<img src="/img/cards/infer-a573276c.jpg" width="1536" height="1024" loading="lazy" alt="Lexi word card for infer: draw a conclusion from evidence">

The card definition is "draw a conclusion from evidence." The example sentence is: "From the muddy tracks, we infer that the fox crossed after the rain."

That is a good introduction because it binds the word to a mental operation: evidence → conclusion. But if the app stops there, you have mainly practiced recognizing *infer* when it is already in front of you.

Lexi then moves the word into fill-in-the-blank crossword clues: a sentence with a missing answer plus a hint that evokes the meaning. The blank matters. Crossing letters help, but they do not do the retrieval for you; you still have to supply the word that belongs in the context.

That is why I built Lexi as puzzles rather than conventional flashcards. A crossword slot makes recall concrete. There is a correct surface form. You either retrieve it, retrieve it slowly, typo it, or fail to retrieve it.

## A fixed card lets you overfit to the card

A single flashcard has a hidden problem: it becomes its own training artifact. If the prompt always says "stubbornly refusing to change one’s opinion," you can learn that phrase and answer *obdurate* without becoming much better at using *obdurate* elsewhere.

This is overfitting: learning the surface pattern of the practice item instead of the underlying word.

Lexi avoids that by cycling multiple differently phrased clues per word — currently 3 per word — under one spaced-repetition schedule per word. The schedule tracks the underlying item; the clues are different surface forms of it. That forces the useful invariant to survive: the meaning, connotation, and contextual fit of the word.

The clue pipeline exists to make that possible at scale. Clues are produced by an iterative Creator → Validator → Guesser → Reviser pipeline using frontier language models. A clue can undergo up to 7 revisions before acceptance, against quality criteria refined through repeated in-app revision rounds.

That machinery is not ornamental. Adult vocabulary training needs many precise contexts, not one immortal card.

## Measurement should not ask the learner to grade the learner

Spaced repetition works by scheduling reviews near the point where recall is becoming effortful. The common implementation asks you to press Again, Hard, Good, or Easy.

That creates a second task: self-diagnosis. Was the answer easy because you knew it, because the prompt was obvious, or because you half-recognized the card from yesterday?

Lexi infers SRS grading automatically from solve timing: fast, normal, or slow, normalized for clue and word length. No self-grading buttons. No review-session bookkeeping. The puzzle is the measurement event.

This also makes practice less vague. A word is not merely "seen." It is introduced, attempted in context, timed, scheduled, and reattempted through different clues.

For more on the training model, see [A Vocabulary Trainer App Should Train Recall, Not Recognition](/posts/2026-10-09-vocabulary-trainer-app-practice-recall-without-flashcard-review-homework/).

## The practical buying test

If you are choosing a vocabulary builder, ask these questions before you install anything:

1. **Do I ever have to produce the word without seeing it?** If not, the app is mainly recognition practice.
2. **Is the word reviewed on a schedule?** If not, the system depends on your memory to remember to train memory.
3. **Does the prompt vary?** If not, you may be memorizing one card’s wording.
4. **Is recall contextual?** Adult vocabulary is used in sentences, not in isolated definition recitation.
5. **Is measurement automatic?** If every review requires a judgment call, friction accumulates.

Lexi’s answer is specific: illustrated word cards styled like collectible game cards for introduction, then crossword-based spaced repetition for contextual recall. The dataset has 20,000 words ordered roughly by rarity for maximal real-world utility per unit time spent; about 3,000 currently have pipeline-grade clues, and the first ~1,500 have illustrated word cards.

## Who Lexi is for

Lexi is for adults who want practice that makes words easier to *produce*, not merely easier to recognize.

If you already read English well but want sharper output, the same distinction applies. Recognition-heavy tools can confirm that you have seen a word. Contextual recall asks you to place it.

Do not bother with Lexi yet if you need Android, another language, or full polysemy coverage today: it is English-only, iOS-only, and one sense per word so far.

**CTA:** If you want a vocabulary builder app for adults built around contextual recall instead of definition-flipping, [download Lexi on the App Store](https://apps.apple.com/us/app/lexi-vocabulary-crosswords/id6740172587).
