// In `script.js`, add click event handlers to the `button` elements such that:
// - when the `.increment` button is clicked the displayed count (the `div.count` element) increments by 1
// - when the `.decrement` button is clicked the displayed count (the `div.count` element) decrements by 1


// accessing the buttons


//converting the text to a number
let counter = 0;
let counterDis = document.querySelector('.count');
// let counter = parseInt(document.querySelector('.count').textContent); // alternate way of doing it removing the let counter above and countDis

// Increase
const upbutton = document.querySelector('.increment');
const increase = function () {
    counter += 1;
    counterDis.textContent = counter;
    //document.querySelector('.count').textContent = counter; // Alternate way if removing counterDis
}

// Decrease
const downbutton = document.querySelector('.decrement');
const decrease = function () {
    counter -= 1;
    counterDis.textContent = counter
   //document.querySelector('.count').textContent = counter; // Alternate way if removing counterDis
}

upbutton.addEventListener('click', increase)
downbutton.addEventListener('click', decrease)