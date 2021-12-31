---
templateKey: blog-post
title: Solving custom Fizzbuzz with Javascript
date: 2017-01-04T15:04:10.000Z
description: Customising the classic interview question
featuredpost: true
featuredimage: /img/js.png
tags:
  - Javascript
---
[FizzBuzz](https://www.codewars.com/kata/5355a811a93a501adf000ab7/solutions/javascript) is a coding test with a relatively simple premise.

1. Print out numbers 1 to 100
2. Replace all numbers divisible by 3 with “fizz”
3. Replace all numbers divisible by 5 with “buzz”
4. replace all numbers divisible by both 3 and 5 with “fizzbuzz”

In this blog post, I’ll explain how to solve the task, as well as how to iterate an extra level of sophistication, by creating a function that takes custom parameters for both the strings and the integers. This came up recently as a [code wars](https://www.codewars.com/kata/5355a811a93a501adf000ab7/) challenge and after knocking my head against a brick wall for a while, I came to the solution below.

Like all coding problems, the best way to approach this task is to break it down into smaller pieces.



**Step 1: Creating our array of numbers**

Our first step is to create an empty function, which will ultimately run all of our code.

![](https://miro.medium.com/max/1400/1*nm-v_hxzXxTWpJf9kV2ZXQ.png)

Next up, we declare an empty array within the function

![](https://miro.medium.com/max/1400/1*K3-MCwSULWcppVP_-eHaxQ.png)

So far, so simple!

Our next step introduces our first piece of logic. We want to create a counter that runs from 1 to 100, and places ‘something’ into the array for each of those numbers. As in the outline, we want this to be either the integer, “fizzbuzz”, “fizz” or “buzz” depending on what number it is. We do this with a for loop.

This loop sets a variable of ‘i’, which we will use as our counter. We set i to 1, as we want to run from 1 to 100, rather than 0 to 100. We then set our end clause, by saying that as long as the length of our array, ‘arr’ is less than 100, run the code in the loop. Finally, we increment our i variable by 1 each time we run the code.

![](https://miro.medium.com/max/1400/1*uBd2vH_iA_9zM3JNxuspXg.png)

If we wanted to just return number 1 to 100, we could do so at this stage by calling the ‘push’ array method on the ‘arr’ array, like this.

![](https://miro.medium.com/max/1400/1*O66IgXj0R0EoR18n4j_47A.png)

This is the end of our first step.



**Step two: Replacing our numbers with "fizz" and "buzz"**

In order to replace our numbers with ‘Fizz’ and “Buzz”, we need to take an extra step and set up an if/else statement.

![](https://miro.medium.com/max/1400/1*JeW3BZqGYdU3bBqYfdjfyA.png)

We use the [modulo](https://en.wikipedia.org/wiki/Modulo_operation) operator here to work out which path to take. Modulo returns the remainder of an integer, so in plain english what we’re saying here is

If the number (i) divided by 3 has no remainder, push the string ‘fizz’ to the corresponding index position in the array.

Otherwise, if the number (i) divided by 5 has no remainder, push the string ‘buzz’ to the corresponding index position in the array.

Finally, if neither of these conditions are true, just push the number (i) to the array.

We’re most of the way there, but we wanted to print “FizzBuzz” if the number is divisible by both 3 AND 5. Luckily, this extra step is very straight forward.

![](https://miro.medium.com/max/1400/1*iKHi4xjCBoj--cmCOdJxCw.png)

All we do is add an extra condition at the beginning of the loop. This says

“If the number (i) is divisible by 3 AND the number (i) is divisible by 5, push the string “FizzBuzz” to the array”

If this condition isn’t true, then we work through the rest of the if/else statement as usual.

Our final code looks like this

![](https://miro.medium.com/max/1400/1*plLsphRE4SNMGe2huRPElQ.png)

Note that we return our array as the last thing we do, so that we actually return the contents.

and if we run it, this is the result we get

![](https://miro.medium.com/max/1400/1*G9jRzPIx8Sk7mBJidP0_5A.png)

**Step 3: adding in custom parameters**

We’ve got the basic code working, but we want to set up our function to take and return custom parameters.

The first thing we’re going to do is extend our function with four arguments. We’re going to allow these to be set at the point the function is called, but also set default values.

![](https://miro.medium.com/max/1400/1*kSXNgFOwVKl3P49w26bmhg.png)\
This is a way to set option arguments in a function. We have our defaults applied, but they can be overridden when the function is called.

For the final step, all we want to do is make sure that the return values are set when the function is called. In order to do this, we just want to make sure that instead of pushing a set string to the array, as we did in the earlier example, we’re pushing whatever is contained in our function arguments.

![](https://miro.medium.com/max/1400/1*wkM3GQVb9AuLtzGWdngEIQ.png)

We replace the hardcoded 3 and 5 in the if/else with n1/n2, to take a custom input (or the default value if one isn’t provided) and we replace the hardcoded “fizzbuzz” strings with the str1/str2 arguments.

This is how our final code should look

![](https://miro.medium.com/max/1400/1*R4_Pkh9adVsXH8KASKYuaA.png)

We can now run the code with our custom arguments, like this:\
\
![](https://miro.medium.com/max/1400/1*ZqMnXluOGjMOAd0ZrkUfFg.png)And this is the result we get, with “hello” logging for all numbers divisible by 2 and “helloworld” for all numbers divisible by 2 and 10.

![](https://miro.medium.com/max/1400/1*Cj8kfgbpjOt2VhJAE1cjhQ.png)

We can also call single numbers from our array like this

![](https://miro.medium.com/max/1400/1*F8aQuAs_BDcNWY1hQV26kQ.png)\
which will just return whatever is at index 19, resulting in

![](https://miro.medium.com/max/996/1*_pKuvwfD_w7uVhlbg6Ts7w.png)

Hopefully this was useful to anyone working out how to solve a similar FizzBuzz challenge. If you have any questions (or a better solution!) let me know in the comments!