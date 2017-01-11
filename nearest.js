module.exports = {
    
    /** @param {Creep} creep **/
    source: function(creep) {
        return creep.pos.findClosestByRange(FIND_SOURCES);
    },
    
    /** @param {Creep} creep **/
    spawn: function(creep) {
        return creep.pos.findClosestByRange(FIND_MY_SPAWNS);
    }

}