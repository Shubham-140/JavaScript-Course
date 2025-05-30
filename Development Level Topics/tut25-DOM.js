// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="./style.css">
//     <title>Background Color Changer</title>
// </head>
// <body>
//     <h1>Background Color Changer</h1>
//     <div class="buttons">
//         <button class="color-button" id="red"></button>
//         <button class="color-button" id="blue"></button>
//         <button class="color-button" id="green"></button>
//         <button class="color-button" id="yellow"></button>
//         <button class="color-button" id="olive"></button>
//         <button class="color-button" id="pink"></button>
//     </div>
//     <h3>Tap on the button to change the color you want!!</h3>
// </body>
// <script src="./script.js"></script>
// </html>



// We can access the html elements by using JS

// Using ID
const yellowCol=document.getElementById('yellow');
// Now we can modify the element having id='yellow' and even we can change the events wrt this element

// Similarly,there is a method for accessing element through class
const button=document.getElementsByClassName('buttons');

// There is one more way to do it
yellowCol=document.querySelector('yellow');

// If there are many elements inside a element container, we can use 
const nothing=document.querySelectorAll('imaginary');
// Now, if we want to access the data inside,we can use forEach loop or if only one element, then use indices.






// DOM stands for Document Object Model. It represents the page structure as a tree of nodes, where each node is an object. JavaScript can interact and modify DOM to change content, structure or styling.