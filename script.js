const incBtn = document.querySelector('.increment')
const decBtn = document.querySelector('.decrement')
const count = document.querySelector('.count')
let number = parseInt(count.textContent)
let incValue = parseInt(incBtn.dataset.value)
let decValue = parseInt(decBtn.dataset.value)

const increase = function () {
  number += incValue
  count.textContent = number
}
const decrease = function () {
  number -= decValue
  count.textContent = number
}

incBtn.addEventListener('click', increase)
decBtn.addEventListener('click', decrease)
