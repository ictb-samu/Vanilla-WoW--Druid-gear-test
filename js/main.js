/*
// Get head item selection from html
let headSelect = document.getElementById("head");
let headOption = head.options[head.selectedIndex].value;
*/

// Helmets
let headItems = { 
  r13Head: {arm: 192, ap: 0, str: 20, agi: 19, sta: 19, int: 15, crit: 1.0, sp: 18, scrit: 0, spirit: 0},
  genesisHelm: {arm: 192, ap: 0, str: 15, agi: 12, sta: 22, int: 22, crit: 1.0, sp: 27, scrit: 0, spirit: 0}
};

// Necklaces
let neckItems = {
  prestors: {arm: 0, ap: 0, str: 0, agi: 30, sta: 0, int: 0, crit: 0, sp: 0, scrit: 0, spirit: 0},
  stormragesTalisman: {arm: 0, ap: 26, str: 0, agi: 0, sta: 12, int: 0, crit: 2, sp: 0, scrit: 0, spirit: 0}
};

// Shoulders
let shoulderItems = {
  wickedRev: {arm: 1, ap: 2, str: 3, agi: 4, sta: 5, int: 6, crit: 7, sp: 8, scrit: 0, spirit: 0}
};

// 
let Items = {
  : {arm: , ap: , str: , agi: , sta: , int: , crit: , sp: },
  : {arm: , ap: , str: , agi: , sta: , int: , crit: , sp: }
};

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
    ring1 = ring1Items[ring1Select];
    ring2 = ring2Items[ring2Select];
    trinket1 = trinket1Items[trinket1Select];
    trinket2 = trinket2Items[trinket2Select];

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


