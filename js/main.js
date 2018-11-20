/*
// Get head item selection from html
let headSelect = document.getElementById("head");
let headOption = head.options[head.selectedIndex].value;
*/

// Head item database below
let headItems = { 
  r13Head: {arm: 192, ap: 0, str: 20, agi: 19, sta: 19, int: 15, crit: 1.0, sp: 18},
  genesisHelm: {arm: 192, ap: 0, str: 15, agi: 12, sta: 22, int: 22, crit: 1.0, sp: 27}
};
// Neck item database
let neckItems = {
  prestors: {arm: 0, ap: 0, str: 0, agi: 30, sta: 0, int: 0, crit: 0, sp: 0},
  stormragesTalisman: {arm: 0, ap: 26, str: 0, agi: 0, sta: 12, int: 0, crit: 2, sp: 0}
};


// Get head item and change it based on selection
// print for test purpose
let headSelect = document.getElementById("head").value;
let head = headItems[headSelect];
function getHeadOption() {
  headSelect = document.getElementById("head").value;
  head = headItems[headSelect];
  console.log(headSelect);
  console.log(head);
}

// Get neck item and change it based on selection
// print for test purpose
let neckSelect = document.getElementById("neck").value;
let neck = neckItems[neckSelect];
function getNeckOption() {
  neckSelect = document.getElementById("neck").value;
  neck = neckItems[neckSelect];
  console.log(neckSelect);
  console.log(neck);
}

console.log(neck);
console.log(head);

let agility = neck.agi + head.agi;
let critChance = agility / 20 + neck.crit + head.crit;

console.log(agility);
console.log(critChance);
/* This code maybe obsolete soon

let neckSelect = document.getElementById("neck");
let neckOption = neck.options[neck.selectedIndex].value;
*/



let shoulder = document.getElementById("shoulder");
let shoulderVal = shoulder.options[shoulder.selectedIndex].value;


let back = document.getElementById("back");
let backVal = back.options[back.selectedIndex].value;


let chest = document.getElementById("chest");
let chestVal = chest.options[chest.selectedIndex].value;


let wrist = document.getElementById("wrist");
let wristVal = wrist.options[wrist.selectedIndex].value;


let gloves = document.getElementById("gloves");
let glovesVal = gloves.options[gloves.selectedIndex].value;


let legs = document.getElementById("legs");
let Val = legs.options[legs.selectedIndex].value;


let feet = document.getElementById("feet");
let feetVal = feet.options[feet.selectedIndex].value;


let ring1 = document.getElementById("ring1");
let ring1Val = ring1.options[ring1.selectedIndex].value;


let ring2 = document.getElementById("ring2");
let ring2Val = ring2.options[ring2.selectedIndex].value;


let trinket1 = document.getElementById("trinket1");
let trinket1Val = trinket1.options[trinket1.selectedIndex].value;


let trinket2 = document.getElementById("trinket2");
let trinket2Val = trinket2.options[trinket2.selectedIndex].value;
