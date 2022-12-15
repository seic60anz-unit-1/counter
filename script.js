const buttomIncrement = document.querySelector('.increment')
const buttomDecrement = document.querySelector('.decrement')
let count = parseInt(document.querySelector('.count').innerText)


const increment = function(){
    count++;
    // count = count +1;
    // console.log(count);
    document.querySelector('.count').innerText = count;
    // console.log(count);
}

const decrement = function(){
    count-- ;
    // count = count -1;
    // console.log(count);
    document.querySelector('.count').innerText = count;
    // console.log(count);
}

const add = buttomIncrement.addEventListener('click',increment);
console.log(add)
buttomDecrement.addEventListener('click',decrement);