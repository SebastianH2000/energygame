var themeObject = {
  themeName: ['Default', 'Magma', 'Grayscale', 'Leaf', 'Baja', 'Violet', 'Sunset'],

  //Example Notation: themeName: ['','','','','','','','','',''],

  themeDefault: ['#070d12', '#152737', '#23415c', '#315a81', '#3f74a6', '#598ec0', '#7ea7ce', '#a3c0dc', '#c8d9ea', '#edf2f8'],
  //themeBaja: ['','','','','','','','','',''],
  themeBaja: ['#001a14', '#004d3d', '#008066', '#00b38f', '#00e6b8', '#1affd1', '#4dffdc', '#80ffe6', '#b3fff0', '#e5fffa'],
  themeGrayscale: ['#0d0d0d', '#262626', '#404040', '#595959', '#737373', '#8c8c8c', '#a6a6a6', '#bfbfbf', '#d9d9d9', '#f2f2f2'],
  themeMagma: ['#1a0001', '#4d0002', '#800003', '#b30005', '#e60006', '#ff1a1f', '#ff4d51', '#ff8083', '#ffb3b4', '#ffe5e6'],
  themeLeaf: ['#051a00', '#0e4d00', '#188000', '#22b300', '#2be600', '#45ff1a', '#6eff4d', '#98ff80', '#c1ffb3', '#eaffe5'],
  themeViolet: ['#10001a', '#31004d', '#520080', '#7300b3', '#9300e6', '#ad1aff', '#bf4dff', '#d180ff', '#e4b3ff', '#f6e5ff'],
  themeSunset: ['#1a0f00', '#4d2c00', '#804900', '#b36600', '#e68300', '#ff9d1a', '#ffb34d', '#ffc980', '#ffdeb3', '#fff4e5'],
}
var themeName = ['Default', 'Magma', 'Grayscale', 'Leaf', 'Baja', 'Violet', 'Sunset'];

//Example Notation: themeName: ['','','','','','','','','',''];

var themeDefault = ['#070d12', '#152737', '#23415c', '#315a81', '#3f74a6', '#598ec0', '#7ea7ce', '#a3c0dc', '#c8d9ea', '#edf2f8'];
//var themeBaja: ['','','','','','','','','',''];
var themeBaja = ['#001a14', '#004d3d', '#008066', '#00b38f', '#00e6b8', '#1affd1', '#4dffdc', '#80ffe6', '#b3fff0', '#e5fffa'];
var themeGrayscale = ['#0d0d0d', '#262626', '#404040', '#595959', '#737373', '#8c8c8c', '#a6a6a6', '#bfbfbf', '#d9d9d9', '#f2f2f2'];
var themeMagma = ['#1a0001', '#4d0002', '#800003', '#b30005', '#e60006', '#ff1a1f', '#ff4d51', '#ff8083', '#ffb3b4', '#ffe5e6'];
var themeLeaf = ['#051a00', '#0e4d00', '#188000', '#22b300', '#2be600', '#45ff1a', '#6eff4d', '#98ff80', '#c1ffb3', '#eaffe5'];
var themeViolet = ['#10001a', '#31004d', '#520080', '#7300b3', '#9300e6', '#ad1aff', '#bf4dff', '#d180ff', '#e4b3ff', '#f6e5ff'];
var themeSunset = ['#1a0f00', '#4d2c00', '#804900', '#b36600', '#e68300', '#ff9d1a', '#ffb34d', '#ffc980', '#ffdeb3', '#fff4e5'];

function switchTab(p1) {
  document.getElementById("energySubTabContainer").style.display = "none";
  document.getElementById("optionsSubTabContainer").style.display = "none";
  
  document.getElementById("energyTab").style.backgroundColor = "var(--primary-3)";
  document.getElementById("optionsTab").style.backgroundColor = "var(--primary-3)";
  
  document.getElementById(p1 + "SubTabContainer").style.display = "flex";
  document.getElementById(p1 + "Tab").style.backgroundColor = "var(--primary-4)";

  document.getElementById("energyGeneratorsContainer").style.display = "none";
  document.getElementById("optionsSettingsContainer").style.display = "none";

  document.getElementById("energyGeneratorsSubTab").style.backgroundColor = "var(--primary-3)";
  document.getElementById("optionsSettingsSubTab").style.backgroundColor = "var(--primary-3)";

  document.getElementById(p1 + player[p1 + 'SubTab'] + "Container").style.display = "flex";
  document.getElementById(p1 + player[p1 + 'SubTab'] + "SubTab").style.backgroundColor = "var(--primary-4)";

  //switchSubTab(p1 + player[p1 + 'SubTab']);
  player.currentTab = p1;
  player.currentSubTab[0] = p1;
  player.currentSubTab[1] = player[p1 + 'SubTab'];
}
  
