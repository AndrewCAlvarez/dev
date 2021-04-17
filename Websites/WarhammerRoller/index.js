let DSAstraMilitarum = {
    infantrySquad: {
        weaponSkill: 4,
        ballisticSkill: 4,
        attacks: 1,

        weapons: {
            lasgun: {
                strength: 3,
                AP: 0,
                damage: 1
            }
        }
    } 
}

// Globals

let rollData = {
    unitType: "", 
    attackType: "",
    numberOfAttacks: "",
    modifierToHit: "",
    hitResultArr: [],
    hitsMade: 0,
    weaponSkill: "",
    ballisticSkill: "",
    weaponStrength: "",
    targetToughness: ""
}


function getHitData(){
     rollData.unitType = document.getElementById("unitType").value;
     rollData.attackType = document.getElementById("attackType").value;
     rollData.numberOfAttacks = document.getElementById("numberOfAttacks").value;
     rollData.modifierToHit = document.getElementById("modifierToHit").value;
     rollData.weaponSkill = unitType.weaponSkill;
     console.log(rollData.weaponSkill);
}

function rollResult(roll, rollType, attackType, ballisticSkill, weaponSkill, modifierToHit, weaponStrength, targetToughness){
    if(roll == 1){
        /* Do nothing. Natural 1's always fail to hit.*/
        return false;
    }
    else if(roll == 6){
        /* Natural 6's always hit */
        return true;
    }

    if(rollType == "hit"){
        roll += modifierToHit;
        if(attackType == "Ranged"){
            // return (roll < ballisticSkill) ? false : true;
        }

    }


    
}


function rollToHit(){
    getHitData();
    for (let rollsMade = 0; rollsMade < rollData.numberOfAttacks; rollsMade++) {
        let roll = Math.floor(Math.random() * 6 + 1);
        let rollType = "hit";
        let hitResult = rollResult(roll, rollType, rollData.attackType, rollData.ballisticSkill, rollData.weaponSkill, rollData.modifierToHit,rollData.weaponStrength,rollData.targetToughness);
        if(hitResult == true){
            rollData.hitsMade++;
        }
        console.log("Roll: " + roll);
    }
    console.log("Hits made: " + rollData.hitsMade);
}

let output = DSAstraMilitarum.infantrySquad.weapons.lasgun.damage;
