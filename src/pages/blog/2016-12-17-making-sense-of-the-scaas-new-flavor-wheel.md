---
templateKey: blog-post
title: Implementing bubble sort in Javascript
date: 2016-12-17T15:04:10.000Z
description: Computer science fundamentals
featuredpost: false
featuredimage: /img/js.png
tags:
  - computer-science
  - javascript
  - arrays
---
![JS logo](/img/js.png)

With Corona virus bringing regular life in [London](https://www.google.com/maps/place/London/data=!4m2!3m1!1s0x47d8a00baf21de75:0x52963a5addd52a99?sa=X&ved=2ahUKEwi3k7rmx-joAhWPOcAKHSBMDG8Q8gEwAHoECAsQAQ) to a standstill, I’ve decided to take some time off from work to decompress, catch up on some reading and put time into some learning that I’ve had planned for a while.

My first stop has been [Brian Holt’s](https://twitter.com/holtbt) excellent [“Four Semesters of Computer Science in 5 hours”](https://frontendmasters.com/courses/computer-science) course on [Frontend Masters](https://medium.com/u/1b199ed2dfd). So far, I’ve learned about Big O notation and am just starting on sorting algorithms. For someone who never studied computer science, it’s a pretty nice break from day to day React work and I’ve found in the past that getting better at vanilla JS and core CS concepts has a big transfer over to ‘day job’ work, as well as being a lot of fun.

I’ve just completed the first exercise, which involves implementing a bubble sort using Javascript, and wanted to log my approach for anyone interested and to solidify my own understanding.

**What is bubble sort?**

Bubble sort is a simple algorithm that passes through a list and swaps elements if they are in the wrong order, for example an array \[2, 1, 3, 4] passed through a bubble sort would return \[1,2,3,4]. It’s simple to implement, unsophisticated and not especially performant. I can’t immediately see where I’d ever use something like this at work, especially since you could do this with an (almost one line) reduce function, but that’s not really the point of the exercise here…

**How does the algorithm work?**

The way I constructed my mental map of this was to visualise two counters, an inner and an outer**.** The inner counter runs from the end of the array to the start, decrementing on each pass and comparing the item at each index with the directly proceeding item. Wrapping this is an outer counter that decrements in the same way, once the inner counter hits 0. In short, if we have a list of 10 items, the inner counter will decrement from 10 to 0, at which point the outer counter will decrement from 10, to 9 and start the process again. The inner counter handles a function that checks whether the number at index n is < than the number at index n-1, and if so the numbers are swapped. The number swapping itself is simple but inelegant, with a ‘temp’ variable holding the number to be swapped.

**Enough talk, show me the code!**

The challenge from the course was to use a do…while loop. This was pretty alien to me since I usually write functional React, but here’s how I implemented the algorithm

![](https://cdn-images-1.medium.com/max/1600/1*s6EBkQvb817ZonDU3H69DA.png)



- - -

We start by creating 3 variables

* i, which will be our inner counter
* temp, which will hold our swappable value
* outerCounter, which tracks which number/array index we are testing

The first do loop will run 10 times in total, as it runs while outerCounter is greater or equal to 0, being instantiated at 10 (nums.length-1 = 10).

The second do loop checks whether the number at array index\[i ] (instantiated at 10) is less than the number array index\[i-1], if it is, we swap the numbers using our temp variable. On each pass of this inner loop, we decrement i by 1, until it reaches 0. After the inner loop has run 10 times, it exists and our outer loop moves to the next number

- - -

There’s almost certainly a better way of doing this but this was my naive first attempt, which I thought was worth sharing with anyone else who may be interested in improving their vanilla JS skills. Feel free to let me know if you can see any room for improvement or optimisation!