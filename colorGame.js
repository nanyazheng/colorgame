let colorNum = 6;
let pickedColor;
let colors = [];
let square = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('.colorDisplay');
let h1 = document.querySelector("h1");
let message = document.querySelector('.message');
let resetBtn = document.querySelector('.reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

setupBtn();
setupSquares();
reset();

function setupBtn() {
    easyBtn.addEventListener('click', event => {
        easyBtn.classList.add("selected");
        hardBtn.classList.remove('selected');
        colorNum = 3;
        reset();
    })
    hardBtn.addEventListener('click', event => {
        easyBtn.classList.remove('selected');
        hardBtn.classList.add('selected');
        colorNum = 6;
        reset();
    })
    resetBtn.addEventListener('click', event => {
        reset();
    })
}

// //initial the square color;
// for (let i = 0; i < colorNum; i++) {
//     let color = generateColor();
//     colors[i] = color;
//     square[i].style.backgroundColor = color;
// }
//select one as the display color;
// pickedColor = pickColor(colors);
// colorDisplay.textContent = pickedColor;
//add event for the every color
function setupSquares() {
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", event => {
            if (square[i].style.backgroundColor === pickedColor) {
                message.textContent = "Correct";
                h1.style.backgroundColor = pickedColor;
                changeColor(pickedColor);
                resetBtn.textContent = "Play Again?";
            } else {
                message.textContent = "Try again!";
                square[i].style.backgroundColor = "#232323";
            }
        })
    }
}

function reset() {
    colors = generateColor(colorNum);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    message.textContent = ""; 
    for (let i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.display = 'block';
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}
function changeColor(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}
//random color;
function generateColor(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        let colorR = Math.round(Math.random() * 255);
        let colorG = Math.round(Math.random() * 255);
        let colorB = Math.round(Math.random() * 255);
        let color = "rgb" + "(" + colorR + ", " + colorG + ", " + colorB + ")";
        arr.push(color);
    }
    return arr;
}
//pick one display colore
function pickColor(colors) {
    let num = Math.floor(Math.random() * colors.length);
    return colors[num];
}

