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
    gainEnergy(player.energyGenerator.divide(50));
};

function updateDisplay() {
    //energy, Generators
    //player.energy = new Decimal("1e1000");
    //document.getElementById("energyDisplay").textContent = "Energy: " + player.energy.toStringWithDecimalPlaces(2);
    document.getElementById("energyDisplay").textContent = "Energy: " + format(player.energy,2,2);

    document.getElementById("energyGeneratorDisplay").textContent = "Energy Generators: " + format(player.energyGenerator,2,2);
    document.getElementById("energyGeneratorCostDisplay").textContent = "Costs: " + format(player.energyGeneratorCost,2,2);
    document.getElementById("energyGeneratorProductionDisplay").textContent = "Produces: " + format(player.energyGenerator,2,2) + " EpS";
    document.getElementById("energyGeneratorNextDisplay").textContent = "Next: " + format(player.energyGenerator.add(1),2,2) + " EpS";

    if (player.energy.exponent > player.expansions) {
        document.getElementById("expansionPrestigeView").classList.remove("Off");
    }
    else {
        document.getElementById("expansionPrestigeView").classList.add("Off");
    }
    if (player.expansionMilestoneOneUnlocked === true) {
        document.getElementById("expansionMilestoneOne").classList.remove("Off");
    }
    else {
        document.getElementById("expansionMilestoneOne").classList.add("Off");
    }
    if (player.energy.greaterThanOrEqualTo(player.energyGeneratorCost)) {
        document.getElementById("energyGeneratorContainer").classList.remove("Off");
    }
    else {
        document.getElementById("energyGeneratorContainer").classList.add("Off");
    }
    document.getElementById("expansionsDisplayHeader").textContent = "Current Expansions: " + format(player.expansions,2,2);
    document.getElementById("expansionsDisplayMilestones").textContent = "Expansions: " + format(player.expansions,2,2);
    document.getElementById("expansionsTotalDisplayMilestones").textContent = "Total Expansions: " + format(player.expansionsTotal,2,2);
    document.getElementById("expansionsHighestDisplayMilestones").textContent = "Highest Expansions: " + format(player.expansionsHighest,2,2);
    document.getElementById("gainExpansionsDisplay").textContent = "Gain " + format(Math.max(player.energy.exponent - player.expansions,0),0,2) + " Expansions";
    document.getElementById("expansionCostDisplay").textContent = "Next At " + format(player.expansionCostMult.pow(player.expansions.add(1))) + " Energy";

    scaleWindow();
}

function updateText(p1,p2) {
    document.getElementById(p1).innerHTML = p2;
}

function slowLoop() {
    if (player.autoSave === true) {
        save();
    }
}