var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var heading = document.getElementById("heading");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    heading.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    heading.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colours
    colors = generateRandomColors(numSquares);
    //pick a new random colours from array
    pickedColor = pickColor();
    //change heading to match picked color
    heading.textContent = pickedColor;
    this.textContent = "NEW COLORS";

    messageDisplay.textContent = "";

    //change colours of squares
    for(var i=0; i < squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})

heading.textContent = pickedColor;

for(var i=0; i< squares.length; i++){
    //add initial colours to squares
     squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab colour of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare colour to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again!";
        }
        });
    }

    function changeColors(color){
        //loop through all squares
        for(var i = 0; i < squares.length; i++){
        //change each colour to match given colour
        squares[i].style.backgroundColor = color;
        }
    }

    function pickColor(){
       var random = Math.floor(Math.random() * colors.length);
       return colors[random]; 
    }

    function generateRandomColors(num){
       //make an array
       var arr = [];
       //repeat num times
       for(var i = 0; i < num; i++){
           //get random color and push into arr
            arr.push(randomColor())   
       }
       //return that array
       return arr;
    }

    function randomColor(){
        //pick a "red" from 0-255
        var r = Math.floor(Math.random() * 256);
        //pick a "green" from 0-255
        var g = Math.floor(Math.random() * 256);
        //pick a "blue" from 0-255
        var b = Math.floor(Math.random() * 256);
        "rgb(r, g, b)"
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }