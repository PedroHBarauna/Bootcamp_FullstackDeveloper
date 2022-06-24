var currentNumberWrapper = document.getElementById('result');
var currentNumber = 0;

const increment = () => {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

const decrease = () => {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}