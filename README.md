# Job Application Tracker
PH Assignment A-04

**Technologies**
- HTML
- Tailwind CSS
- JavaScript

---

**JavaScript Questions for the assignment**

**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

`getElementById()` finds an element using its ID.

`getElementsByClassName()` finds elements with the same class and returns a live HTMLCollection.

`querySelector()` selects the first matching element, while `querySelectorAll()` selects all matching elements and returns a static NodeList.

**2. How do you create and insert a new element into the DOM?**

First, we create an element using `document.createElement()`. Then we can add text or attributes and use `appendChild()` to place it inside another element.

```javascript
const p = document.createElement("p");
p.textContent = "Hello";
document.body.appendChild(p);
```

**3. What is Event Bubbling? And how does it work?**

Event bubbling means when we click an element, the event can also go up to its parent elements. So, a click on a button can also trigger a click event on its parent container.

**4. What is Event Delegation in JavaScript? Why is it useful?**

Event delegation means adding one event listener to a parent instead of adding listeners to every child. It makes handling multiple elements easier, especially when new elements are created using JavaScript.

**5. What is the difference between preventDefault() and stopPropagation() methods?**

`preventDefault()` stops the browser's default action, like submitting a form.

`stopPropagation()` stops an event from moving further through the DOM.

So, one stops the default action, and the other stops event propagation.