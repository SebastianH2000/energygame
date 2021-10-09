var player = {
    energy: new Decimal("0"),

    expansions: new Decimal("0"),
    expansionCostMult: new Decimal("10"),

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
}

function loadData() {
    gameSave = JSON.parse(localStorage.getItem("sebastianhdarkenergy"));

    //tabs & subtabs
    //if (typeof gameSave.energy !== "undefined") player.energy = gameSave.energy;
    //if (typeof gameSave.energy !== "undefined") player.energy = saveGame.energy;
    safeLoadData('energy', true);
    safeLoadData('expansions', true);
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
        player.expansions = new Decimal("0");
        switchTab('energy');
        switchSubTab('energy', 'Generators');
        themeChange(0,'themeDefault');
        player.autoSave = false;
        document.getElementById("autoSaveBtn").textContent = "Auto Save (Saves Once Every Second): OFF";
    }
    else {
        var resetSaveAnswer = prompt("To Reset Your Save, Please Type 'Yes' (Without quotation marks) otherwise, hit cancel.");
        if (resetSaveAnswer === "Yes") {
            player.energy = new Decimal("0");
            player.expansions = new Decimal("0");
            switchTab('energy');
            switchSubTab('energy', 'Generators');
            themeChange(0,'themeDefault');
            player.autoSave = false;
            document.getElementById("autoSaveBtn").textContent = "Auto Save (Saves Once Every Second): OFF";
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