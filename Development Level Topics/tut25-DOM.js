// We can access the html elements by using JS

// Using ID
const yellowCol = document.getElementById('yellow');
// Now we can modify the element having id='yellow' and even we can change the events wrt this element

// Similarly, there is a method for accessing element through class
// returns HTMLCollection of ALL elements with that class
const buttons = document.getElementsByClassName('color-button');

// There is one more way to do it — querySelector
// # for id, . for class, tag name for elements
const yellowCol2 = document.querySelector('#yellow');   // first match only
const nothing = document.querySelectorAll('imaginary'); // all matches (NodeList)
// Now, if we want to access the data inside, we can use forEach loop or if only one element, then use indices.

// Difference between querySelector and querySelectorAll:
// document.querySelector('.color-button')    → returns FIRST match only
// document.querySelectorAll('.color-button') → returns ALL matches (NodeList)




// DOM stands for Document Object Model. It represents the page structure as a tree of nodes, where each node is an object. JavaScript can interact and modify DOM to change content, structure or styling.




/********************************************** Modifying Elements **********************************************/

// Changing content
// element.innerHTML = "<b>Hello</b>"  // parses HTML — can cause XSS if user input is used!
// element.innerText = "Hello"         // plain text only — respects CSS visibility
// element.textContent = "Hello"       // similar to innerText but includes hidden elements too

// Changing styles
// element.style.backgroundColor = "red"
// element.style.fontSize = "20px"

// Changing attributes
// element.setAttribute('id', 'newId')   // sets or updates attribute
// element.getAttribute('id')            // gets attribute value
// element.removeAttribute('id')         // removes attribute

// Changing classes
// element.classList.add('newClass')        // adds class
// element.classList.remove('oldClass')     // removes class
// element.classList.toggle('active')       // adds if absent, removes if present
// element.classList.contains('active')     // returns true/false




/********************************************** Creating and Removing Elements **********************************************/

// const div = document.createElement('div')  // creates element
// div.innerText = "Hello"
// document.body.appendChild(div)             // adds to end of body
// div.remove()                               // removes from DOM

// inserting at specific positions
// parent.insertBefore(newElement, existingElement)  // inserts before a specific element
// element.append(child)    // adds at end, accepts string too
// element.prepend(child)   // adds at start




/********************************************** Traversing DOM **********************************************/

// element.parentNode             // parent element
// element.children               // direct children (HTMLCollection)
// element.firstElementChild      // first child element
// element.lastElementChild       // last child element
// element.nextElementSibling     // next sibling element
// element.previousElementSibling // previous sibling element




/********************************************** Important Notes **********************************************/

// innerHTML vs innerText vs textContent:
// innerHTML    — parses HTML tags, risk of XSS with user input
// innerText    — plain text, respects CSS (hidden elements excluded)
// textContent  — plain text, includes ALL content even hidden elements

// HTMLCollection vs NodeList:
// getElementsByClassName → HTMLCollection (live, updates automatically)
// querySelectorAll       → NodeList (static, doesn't update automatically)
// both can be iterated with forEach