// In `script.js`, add click event handlers to the `button` elements such that:
// - when the `.increment` button is clicked the displayed count (the `div.count` element) increments by 1
// - when the `.decrement` button is clicked the displayed count (the `div.count` element) decrements by 1

// element.addEventListener(`event_name`, callback) => as below:
// const btnClick = function () {
//     console.log(`button was clicked`)
// }

// btn.addEventListener(`click`, btnClick)


// VARIABLES
const incrementButton = document.querySelector(`.increment`)
const decrementButton = document.querySelector(`.decrement`)
const count = document.querySelector(`div.count`)

// INCREMENT
const btnClickPlus = function () {
    let number = parseInt(count.textContent)
    number++
    count.textContent = number;
}

incrementButton.addEventListener(`click`, btnClickPlus)

// DECREMENT
const btnClickMinus = function () {
    let number = parseInt(count.textContent)
    number--
    count.textContent = number;
}

decrementButton.addEventListener(`click`, btnClickMinus)