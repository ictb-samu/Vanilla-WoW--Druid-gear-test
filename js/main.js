// Helmets
let headItems = { 
  pvpEpicHead: {arm: 192, ap: 0, str: 20, agi: 19, sta: 19, int: 15, crit: 1, hit: 0, sp: 18},
  genesisHelm: {arm: 192, ap: 0, str: 15, agi: 12, sta: 22, int: 22, crit: 1, hit: 0, sp: 27}
};
// Necklaces
let neckItems = {
  prestors: {arm: 0, ap: 0, str: 0, agi: 30, sta: 0, int: 0, crit: 0, hit: 0, sp: 0},
  stormragesTalisman: {arm: 0, ap: 26, str: 0, agi: 0, sta: 12, int: 0, crit: 2, hit: 1, sp: 0}
};

// Shoulders
let shoulderItems = {
  wickedRev: {arm: 170, ap: 0, str: 16, agi: 30, sta: 14, int: 0, crit: 0, hit: 0, sp: 0},
  genesisShoulder: {arm: 0, ap: 26, str: 0, agi: 0, sta: 12, int: 0, crit: 2, hit: 0, sp: 0}
};

//Cloaks
let backItems = {
  cloakOfTheFallenGod: {arm: 66, ap: 0, str: 11, agi: 26, sta: 15, int: 0, crit: 0, hit: 0, sp: 0},
  cloakOfConcentratedHatred: {arm: 56, ap: 0, str: 11, agi: 16, sta: 15, int: 0, crit: 0, hit: 1, sp: 0}
};

//Chests
let chestItems = {
  ghoulSkinTunic: {arm: 411, ap: 0, str: 40, agi: 0, sta: 22, int: 0, crit: 2, hit: 0, sp: 0},
  pvpEpicChest: {arm: 260, ap: 0, str: 25, agi: 14, sta: 19, int: 13, crit: 1, hit: 0, sp: 21},
  genesisVest: {arm: 253, ap: 0, str: 13, agi: 12, sta: 24, int: 24, crit: 1, hit: 0, sp: 28}
};

//Bracers
let wristItems = {
  qirajiExecutionBracers: {arm: 103, ap: 0, str: 15, agi: 16, sta: 14, int: 0, crit: 0, hit: 1, sp: 0}
};

//Gloves
let glovesItems = {
  glovesOfEnforcement: {arm: 140, ap: 0, str: 28, agi: 20, sta: 6, int: 0, crit: 0, hit: 1, sp: 0},
  pvpEpicGloves: {arm: 173, ap: 0, str: 20, agi: 19, sta: 15, int: 0, crit: 0, hit: 0, sp: 12}
};

//Belts
let beltItems = {
  beltOfNeverEndingAgony: {arm: 142, ap: 64, str: 0, agi: 0, sta: 20, int: 0, crit: 1, hit: 1, sp: 0}
};

//Legs
let legsItems = {
  leggingsOfApocalypse: {arm: 211, ap: 0, str: 15, agi: 31, sta: 23, int: 0, crit: 2, hit: 0, sp: 0},
  pvpEpicLegs: {arm: 216, ap: 0, str: 24, agi: 18, sta: 18, int: 15, crit: 1, hit: 0, sp: 0}
};

//Boots
let feetItems = {
  bootsOfTheVanguard: {arm: 138, ap: 0, str: 22, agi: 22, sta: 11, int: 0, crit: 0, hit: 0, sp: 0},
  bootsOfTheShadowFlame: {arm: 286, ap: 44, str: 0, agi: 0, sta: 22, int: 0, crit: 0, hit: 2, sp: 0}
};

//Rings
let ringItems = {
  bandOfUnnaturalForces: {arm: 0, ap: 52, str: 0, agi: 0, sta: 0, int: 0, crit: 1, hit: 1, sp: 0},
  circleOfAppliedForce: {arm: 0, ap: 0, str: 12, agi: 22, sta: 9, int: 0, crit: 0, hit: 0, sp: 0}
};

//Trinkets
let trinketItems = {
  drakeFangTalisman: {arm: 0, ap: 56, str: 0, agi: 0, sta: 0, int: 0, crit: 0, hit: 2, sp: 0},
  slayersCrest: {arm: 0, ap: 64, str: 0, agi: 0, sta: 0, int: 0, crit: 0, hit: 0, sp: 0}
};

/* Template item database
// 
let Items = {
  : {arm: , ap: , str: , agi: , sta: , int: , crit: , hit: , sp: },
  : {arm: , ap: , str: , agi: , sta: , int: , crit: , hit: , sp: }
};
*/

let headSelect, neckSelect, shoulderSelect, backSelect, chestSelect, wristSelect, glovesSelect,
    beltSelect, legsSelect, feetSelect, ring1Select, ring2Select, trinket1Select, trinket2Select;
    headSelect = document.getElementById("head").value;
    neckSelect = document.getElementById("neck").value;
    shoulderSelect = document.getElementById("shoulder").value;
    backSelect = document.getElementById("back").value;
    chestSelect = document.getElementById("chest").value;
    wristSelect = document.getElementById("wrist").value;
    glovesSelect = document.getElementById("gloves").value;
    beltSelect = document.getElementById("belt").value;
    legsSelect = document.getElementById("legs").value;
    feetSelect = document.getElementById("feet").value;
    ring1Select = document.getElementById("ring1").value;
    ring2Select = document.getElementById("ring2").value;
    trinket1Select = document.getElementById("trinket1").value;
    trinket2Select = document.getElementById("trinket2").value;

let head, neck, shoulder, back, chest, wrist, gloves, belt, legs, feet, ring1, ring2, trinket1, trinket2;
    head = headItems[headSelect];
    neck = neckItems[neckSelect];
    shoulder = shoulderItems[shoulderSelect];
    back = backItems[backSelect];
    chest = chestItems[chestSelect];
    wrist = wristItems[wristSelect];
    gloves = glovesItems[glovesSelect];
    belt = beltItems[beltSelect];
    legs = legsItems[legsSelect];
    feet = feetItems[feetSelect];
    ring1 = ringItems[ring1Select];
    ring2 = ringItems[ring2Select];
    trinket1 = trinketItems[trinket1Select];
    trinket2 = trinketItems[trinket2Select];

agility = neck.agi + head.agi;
critChance = agility / 20 + neck.crit + head.crit;


/*
// Get head item and change it based on selection
// print for test purpose
let headSelect = document.getElementById("head").value;
let head = headItems[headSelect];
function getHeadOption() {
  headSelect = document.getElementById("head").value;
  head = headItems[headSelect];
  agility = neck.agi + head.agi;
  critChance = agility / 20 + neck.crit + head.crit;
  document.getElementById("crit").innerHTML = "Crit chance: " + (critChance) + "%";
  document.getElementById("agility").innerHTML = "Agility: " + (agility);
}

// Get neck item and change it based on selection
// print for test purpose
let neckSelect = document.getElementById("neck").value;
let neck = neckItems[neckSelect];
function getNeckOption() {
  neckSelect = document.getElementById("neck").value;
  neck = neckItems[neckSelect];
  agility = neck.agi + head.agi;
  critChance = agility / 20 + neck.crit + head.crit;
}


let agility;
let critChance;


document.getElementById("crit").innerHTML = "Crit chance: " + (critChance) + "%";
document.getElementById("agility").innerHTML = "Agility: " + (agility);

/* This code maybe obsolete soon

let neckSelect = document.getElementById("neck");
let neckOption = neck.options[neck.selectedIndex].value;
*/


