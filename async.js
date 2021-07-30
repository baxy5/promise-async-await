const killingAkatsukiMembers = require('./async-func');

async function theFight(){
    let killedPerson = await killingAkatsukiMembers();
    console.log(`I killed ${killedPerson}!`);
}

theFight();