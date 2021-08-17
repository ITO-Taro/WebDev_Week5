const one = "dice1.png";
const two = "dice2.png";
const three = "dice3.png";
const four = "dice4.png";
const five = "dice5.png";
const six = "dice6.png";

const diceImg = [one, two, three, four, five, six];

var dice1Num = document.getElementById('dice-random1');
var dice1NumPly1 = document.getElementById('dice-player1');
var dice1Pic = document.getElementById('dice1-img');
var dice2Num = document.getElementById('dice-random2');
var dice1NumPly2 = document.getElementById('dice-player2');
var dice2Pic = document.getElementById('dice2-img');
var rollButton = document.getElementById('roll');
var ranNum = Math.floor(Math.random()*7);
var ply1Total = document.getElementById('total-score-1');
var ply2Total = document.getElementById('total-score-2');
var playAgain = document.getElementById('play-again');
const winner = document.getElementById('winner');
// var num1 = Math.floor(Math.random()*6)+1;
// var num2 = Math.floor(Math.random()*6)+1;




// function twoNums(){
    // ply1Count = [0,0,0,0,0];
    // ply2Count = [0,0,0,0,0];
    // var ply1Scores = [];
    // var ply2Scores = [];
    // for (var i = 0; i<6; i++){
    // var num1 = Math.floor(Math.random()*6)+1;
    // var num2 = Math.floor(Math.random()*6)+1;
    // dice1Num.innerHTML = num1;
    // dice1NumPly1.innerHTML = num1;
    // dice2Num.innerHTML = num2;
    // dice1NumPly2.innerHTML = num2;
    // dice1Pic.src = diceImg[(num1-1)];
    // dice2Pic.src = diceImg[(num2-1)];
    // document.getElementById('dice-sum').innerHTML = num1+num2;
    // ply1Count[num1] = ply1Count[num1] +1;
    // ply1Scores.push(num1);
    // ply2Scores.push(num2);
    // }
    // ply1Scores.push(num1);
    // ply2Scores.push(num2);
    // dice1NumPly1.innerHTML = ply1Scores;
    // dice1NumPly2.innerHTML = ply2Scores;
// }


var ply1Scores = [];
var ply2Scores = [];
function twoNums(){
    var num1 = Math.floor(Math.random()*6)+1;
    var num2 = Math.floor(Math.random()*6)+1;
    dice1Num.innerHTML = num1;
    dice2Num.innerHTML = num2;
    dice1Pic.src = diceImg[(num1-1)];
    dice2Pic.src = diceImg[(num2-1)];
    if (ply1Scores.length < 5 && ply2Scores.length < 5){
        ply1Scores.push(num1);
        ply2Scores.push(num2);
        dice1NumPly1.innerHTML = ply1Scores;
        dice1NumPly2.innerHTML = ply2Scores;}
    if(ply1Scores.length > 4 && ply2Scores.length > 4){
            ply1Total.innerHTML = "Player-1's Total = " + ply1Scores.reduce((a, b) => a + b, 0);
            ply2Total.innerHTML = "Player-2's Total = " + ply2Scores.reduce((a, b) => a + b, 0);
            playAgain.innerHTML = "Play Again!";
            if (ply1Total.innerHTML == ply2Total.innerHTML){
                winner.innerHTML = "DRAW";
            }
            else if (ply1Total.innerHTML > ply2Total.innerHTML){
                winner.innerHTML = "Player-1 Wins!";
            }
            else {
                winner.innerHTML = "Player-2 Wins!";
            }}
    // if(ply1Scores.length  > 6 && ply2Scores.length > 6){
    //     ply1Scores.length = 0;
    //     ply2Scores.length = 0; }   
           // window.reload(false);}
    // if(ply1Scores.length == 5 && ply2Scores.length == 5){
    //     ply1Total.innerHTML = "Player-1's Total = " + ply1Scores.reduce((a, b) => a + b, 0);
    //     ply2Total.innerHTML = "Player-2's Total = " + ply2Scores.reduce((a, b) => a + b, 0);}
    
        // ply1Scores.length = 0;
        // ply2Scores.length = 0;

    
}

// dice1NumPly1.innerHTML = ply1Scores;
// dice1NumPly2.innerHTML = ply2Scores;

rollButton.addEventListener('click', twoNums);



 
