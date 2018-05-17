let colors = [];
let square = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('.colorDisplay');
let h1 = document.querySelector("h1");
//colorDisplay.textContent = pickedColor;
let message = document.querySelector('.message');
let resetBtn = document.querySelector('.reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');
let colorNum = 6;
let pickedColor;
easyBtn.addEventListener('click', event => {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove('selected');
    colorNum = 3;
    colors = [];
    for (let i = 0; i < 3; i++) {
        let color = generateColor();
        colors[i] = color;
        square[i].style.backgroundColor = color;
    }
    pickedColor = pickColor(colors);
    for (let i = 3; i < 6; i++) {
        square[i].style.display = "none"; //hide
    }
})
hardBtn.addEventListener('click', event => {
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    colorNum = 6;
    colors = [];
    for (let i = 0; i < 6; i++) {
        let color = generateColor();
        colors[i] = color;
        square[i].style.backgroundColor = color;
        square[i].style.display = "block";
    }
    pickedColor = pickColor(colors);
})
resetBtn.addEventListener('click', event => {
    h1.style.backgroundColor = "steelblue";
    for (let i = 0; i < colorNum; i++) {
        let color = generateColor();
        colors[i] = color;
        square[i].style.backgroundColor = color;
    }
    pickedColor = pickColor(colors);
})
//initial the square color;
for (let i = 0; i < colorNum; i++) {
    let color = generateColor();
    colors[i] = color;
    square[i].style.backgroundColor = color;
}
//select one as the display color;
pickedColor = pickColor(colors);
colorDisplay.textContent = pickedColor;
//add event for the every color
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", event => {
        if (square[i].style.backgroundColor == pickedColor) {
            message.textContent = "Correct";
            h1.style.backgroundColor = pickedColor;
            changeColor(pickedColor);
            document.querySelector('.reset').textContent = "Play Again?";
        } else {
            message.textContent = "Try again!";
            square[i].style.backgroundColor = "#232323";
        }
    })
}
function changeColor(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}
//random color;
function generateColor() {
    let colorR = Math.round(Math.random() * 255);
    let colorG = Math.round(Math.random() * 255);
    let colorB = Math.round(Math.random() * 255);
    let color = "rgb" + "(" + colorR + ", " + colorG + ", " + colorB + ")";
    return color;
}
//pick one display colore
function pickColor(colors) {
    let num = Math.floor(Math.random() * colors.length);
    return colors[num];
}

