var roles = require('roles');

module.exports = {
    giveOrders: function() {
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            roles[creep.memory.role].run(creep);
        }
    }
}