const increment = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')
const getCount = document.querySelector('.count')

let count = 0
increment.addEventListener('click', function() {
    count++;
    getCount.textContent = count
})

decrement.addEventListener('click', function() {
    if (count >= 1) {
        count--
    }
    getCount.textContent = count
})

