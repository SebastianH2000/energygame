let currentTime = Date.now();
setInterval(mainLoop, 20);
setInterval(slowLoop, 1000);
let elapsedTime = Date.now() - currentTime;

function mainLoop() {
        elapsedTime += Date.now() - currentTime;
        currentTime = Date.now();
        if (elapsedTime > 1000) {elapsedTime = 1000};
        while(elapsedTime > 20) {
        elapsedTime -= 20;
        //do stuff
        mainGameLoop();
        }
    updateDisplay();
}

function mainGameLoop() {

};

function updateDisplay() {
    //energy, Generators
    //player.energy = new Decimal("1e1000");
    //document.getElementById("energyDisplay").textContent = "Energy: " + player.energy.toStringWithDecimalPlaces(2);
    document.getElementById("energyDisplay").textContent = "Energy: " + format(player.energy,2,2);

    scaleWindow();
}

function updateText(p1,p2) {
    document.getElementById(p1).innerHTML = p2;
}

function slowLoop() {
    //save();
}