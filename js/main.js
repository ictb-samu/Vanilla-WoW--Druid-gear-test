// Base stats, level 60 tauren druid, deep feral, cat form, end of dreams + tome of knowledge
let baseHealth,
  baseMana,
  baseDps,
  baseAp,
  baseStr,
  baseCrit,
  baseHit,
  baseArmor;
baseHealth = 2300;
baseMana = 2900;
baseDps = 127.8;
baseStr = 93;
baseAp = 744;
baseCrit = 13.05;
baseHit = 0;
baseArmor = 126;

// Helmets
let headItems = {
  pvpEpicHead: {
    arm: 192,
    ap: 0,
    str: 20,
    agi: 19,
    sta: 19,
    int: 15,
    crit: 1,
    hit: 0,
    sp: 18
  },
  genesisHelm: {
    arm: 192,
    ap: 0,
    str: 15,
    agi: 12,
    sta: 22,
    int: 22,
    crit: 1,
    hit: 0,
    sp: 27
  }
};
// Necklaces
let neckItems = {
  prestors: {
    arm: 0,
    ap: 0,
    str: 0,
    agi: 30,
    sta: 0,
    int: 0,
    crit: 0,
    hit: 0,
    sp: 0
  },
  stormragesTalisman: {
    arm: 0,
    ap: 26,
    str: 0,
    agi: 0,
    sta: 12,
    int: 0,
    crit: 2,
    hit: 1,
    sp: 0
  }
};
// Shoulders
let shoulderItems = {
  wickedRev: {
    arm: 170,
    ap: 0,
    str: 16,
    agi: 30,
    sta: 14,
    int: 0,
    crit: 0,
    hit: 0,
    sp: 0
  },
  genesisShoulder: {
    arm: 172,
    ap: 0,
    str: 15,
    agi: 14,
    sta: 15,
    int: 13,
    crit: 0,
    hit: 0,
    sp: 20
  }
};
//Cloaks
let backItems = {
  cloakOfTheFallenGod: {
    arm: 66,
    ap: 0,
    str: 11,
    agi: 26,
    sta: 15,
    int: 0,
    crit: 0,
    hit: 0,
    sp: 0
  },
  cloakOfConcentratedHatred: {
    arm: 56,
    ap: 0,
    str: 11,
    agi: 16,
    sta: 15,
    int: 0,
    crit: 0,
    hit: 1,
    sp: 0
  }
};
//Chests
let chestItems = {
  ghoulSkinTunic: {
    arm: 411,
    ap: 0,
    str: 40,
    agi: 0,
    sta: 22,
    int: 0,
    crit: 2,
    hit: 0,
    sp: 0
  },
  pvpEpicChest: {
    arm: 260,
    ap: 0,
    str: 25,
    agi: 14,
    sta: 19,
    int: 13,
    crit: 1,
    hit: 0,
    sp: 21
  },
  genesisVest: {
    arm: 253,
    ap: 0,
    str: 13,
    agi: 12,
    sta: 24,
    int: 24,
    crit: 1,
    hit: 0,
    sp: 28
  }
};
//Bracers
let wristItems = {
  qirajiExecutionBracers: {
    arm: 103,
    ap: 0,
    str: 15,
    agi: 16,
    sta: 14,
    int: 0,
    crit: 0,
    hit: 1,
    sp: 0
  }
};
//Gloves
let glovesItems = {
  glovesOfEnforcement: {
    arm: 140,
    ap: 0,
    str: 28,
    agi: 20,
    sta: 6,
    int: 0,
    crit: 0,
    hit: 1,
    sp: 0
  },
  pvpEpicGloves: {
    arm: 173,
    ap: 0,
    str: 20,
    agi: 19,
    sta: 15,
    int: 0,
    crit: 0,
    hit: 0,
    sp: 12
  }
};
//Belts
let beltItems = {
  beltOfNeverEndingAgony: {
    arm: 142,
    ap: 64,
    str: 0,
    agi: 0,
    sta: 20,
    int: 0,
    crit: 1,
    hit: 1,
    sp: 0
  }
};
//Legs
let legsItems = {
  leggingsOfApocalypse: {
    arm: 211,
    ap: 0,
    str: 15,
    agi: 31,
    sta: 23,
    int: 0,
    crit: 2,
    hit: 0,
    sp: 0
  },
  pvpEpicLegs: {
    arm: 216,
    ap: 0,
    str: 24,
    agi: 18,
    sta: 18,
    int: 15,
    crit: 1,
    hit: 0,
    sp: 0
  }
};
//Boots
let feetItems = {
  bootsOfTheVanguard: {
    arm: 138,
    ap: 0,
    str: 22,
    agi: 22,
    sta: 11,
    int: 0,
    crit: 0,
    hit: 0,
    sp: 0
  },
  bootsOfTheShadowFlame: {
    arm: 286,
    ap: 44,
    str: 0,
    agi: 0,
    sta: 22,
    int: 0,
    crit: 0,
    hit: 2,
    sp: 0
  }
};
//Rings
let ringItems = {
  bandOfUnnaturalForces: {
    arm: 0,
    ap: 52,
    str: 0,
    agi: 0,
    sta: 0,
    int: 0,
    crit: 1,
    hit: 1,
    sp: 0
  },
  circleOfAppliedForce: {
    arm: 0,
    ap: 0,
    str: 12,
    agi: 22,
    sta: 9,
    int: 0,
    crit: 0,
    hit: 0,
    sp: 0
  }
};
//Trinkets
let trinketItems = {
  drakeFangTalisman: {
    arm: 0,
    ap: 56,
    str: 0,
    agi: 0,
    sta: 0,
    int: 0,
    crit: 0,
    hit: 2,
    sp: 0
  },
  slayersCrest: {
    arm: 0,
    ap: 64,
    str: 0,
    agi: 0,
    sta: 0,
    int: 0,
    crit: 0,
    hit: 0,
    sp: 0
  }
};
/* Template item database
// 
let Items = {
  : {arm: , ap: , str: , agi: , sta: , int: , crit: , hit: , sp: },
  : {arm: , ap: , str: , agi: , sta: , int: , crit: , hit: , sp: }
};
*/

