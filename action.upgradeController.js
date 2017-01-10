module.exports = {
    
    name: 'upgradeController',
    say: 'Upgrading',
    
    /** @param {Creep} creep **/
    run: function (creep) {
        
        if (creep.energy == 0) {
            return false;
        }
        
        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
        
        return true;
    }
}