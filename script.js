const btnIn = document.querySelector('.increment')
const btnDe = document.querySelector('.decrement')
const count = document.querySelector('.count')
console.log(btnIn)

const increment = function() {
    let num = count.innerHTML
    num++
    count.innerHTML = num
}

const decrement = function() {
    let num = count.innerHTML
    num--
    count.innerHTML = num
}

btnIn.addEventListener('click', increment)
btnDe.addEventListener('click', decrement)