function gainExpansions() {
    if (player.energy.exponent > player.expansions) {
        player.expansions = player.expansions.add(player.energy.exponent - player.expansions);
        player.energy = new Decimal("0");
    }
}