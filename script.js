const count = document.querySelector('.count').innerHTML
let countnu = parseInt(count)

document.querySelector('.increment').addEventListener("click", function () {
    countnu++
    document.querySelector('.count').innerHTML = countnu
})

document.querySelector('.decrement').addEventListener("click", function () {
    countnu--
    document.querySelector('.count').innerHTML = countnu
})