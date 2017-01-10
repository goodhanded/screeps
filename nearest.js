module.exports = {
    
    source: function(creep) {
        return creep.pos.findClosestByRange(FIND_SOURCES);
    },
    
    spawn: function(creep) {
        return creep.pos.findClosestByRange(FIND_MY_SPAWNS);
    }

}