function switchSubTab(p1,p2,p3) {
  if ((player.serenityPending !== true) || (p2 === 'force')) {
    document.getElementById("energyGeneratorsContainer").style.display = "none";
    document.getElementById("optionsSettingsContainer").style.display = "none";

    document.getElementById("energyGeneratorsSubTab").style.backgroundColor = "var(--primary-3)";
    document.getElementById("optionsSettingsSubTab").style.backgroundColor = "var(--primary-3)";

    if (typeof p1 === "object") {
      let one = p1[0];
      let two = p1[1];
      player[one + 'SubTab'] = two;
      document.getElementById(one + two + "Container").style.display = "flex";
      document.getElementById(one + two + "SubTab").style.backgroundColor = "var(--primary-4)";
      player.currentSubTab[0] = one;
      player.currentSubTab[1] = two;
      //console.log(player.currentSubTab[0] + player.currentSubTab[1] + "array");
    }
    else if (p2 !== "undefined") {
      document.getElementById(p1 + p2 + "Container").style.display = "flex";
      document.getElementById(p1 + p2 + "SubTab").style.backgroundColor = "var(--primary-4)";
      player[p1 + 'SubTab'] = p2;
      player.currentSubTab[0] = p1;
      player.currentSubTab[1] = p2;
      //console.log(p1 + p2 + "string");
    }
  }
}
  
function themeChange(p1,p2) {
  if (p1 == 1) {
    if (player.theme >= themeObject.themeName.length - 1) {
      player.theme = 0;
    }
    else {
      player.theme ++;
    }
  }
  
  document.getElementById("themeBtn").innerHTML = 'Default Theme: ' + themeObject.themeName[player.theme];
  for(let i = 0; i < 10; i++) {

    if (p2 !== undefined) {
      document.documentElement.style.setProperty('--primary-' + i, themeObject[p2][i]);
      document.getElementById("themeExample" + i).style.backgroundColor = 'var(--primary-' + i + ')';
      if (i > 4) {
        document.getElementById("themeExample" + i).style.color = 'var(--primary-0)';
      }
    }
    else {
      document.documentElement.style.setProperty('--primary-' + i, themeObject['theme' + themeObject.themeName[player.theme]][i]);
      document.getElementById("themeExample" + i).style.backgroundColor = 'var(--primary-' + i + ')';
      if (i > 4) {
        document.getElementById("themeExample" + i).style.color = 'var(--primary-0)';
      }
    }
    //document.documentElement.style.setProperty('--primary-3', '#48AA48');
  }
}

//old code
/*function themeChange(p1,p2) {
  if (p1 == 1) {
    if (player.theme >= player.themeName.length - 1) {
      player.theme = 0;
    }
    else {
      player.theme ++;
    }
  }
  
  document.getElementById("themeBtn").innerHTML = 'Default Theme: ' + player.themeName[player.theme];
  for(let i = 0; i < 10; i++) {

    if (p2 !== undefined) {
      document.documentElement.style.setProperty('--primary-' + i, player[p2][i]);
      document.getElementById("themeExample" + i).style.backgroundColor = 'var(--primary-' + i + ')';
      if (i > 4) {
        document.getElementById("themeExample" + i).style.color = 'var(--primary-0)';
      }
    }
    else {
      document.documentElement.style.setProperty('--primary-' + i, player['theme' + player.themeName[player.theme]][i]);
      document.getElementById("themeExample" + i).style.backgroundColor = 'var(--primary-' + i + ')';
      if (i > 4) {
        document.getElementById("themeExample" + i).style.color = 'var(--primary-0)';
      }
    }
    //document.documentElement.style.setProperty('--primary-3', '#48AA48');
  }
}*/

function keyM(e) {
  if(e.keyCode === 77){
     //console.log('M');
     //console.log(player.currentSubTab);
     if ((player.currentSubTab[0] === 'main') && (player.currentSubTab[1] === 'Materials')) {
         buyMaxAllStoneGenerators();
         //console.log('mainMaterialsM');
     }
     if ((player.currentSubTab[0] === 'main') && (player.currentSubTab[1] === 'Upgrades')) {
         buyMaxAllStoneUpgrades();
         //console.log('mainUpgradesM');
     }
  };
}
document.onkeydown = keyM;