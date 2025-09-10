### Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- `getElementById` returns a single html element from the DOM by grabbing the element's id attribute
- `getElementsById` returns all elements from the DOM that owns the same classname
- `querySelector` returns a the first element that matches the specified css selector
- `querySelectorAll` returns all the element that matches the specified css selector

### Q2: How do you create and insert a new element into the DOM?
I will create a new html using this function - `document.createElement()`
eg: `const h1 = document.createElement('h1')`

Then set value in it:
eg: `h1.innerText = 'Hello World'`

After that insert the element in the current HTML DOM
eg: `document.body.appendChild(h1)`

### Q3: What is Event Bubbling and how does it work?
Event bubbling is an event propagation technique where an event triggered on a child element propagates through its parent elements in order.

for example:
`<body><div><button onclick='handleEvent()'>Click Me</button></div></body>`

when the button is clicked the event firstly gets triggered by the button element, next triggered by the div element and at last triggered by the body element

### Q4: What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where we bind and event listener to parent to handle its childs' events using event bubbling feature.

It is useful, because:
- It optimizes system performance
- It reduces size of code
- It makes the code more readable

### Q5: What is the difference between preventDefault() and stopPropagation() methods?
- `preventDefault()` method is used to prevent execution default behaviour of an element (eg: reloading page after submission of a form)
- `stopPropagation()` method is used to prevent further event propagation