function myAnimation() {
let id = setInterval(animDice, 50);
let count = 0;
let pos = 0;
function animDice() {
    if (count > 100) {
        clearInterval(id);
    } else if (count > 50) {
        document.getElementById("#dieface1").style.top = pos + "px";
        pos--;
    } else {
        document.getElementById("#dieface1").style.top = pos + "px";
        pos++;
    }
    count++;
}
}