// Picking option value from html, giving this value now is only for initial load as the value will be changed
// later by function whenever the select option is switched
let headSelect,
  neckSelect,
  shoulderSelect,
  backSelect,
  chestSelect,
  wristSelect,
  glovesSelect,
  beltSelect,
  legsSelect,
  feetSelect,
  ring1Select,
  ring2Select,
  trinket1Select,
  trinket2Select;
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

// Giving variable values here is also only for initial load, but what the code is doing it's picking
// the selected item from the item database based on the option values
let head,
  neck,
  shoulder,
  back,
  chest,
  wrist,
  gloves,
  belt,
  legs,
  feet,
  ring1,
  ring2,
  trinket1,
  trinket2;
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

// initial stats calc
// + head. + neck. + shoulder. + back. + chest. + wrist. + gloves. + belt. + legs. + feet. + ring1. + ring2. + trinket1. + trinket2.;
let strength =
  baseStr +
  head.str +
  shoulder.str +
  back.str +
  wrist.str +
  gloves.str +
  belt.str +
  legs.str +
  feet.str +
  ring1.str +
  ring2.str +
  trinket1.str +
  trinket2.str;
let agility =
  head.agi +
  neck.agi +
  shoulder.agi +
  back.agi +
  chest.agi +
  wrist.agi +
  gloves.agi +
  belt.agi +
  legs.agi +
  feet.agi +
  ring1.agi +
  ring2.agi +
  trinket1.agi +
  trinket2.agi;
let attackPower =
  2.4 * strength +
  agility +
  baseAp +
  head.ap +
  neck.ap +
  shoulder.ap +
  back.ap +
  chest.ap +
  wrist.ap +
  gloves.ap +
  belt.ap +
  legs.ap +
  feet.ap +
  ring1.ap +
  ring2.ap +
  trinket1.ap +
  trinket2.ap;
let hitChance =
  baseHit +
  head.hit +
  neck.hit +
  shoulder.hit +
  back.hit +
  chest.hit +
  wrist.hit +
  gloves.hit +
  belt.hit +
  legs.hit +
  feet.hit +
  ring1.hit +
  ring2.hit +
  trinket1.hit +
  trinket2.hit;
let stamina =
  head.sta +
  neck.sta +
  shoulder.sta +
  back.sta +
  chest.sta +
  wrist.sta +
  gloves.sta +
  belt.sta +
  legs.sta +
  feet.sta +
  ring1.sta +
  ring2.sta +
  trinket1.sta +
  trinket2.sta;
let intellect =
  head.int +
  neck.int +
  shoulder.int +
  back.int +
  chest.int +
  wrist.int +
  gloves.int +
  belt.int +
  legs.int +
  feet.int +
  ring1.int +
  ring2.int +
  trinket1.int +
  trinket2.int;
