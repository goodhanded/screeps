var nearest = require('nearest');

module.exports = {
    
    name: 'energizeSpawn',
    say: 'Feeding Spawn.',
    
    /** @param {Creep} creep **/
    run: function (creep) {
        
        var spawn = nearest.spawn(creep)
        
        if (spawn.energy == spawn.energyCapacity) {
            return false;
        }
        
        if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(spawn);
        }
        
        return true;
    },
};