function gainExpansions() {
    if (player.energy.exponent > player.expansions) {
        player.expansions = player.expansions.add(player.energy.exponent - player.expansions);
        player.expansionsTotal = player.expansions.add(player.energy.exponent - player.expansions);
        player.energy = new Decimal("0");
        player.energyGenerator = new Decimal("0");
        player.energyGeneratorCost = new Decimal("10");
        player.energyGeneratorExponent = new Decimal("1.25");
        if (player.expansions > player.expansionsTotal) {
            player.expansionsTotal = player.expansions;
        }
        expansionMilestonesCheck();
    }
}

function expansionMilestonesCheck() {
    if ((player.expansionMilestoneOneUnlocked === false) && (player.expansionsTotal >= 1)) {
        player.expansionMilestoneOneUnlocked = true;
        document.getElementById("energyGeneratorContainer").style.display = "flex";
    }
    if (player.expansionMilestoneOneUnlocked === true) {
        document.getElementById("energyGeneratorContainer").style.display = "flex";
    }
    if (player.expansionMilestoneOneUnlocked === false) {
        document.getElementById("energyGeneratorContainer").style.display = "none";
    }
}