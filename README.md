# FlashCards

## Abstract
FlashCards is a basic flash card simulator that runs in the command line interface (CLI). Use this app to strengthen your understanding of any subject by answering questions with each turn and getting instant feedback. You will get feedback at the end of each round as well to help you plan which deck of cards you've mastered and which needs more attention.

## Demo
https://camo.githubusercontent.com/2a567651fdea8f1e526f16a692c6af147317ae98c24720c26affab91f716b5f7/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f317a6b6231713538655469544836443777632f67697068792e676966

## Technologies
- JavaScript (Node.js)
- Mocha
- Chai

## Setup
1. Clone down the repo 
2. Change to the app directory and install the library dependencies by running:

```zsh
npm install
```
3. Run `node index.js`. The message similar to the following should display in your terminal: 

```bash
Welcome to FlashCards! You are playing with 30 cards.
-----------------------------------------------------------------------
? What allows you to define a set of related information using key-value pairs?
  1) object
  2) array
  3) function
  Answer:
```
4. You now have the opportunity to select an answer by entering its corresponding number. You will be given feedback after submitting an answer. You will be able to play through the entire deck of cards, after which you will be given overall feedback for the round.
