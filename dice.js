const one = "dice1.png";
const two = "dice2.png";
const three = "dice3.png";
const four = "dice4.png";
const five = "dice5.png";
const six = "dice6.png";

const diceImg = [one, two, three, four, five, six];

var dice1Num = document.getElementById('dice-random1');
var dice1Pic = document.getElementById('dice1-img');
var dice2Num = document.getElementById('dice-random2');
var dice2Pic = document.getElementById('dice2-img');
var rollButton = document.getElementById('roll');
var ranNum = Math.floor(Math.random()*7);


function twoNums(){
    var num1 = Math.floor(Math.random()*6)+1;
    var num2 = Math.floor(Math.random()*6)+1;
    dice1Num.innerHTML = num1;
    dice2Num.innerHTML = num2;
    dice1Pic.src = diceImg[(num1-1)];
    dice2Pic.src = diceImg[(num2-1)];
    document.getElementById('dice-sum').innerHTML = num1+num2;
}

rollButton.addEventListener('click', twoNums);





 
