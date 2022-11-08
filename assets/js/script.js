//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = this.getElementsByTagName ('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if(this.getAttribute('data-type') === 'submit') {
                alert('You clicked submit!')
             } else {
                let gameType= this.getAttribute('data-type');
                alert(`You clicked ${gameType}`)
                runGame(gameType);
             }
        })
    }
    runGame('addition');
})

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed 
 */

function runGame (gameType) {

    //Creates 2 random number between 1 and 25
    let num1= Math.floor(Math.radom() * 25) +1;
    let num2= Math.floor(Math.radom() * 25) +1;

    if (gameType === 'addition'){
        displayAdditionQuestion(num1,num2);
    } else {
        alert(`Unknow game type: ${gameType}`);
        throw`Unknow game type: ${gameType}.Aborting!`;
    }
}

function checkAnswer () {

}

function calculateCorrectAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {
    document.getElementById('operand1').textContent= operand1;
    document.getElementById('operand2').textContent= operand2;
    document.getElementById('operator').textContent= "+";
}

function displayAdditionQuestion (operand1,operand2) {

}

function displaySubtractQuestion () {

}

function displayMutiplyQuestion () {

}