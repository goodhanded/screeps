var nearest = require('nearest');
var move = require('move');

module.exports = {
    
    name: 'harvest',
    say: 'Harvesting',
    
    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.carry.energy == creep.carryCapacity) {
            return false;
        }
        
        var source = nearest.source(creep);
        
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            move(creep).to(source);
        }
        
        return true;
    },
}