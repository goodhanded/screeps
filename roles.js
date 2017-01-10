var actions = require('actions');

var roles = {

    harvester: {
        name: 'harvester',
        body: [MOVE, CARRY, WORK],
        actions: ['harvest','energizeSpawn','upgradeController']
    },
    
    upgrader: {
        name: 'upgrader',
        body: [MOVE, CARRY, WORK],
        actions: ['upgradeController', 'harvest']
    }

};

for (var role in roles) {
    roles[role].run = run;
    roles[role].create = create;
    roles[role].actions.push('idle');
}

module.exports = roles;

function create() {
    if (Game.spawns['Spawn1'].canCreateCreep(this.body) == OK) {
        Game.spawns['Spawn1'].createCreep(this.body, undefined, {role: this.name});
    }
}

/** @param {Creep} creep **/
function run(creep) {
    for (var index in this.actions) {
        var actionName = this.actions[index];
        var action = actions[actionName];
        
        if (action.run(creep)) {
            creep.memory.action = action.name;
            creep.say(action.say);
            break;
        }
    }
}