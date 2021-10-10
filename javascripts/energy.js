function gainEnergy(amount) {
    player.energy = player.energy.add(amount);
}

function buyBuilding(p1,p2,p3) {
    if (player[p1].greaterThanOrEqualTo(player[p1 + p2 + "Cost"])) {
        player[p1] = player[p1].minus(player[p1 + p2 + "Cost"]);
        player[p1 + p2] = player[p1 + p2].add(1);
        //player[p1 + p2 + "Cost"] = player[p1 + p2 + "CostOffset"] * (player[p2 + p3] ** (player[p2]));
        console.log(player[p1 + p2 + "Cost"]);
        player[p1 + p2 + "Cost"] = p3 * (player[p1 + p2 + 'Exponent'] ** (player[p1 + p2]));
        //player.generatorExponent = 1 + (0.1 / (1.05 ** player.simplifier));
    }
    //player.generatorCost = player.generatorCostOffset * (player.generatorExponent ** player.generator);
    //player.multiplierCost = player.multiplierCostOffset * (player.multiplierExponent ** (player.multiplier));
    //player.simplifierCost = player.simplifierCostOffset * (player.simplifierExponent ** (player.simplifier));
}