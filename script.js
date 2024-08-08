let a=1;
const userScore= document.getElementById('userscore');
const aiScore= document.getElementById('aiscore');
const ScoreBoard = document.querySelectorAll('.scoreboard');
const Result= document.querySelectorAll('.result');
// const Buttons = document.querySelectorAll('.options');
const Rock = document.querySelectorAll('#r');
const Paper = document.querySelectorAll('#p');
const Scissors = document.querySelectorAll('#s');
// Buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         const dataText = button.getAttribute("data-text");
//         console.log(dataText);
//     });
// });

Rock.forEach(button => {
    button.addEventListener('click', function() {
        a=2;
        console.log(a);
    });
}); 