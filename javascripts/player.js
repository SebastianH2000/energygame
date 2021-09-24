var player = {
    energy: new Decimal("0"),
    //energy: 0,
    //this doesn't work:
    //energy: new Decimal("1e10"),

    currentTab: 'energy',
    currentSubTab: ['energy','Generators'],
    energySubTab: 'Generators',
    optionsSubTab: 'Settings',

    theme: 0,
    themeName: ['Default','Magma','Grayscale','Leaf','Baja','Violet','Sunset'],
    
    //Example Notation: themeName: ['','','','','','','','','',''],
    
    themeDefault: ['#070d12','#152737','#23415c','#315a81','#3f74a6','#598ec0','#7ea7ce','#a3c0dc','#c8d9ea','#edf2f8'],
    //themeBaja: ['','','','','','','','','',''],
    themeBaja: ['#001a14','#004d3d','#008066','#00b38f','#00e6b8','#1affd1','#4dffdc','#80ffe6','#b3fff0','#e5fffa'],
    themeGrayscale: ['#0d0d0d','#262626','#404040','#595959','#737373','#8c8c8c','#a6a6a6','#bfbfbf','#d9d9d9','#f2f2f2'],
    themeMagma: ['#1a0001','#4d0002','#800003','#b30005','#e60006','#ff1a1f','#ff4d51','#ff8083','#ffb3b4','#ffe5e6'],
    themeLeaf: ['#051a00','#0e4d00','#188000','#22b300','#2be600','#45ff1a','#6eff4d','#98ff80','#c1ffb3','#eaffe5'],
    themeViolet: ['#10001a','#31004d','#520080','#7300b3','#9300e6','#ad1aff','#bf4dff','#d180ff','#e4b3ff','#f6e5ff'],
    themeSunset: ['#1a0f00','#4d2c00','#804900','#b36600','#e68300','#ff9d1a','#ffb34d','#ffc980','#ffdeb3','#fff4e5'],
}

function save() {
    localStorage.setItem("save-file",JSON.stringify(player));
}

window.onload = function() {
    if (localStorage.getItem("save-file") === null) {
        console.log('newSave');
        player.energy = new Decimal("0");
        switchTab('energy');
        switchSubTab('energy', 'Generators');
        themeChange(0,'themeDefault');
        localStorage.setItem("save-file",JSON.stringify(player));
    }

    loadData();
    switchTab(player.currentTab);
    themeChange();
}

function loadData() {
    gameSave = JSON.parse(localStorage.getItem("save-file"));

    //tabs & subtabs
    //if (typeof gameSave.energy !== "undefined") player.energy = gameSave.energy;
    //if (typeof gameSave.energy !== "undefined") player.energy = saveGame.energy;
    safeLoadData('energy');
    /*if (player.energy.exponent === undefined) {
        let value = player.energy;
        player.energy = new Decimal(value);
    }*/


    safeLoadData('currentTab');

    safeLoadData('theme');
}

function safeLoadData(target, source, key) {
    gameSave = JSON.parse(localStorage.getItem("save-file"));
    target = target || player;
    source = source || gameSave;
    if (source[key] !== undefined) {
      target[key] = source[key];
    }
  }