var player = {
    energy: new Decimal("0"),

    expansions: new Decimal("0"),
    expansionsTotal: new Decimal("0"),
    expansionsHighest: new Decimal("0"),
    expansionCostMult: new Decimal("10"),

    energyGenerator: new Decimal("0"),
    energyGeneratorCost: new Decimal("10"),
    energyGeneratorExponent: new Decimal("1.25"),

    expansionMilestoneOneUnlocked: false,

    currentPrestigeView: 'expansion',
    currentTab: 'energy',
    currentSubTab: ['energy','Generators'],
    energySubTab: 'Generators',
    expansionSubTab: 'Milestones',
    optionsSubTab: 'Settings',

    theme: 0,

    autoSave: false,
}

function save() {
    localStorage.setItem("sebastianhdarkenergy",JSON.stringify(player));
}

window.onload = function() {
    if (localStorage.getItem("sebastianhdarkenergy") === null) {
        resetSave(false);
        /*console.log('newSave');
        player.energy = new Decimal("0");
        switchTab('energy');
        switchSubTab('energy', 'Generators');
        themeChange(0,'themeDefault');*/
        //localStorage.setItem("sebastianhdarkenergy",JSON.stringify(player));
    }
    else {
        loadData();
        switchTab(player.currentTab);
        themeChange();
    }

    if (player.autoSave === true) {
        document.getElementById("autoSaveBtn").textContent = "Auto Save (Saves Once Every Second): ON";
    }
    else {
        document.getElementById("autoSaveBtn").textContent = "Auto Save (Saves Once Every Second): OFF";
    }
    expansionMilestonesCheck();
}

function loadData() {
    gameSave = JSON.parse(localStorage.getItem("sebastianhdarkenergy"));

    //tabs & subtabs
    //if (typeof gameSave.energy !== "undefined") player.energy = gameSave.energy;
    //if (typeof gameSave.energy !== "undefined") player.energy = saveGame.energy;
    safeLoadData('energy', true);
    safeLoadData('expansions', true);
    safeLoadData('expansionsTotal', true);
    safeLoadData('expansionsHighest', true);

    safeLoadData('energyGenerator', true);
    safeLoadData('energyGeneratorCost', true);
    safeLoadData('energyGeneratorExponent', true);

    safeLoadData('expansionMilestoneOneUnlocked');
    /*if (player.energy.exponent === undefined) {
        let value = player.energy;
        player.energy = new Decimal(value);
    }*/


    safeLoadData('currentTab');

    safeLoadData('theme');

    safeLoadData('autoSave');
}

function safeLoadData(key, decimalTrue, target, source) {
    gameSave = JSON.parse(localStorage.getItem("sebastianhdarkenergy"));
    targetSecond = target ?? player;
    sourceSecond = source ?? gameSave;
    decimalTrueSecond = decimalTrue ?? false;
    if ((decimalTrueSecond === true) && (sourceSecond[key] !== undefined)) {
        console.log("decimal loaded");
        targetSecond[key] = new Decimal(sourceSecond[key]);
        //targetSecond[key].mantissa;
        //targetSecond[key].exponent = log(sourceSecond[key]);
    }
    /*if ((sourceSecond[key].exponent !== undefined) && (sourceSecond[key] !== undefined)) {
        console.log("decimal loaded");
        targetSecond[key] = new Decimal(sourceSecond[key]);
        //targetSecond[key].mantissa;
        //targetSecond[key].exponent = log(sourceSecond[key]);
    }*/
    else if (sourceSecond[key] !== undefined) {
        targetSecond[key] = sourceSecond[key];
    }
}

function resetSave(p1) {
    if (p1 === false) {
        player.energy = new Decimal("0");

        player.energyGenerator = new Decimal("0");
        player.energyGeneratorCost = new Decimal("10");
        player.energyGeneratorExponent = new Decimal("1.25");

        player.expansions = new Decimal("0");
        player.expansionsTotal = new Decimal("0");
        player.expansionsHighest = new Decimal("0");

        player.expansionMilestoneOneUnlocked = false;

        switchTab('energy');
        switchSubTab('energy', 'Generators');
        themeChange(0,'themeDefault');
        player.autoSave = false;
        document.getElementById("autoSaveBtn").textContent = "Auto Save (Saves Once Every Second): OFF";
        expansionMilestonesCheck();
    }
    else {
        var resetSaveAnswer = prompt("To Reset Your Save, Please Type 'Yes' (Without quotation marks) otherwise, hit cancel.");
        if (resetSaveAnswer === "Yes") {
            player.energy = new Decimal("0");

            player.energyGenerator = new Decimal("0");
            player.energyGeneratorCost = new Decimal("10");
            player.energyGeneratorExponent = new Decimal("1.25");

            player.expansions = new Decimal("0");
            player.expansionsTotal = new Decimal("0");
            player.expansionsHighest = new Decimal("0");

            player.expansionMilestoneOneUnlocked = false;

            switchTab('energy');
            switchSubTab('energy', 'Generators');
            themeChange(0,'themeDefault');
            player.autoSave = false;
            document.getElementById("autoSaveBtn").textContent = "Auto Save (Saves Once Every Second): OFF";
            expansionMilestonesCheck();
        }
    }
}

function toggleAutoSave() {
    if (player.autoSave === true) {
        player.autoSave = false;
        save();
        document.getElementById("autoSaveBtn").textContent = "Auto Save (Saves Once Every Second): OFF";
    }
    else {
        player.autoSave = true;
        document.getElementById("autoSaveBtn").textContent = "Auto Save (Saves Once Every Second): ON";
    }
}