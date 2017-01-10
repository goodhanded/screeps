var roles = require('roles');

module.exports = {
    
    canSeeRole: function(role, expectedQuantity = 1) {
        
        var foundInRole = _.filter(Game.creeps, function(creep) {
            return creep.memory.role == role.name;
        }).length;
        
        return (foundInRole >= expectedQuantity);
        
    }
    
}