let health = baseHealth + 10 * stamina;
let mana = baseMana + 15 * intellect;
let critChance =
  agility / 20 +
  +baseCrit +
  head.crit +
  neck.crit +
  shoulder.crit +
  back.crit +
  chest.crit +
  wrist.crit +
  gloves.crit +
  belt.crit +
  legs.crit +
  feet.crit +
  ring1.crit +
  ring2.crit +
  trinket1.crit +
  trinket2.crit;
let dps = baseDps + attackPower / 14;

//Insert initial html
document.getElementById("dps").innerHTML = "DPS: " + dps;
document.getElementById("ap").innerHTML = "Attack power: " + attackPower;
document.getElementById("health").innerHTML = "Health: " + health;
document.getElementById("mana").innerHTML = "Mana: " + mana;
document.getElementById("crit").innerHTML = "Crit chance: " + critChance + "%";
document.getElementById("hit").innerHTML = "Hit: " + hitChance;
document.getElementById("agi").innerHTML = "Agility: " + agility;

// Get the current selection values and then do the calculations whenever selection is changed
function updateSelection() {
  // Get the current values
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
  // Do the calculations
  // + head. + neck. + shoulder. + back. + chest. + wrist. + gloves. + belt. + legs. + feet. + ring1. + ring2. + trinket1. + trinket2.;
  strength =
    baseStr +
    head.str +
    shoulder.str +
    back.str +
    wrist.str +
    gloves.str +
    belt.str +
    legs.str +
    feet.str +
    ring1.str +
    ring2.str +
    trinket1.str +
    trinket2.str;
  agility =
    head.agi +
    neck.agi +
    shoulder.agi +
    back.agi +
    chest.agi +
    wrist.agi +
    gloves.agi +
    belt.agi +
    legs.agi +
    feet.agi +
    ring1.agi +
    ring2.agi +
    trinket1.agi +
    trinket2.agi;
  attackPower =
    2.4 * strength +
    agility +
    baseAp +
    head.ap +
    neck.ap +
    shoulder.ap +
    back.ap +
    chest.ap +
    wrist.ap +
    gloves.ap +
    belt.ap +
    legs.ap +
    feet.ap +
    ring1.ap +
    ring2.ap +
    trinket1.ap +
    trinket2.ap;
  hitChance =
    baseHit +
    head.hit +
    neck.hit +
    shoulder.hit +
    back.hit +
    chest.hit +
    wrist.hit +
    gloves.hit +
    belt.hit +
    legs.hit +
    feet.hit +
    ring1.hit +
    ring2.hit +
    trinket1.hit +
    trinket2.hit;
  stamina =
    head.sta +
    neck.sta +
    shoulder.sta +
    back.sta +
    chest.sta +
    wrist.sta +
    gloves.sta +
    belt.sta +
    legs.sta +
    feet.sta +
    ring1.sta +
    ring2.sta +
    trinket1.sta +
    trinket2.sta;
  intellect =
    head.int +
    neck.int +
    shoulder.int +
    back.int +
    chest.int +
    wrist.int +
    gloves.int +
    belt.int +
    legs.int +
    feet.int +
    ring1.int +
    ring2.int +
    trinket1.int +
    trinket2.int;
  health = baseHealth + 10 * stamina;
  mana = baseMana + 15 * intellect;
  critChance =
    agility / 20 +
    +baseCrit +
    head.crit +
    neck.crit +
    shoulder.crit +
    back.crit +
    chest.crit +
    wrist.crit +
    gloves.crit +
    belt.crit +
    legs.crit +
    feet.crit +
    ring1.crit +
    ring2.crit +
    trinket1.crit +
    trinket2.crit;
  dps = baseDps + attackPower / 14;
  // Change the html
  document.getElementById("dps").innerHTML = "DPS: " + dps;
  document.getElementById("ap").innerHTML = "Attack power: " + attackPower;
  document.getElementById("health").innerHTML = "Health: " + health;
  document.getElementById("mana").innerHTML = "Mana: " + mana;
  document.getElementById("crit").innerHTML =
    "Crit chance: " + critChance + "%";
  document.getElementById("hit").innerHTML = "Hit: " + hitChance;
  document.getElementById("agi").innerHTML = "Agility: " + agility;
  // console log....
  console.log(headSelect);
  console.log(neckSelect);
  console.log(shoulderSelect);
  console.log(backSelect);
  console.log(chestSelect);
  console.log(wristSelect);
  console.log(glovesSelect);
  console.log(beltSelect);
  console.log(legsSelect);
  console.log(feetSelect);
  console.log(ring1Select);
  console.log(ring2Select);
  console.log(trinket1Select);
  console.log(trinket2Select);
  console.log(dps);
}

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
