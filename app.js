const colors = ["green", "red", "rgba(150,122,200)", "#f15025", "#f1f5f8"];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    //get random number between 0 - 4, from colors array (or more, if I change the array lenght)
    const randomColorNumber = getRandomNumber();
    console.log(randomColorNumber);
    document.body.style.backgroundColor = colors[randomColorNumber];
    color.textContent = colors[randomColorNumber].toUpperCase();
})

    //Math.random() generate a number between zero and 0.9...
    // * lenght makes it generate double number between 0 and 3.9...
    // Math.floor() rounds the numbers down to 0, 1, 2 or 3
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}