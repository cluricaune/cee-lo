function singleRoll() {
    value = Math.floor(Math.random() * 6 + 1)
    return value;
}

function threeRoll() {
    let dice1 = singleRoll();
    let dice2 = singleRoll();
    let dice3 = singleRoll();
    let score;

    document.querySelector("#dieface1").src = `imgs/dicefaces/die${dice1}.png`;
    document.querySelector("#dieface2").src = `imgs/dicefaces/die${dice2}.png`;
    document.querySelector("#dieface3").src = `imgs/dicefaces/die${dice3}.png`;
    
    document.getElementById("p").textContent = ``;

    if (dice1 === dice2 && dice1 === dice3) {
        document.getElementById("p").textContent += `Trips! Score: Trips ${dice1}`;
        score = dice1 * 3;
    } else if (dice1 === dice2) {
        document.getElementById("p").textContent += `Score: ${dice3}`;
        score = dice3;
    } else if (dice1 === dice3) {
        document.getElementById("p").textContent += `Score: ${dice2}`;
        score = dice2;
    } else if (dice2 === dice3) {
        document.getElementById("p").textContent += `Score: ${dice1}`;
        score = dice1;
    } else if ((dice1 === 1 && dice2 === 2 && dice3 === 3) || (dice1 === 1 && dice2 === 3 && dice3 === 2) || (dice1 === 2 && dice2 === 1 && dice3 === 3) || (dice1 === 2 && dice2 === 3 && dice3 === 1) || (dice1 === 3 && dice2 === 2 && dice3 === 1) || (dice1 === 3 && dice2 === 1 && dice3 === 2)) {
        document.getElementById("p").textContent += `One, two, three, you lose!`;
    } else if ((dice1 === 4 && dice2 === 5 && dice3 === 6) || (dice1 === 4 && dice2 === 6 && dice3 === 5) || (dice1 === 5 && dice2 === 4 && dice3 === 6) || (dice1 === 5 && dice2 === 6 && dice3 === 4) || (dice1 === 6 && dice2 === 5 && dice3 === 4) || (dice1 === 6 && dice2 === 4 && dice3 === 5)) {
        document.getElementById("p").textContent += `Four, five, six, you win!`;
    } else {
        document.getElementById("p").textContent += `Roll again!`;
    }
}

const rollDice1 = document.querySelector("#dieface1");
rollDice1.addEventListener(`click`, threeRoll);
const rollDice2 = document.querySelector("#dieface2");
rollDice2.addEventListener(`click`, threeRoll);
const rollDice3 = document.querySelector("#dieface3");
rollDice3.addEventListener(`click`, threeRoll);