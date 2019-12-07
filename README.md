# Advent of Code

[Advent of Code](https://adventofcode.com/2019) is a great way to practice coding in my opinion and you should probably give it a try. 🚀

## Motivation
I have never really shared code on github, probably because I am afraid my code could be crap 💩.
But how am I supposed to get better if I don't show my code to others and hear their opinions? 
So feel free to give any kind of feedback.

I won't be able to solve/share all or even the majority of the challenges here but hey some is better than none. 😎

## Run this code
Feel free to checkout this repo and run the tests with 
```
npm install
npm run test
```

## Day 1 - Part 1
I solved the first part of day 1 in Chromes developer tools with the following expression:

```javascript
document
  .querySelector('pre')
  .innerText
  .split('\n')
  .pop()
  .reduce((acc, curr) => acc + Math.floor(parseInt(curr)/3) - 2, 0)
```

## Day 1 - Part 2
When I read the text for part two I was slightly confused at first but luckily advent-of-code always provides example input and output. This makes it a perfect fit for [TDD](https://en.wikipedia.org/wiki/Test-driven_development) and I quickly set up [jest](https://jestjs.io/) and threw [TypeScript](https://www.typescriptlang.org/) in there as well because why not, types are fun. 🤓

Checkout the [calcFuel function](./src/day-01.ts) and the [tests](./src/day-01.test.ts). I chose the recursive approach even though I believe to remember from university that the iterative solution would be more memory efficient, not that this matters for this example anyway. Just a thought, how did you solve it?