---
templateKey: blog-post
title: "React Hooks: Making a simple counter with the useState hook"
date: 2017-01-04T15:04:10.000Z
description: An introduction to React hooks
featuredpost: false
featuredimage: /img/reactlogo.png
tags:
  - React
  - React-hooks
  - state-management
---
![React logo](/img/reactlogo.png)

[Hooks](https://reactjs.org/docs/hooks-intro.html) are an upcoming feature (currently in alpha) that are set to offer a brand new way of creating React components. I’m going to look at each of these new tools in turn, and the benefits of using them, starting with what is likely to be the most commonly used, the useState hook.

This post assumes at least a basic familiarity with React, but to recap the context of what we’re looking at we need to understand the two current ways of writing React components.



**Stateless Functional Components**

Functional components, also known as ‘dumb’ components are solely concerned with rendering. They don’t control any logic. The most basic example of this would be a simple ‘Hello World’ component

![](https://miro.medium.com/max/1400/1*jiPwZ__arvCck4fEJaUftw.png)

**Class Components**

Class components can contain and manage internal state. Below is an example of a class component that keeps track of a counter. The user can interact with increment or decrement buttons to raise or lower the counter

![](https://miro.medium.com/max/1400/1*FFFl2w2m1gtXyoUE_4hVIg.png)

This is pretty straightforward and easy for a human reader to parse, but it’s also fairly verbose and there’s a few things going on, like calling super() and using ‘this’, that may not immediately make sense.

The useState hook Allows us to combine functional components with stateful logic. Instead of using a class, we can create a functional component instead, and call the useState method anywhere that we want to declare some state (and associated handlers). Let’s refactor our counter, using this new syntax.

![](https://miro.medium.com/max/1400/1*MGlrNmHUaT_2Gku11LLfLw.png)

We can see straight away that this is significantly more terse. There’s way less cognitive overhead involved with working out exactly what this component is doing. Let’s walk through it line by line and see what’s going on.

![](https://miro.medium.com/max/1400/1*RAaAl1ewme3yjN165TOctw.png)

* We start by using [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to declare two variables, our state (count) and our state updater (setCount)

![](https://miro.medium.com/max/1400/1*SOktA-wSs5Ea8FtRp2OqXw.png)

* In our return function, our setCount state updater is now immediately available to us, without having to make any more function declarations. Since we’re not using a class anymore, we can also drop ‘this’, as there’s no need to worry about execution context.

![](https://miro.medium.com/max/1400/1*RkVYeqs0s3Ob0T_oZYYleg.png)

* our ‘count’ state is also available to use straight away, with no extra declarations or context to worry about.

  We can also extend our state updater functions if we want

![](https://miro.medium.com/max/1400/1*_5CLF6bDqh8QgwXMnk3Hyg.png)

It looks likely that hooks will replace class components as the go to techniques for writing stateful components in React. The syntax is really clear, and we don’t have to worry about some of things we had to with class components, like inheritance and ‘this’. It’s also way less lines of code, which will make a huge difference as component and application complexity scales up.

Finally, this also keeps our code far more functional, since a component completely encapsulates its logic and render, and we don’t have to worry about potential side effects.

To get started with useState, just run npm install react@next and react-dom@next in your react application and give it a go!