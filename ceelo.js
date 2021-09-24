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

    if (dice1 === dice2 && dice1 === dice3) {
        document.getElementById("response").textContent = `Trips!`;
        document.getElementById("response").style.color = `#00EA11`;
        score = dice1 * 3;
    } else if (dice1 === dice2) {
        document.getElementById("response").textContent = `Dubs`;
        document.getElementById("response").style.color = `#00EA11`;
        document.getElementById("scorenum").textContent = `${dice3}`;
        score = dice3;
    } else if (dice1 === dice3) {
        document.getElementById("response").textContent = `Dubs`;
        document.getElementById("response").style.color = `#00EA11`;
        document.getElementById("scorenum").textContent = `${dice2}`;
        score = dice2;
    } else if (dice2 === dice3) {
        document.getElementById("response").textContent = `Dubs`;
        document.getElementById("response").style.color = `#00EA11`;
        document.getElementById("scorenum").textContent = `${dice1}`;
        score = dice1;
    } else if ((dice1 === 1 && dice2 === 2 && dice3 === 3) || (dice1 === 1 && dice2 === 3 && dice3 === 2) || (dice1 === 2 && dice2 === 1 && dice3 === 3) || (dice1 === 2 && dice2 === 3 && dice3 === 1) || (dice1 === 3 && dice2 === 2 && dice3 === 1) || (dice1 === 3 && dice2 === 1 && dice3 === 2)) {
        document.getElementById("response").textContent = `One, two, three, you lose!`;
        document.getElementById("response").style.color = `#FF0000`;
        document.getElementById("scorenum").textContent = `X`;
    } else if ((dice1 === 4 && dice2 === 5 && dice3 === 6) || (dice1 === 4 && dice2 === 6 && dice3 === 5) || (dice1 === 5 && dice2 === 4 && dice3 === 6) || (dice1 === 5 && dice2 === 6 && dice3 === 4) || (dice1 === 6 && dice2 === 5 && dice3 === 4) || (dice1 === 6 && dice2 === 4 && dice3 === 5)) {
        document.getElementById("response").textContent = `Four, five, six, you win!`;
        document.getElementById("response").style.color = `#00EA11`;
        document.getElementById("scorenum").textContent = `42069`;
    } else {
        document.getElementById("response").textContent = `Roll again`;
        document.getElementById("response").style.color = `#A400E8`;
        document.getElementById("scorenum").textContent = `X`;
    }
}

function myAnimation() {
    let id = setInterval(animDice, 50);
    let count = 0;
    let pos = 0;
    function animDice() {
        if (count > 100) {
            clearInterval(id);
        } else if (count > 50) {
            document.querySelector("#dieface1").style.top = pos + "px";
            console.log(document.querySelector("#dieface1").style.top = pos + "px");
            pos--;
        } else {
            document.querySelector("#dieface1").style.top = pos + "px";
            console.log(document.querySelector("#dieface1").style.top = pos + "px");
            pos++;
        }
        count++;
    }
    console.log("test123");
}

const rollDice1 = document.querySelector("#dieface1");
rollDice1.addEventListener(`click`, myAnimation);
const rollDice2 = document.querySelector("#dieface2");
rollDice2.addEventListener(`click`, threeRoll);
const rollDice3 = document.querySelector("#dieface3");
rollDice3.addEventListener(`click`, threeRoll);