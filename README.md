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
  .slice(0, 1)
  .reduce((acc, curr) => acc + Math.floor(parseInt(curr)/3) - 2, 0)
```

## Day 1 - Part 2
When I read the text for part two I was slightly confused at first but luckily advent-of-code always provides example input and output. This makes it a perfect fit for [TDD](https://en.wikipedia.org/wiki/Test-driven_development) and I quickly set up [jest](https://jestjs.io/) and threw [TypeScript](https://www.typescriptlang.org/) in there as well because why not, types are fun. 🤓

Checkout the [calcFuel function](./src/day-01/day-01.ts) and the [tests](./src/day-01/day-01.test.ts). I chose the recursive approach even though I seem to remember from university that the iterative solution would be more memory efficient, not that this matters for this example anyway. Just a thought, how did you solve it?

## Day 2
Instant throwback to [assembly](https://en.wikipedia.org/wiki/Assembly_language#Assembly_language) coding in university.

Checkout the [runIntcodeProgram function](./src/day-02/day-02.ts) and the [tests](./src/day-02/day-02.test.ts). I am not a big fan of that nested loop to find the "noun" and "verb". What is your take on this one?

## Day 3
What a fun riddle! I could solve it but my solution is not very performant, it takes about 75 seconds to get the result. I create an array with the coordinates for both wires and then start to compare those arrays to find the intersections. Checkout my [code](./src/day-03/day-03.ts) and the [tests](./src/day-03/day-03.test.ts). Did you get this done in a more performant way? Let me know how!

## Day 4
My first thought was to validate the passwords (numbers) with a regular-expression and it's probably possible somhow 🤔(feel free to show me how). I ended up taking a different route with a function that validates each password within the range. Checkout my [code](./src/day-04/day-04.ts) and the [tests](./src/day-04/day-04.test.ts).

## Day 5
I finished day 5 but the code is pretty spaghetti 🍝 and I'm having a hard time making it cleaner and more functional. Maybe I will end up just providing that solution anyway. 

What I don't like: I'm using a pretty big switch-case statement and when I tried to get rid of that, I started learning about [replacing switch-case statements with object-literals](https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals) which makes sense to me because the [mentioned problems in the article](https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals#problems-with-switch) like forgetting the `break;` statement in one of the cases really caused me to debug for longer than it should have. [Some people argue that you should not replace your switch-case statements](https://spin.atomicobject.com/2016/11/06/switch-statements-object-literals/). What is your opinion on this?

## Day 6 - Part 1
It took me way to long to realise that this is a [tree datastructure](https://en.wikipedia.org/wiki/Tree_(data_structure)). But I finally figured it out. 😅

We simply need to traverse the tree to get the sum of the level of every nodes.
An algorithm to traverse a tree is [BFS](https://en.wikipedia.org/wiki/Breadth-first_search) (breadth-first-search).

BFS in a nutshell:

![BFS](https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif "BFS")

This was a really challenging puzzle for me. I didn't struggle to explain BFS back in university because it's obviously not really all that complex. Looking at a problem or puzzle and realizing what datastructure it is/uses and what algorithm would be useful to solve it, is a whole different ballgame in my opinion.

I implemented the non-recursive BFS by utilizing a queue, check out my [code](./src/day-06/day-06.ts) and my [tests](./src/day-06/day-06.test.ts). I believe the recursive implementation would be just as fine in this case. Probably this puzzle can even be solved using a depth-first-search since we have to go through every node anyway. How did you solve this puzzle?
