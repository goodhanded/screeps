module.exports = {
    
    clearMemory: function () {
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                console.log('Clearing non-existing creep memory:', name);
                delete Memory.creeps[name];
            }
        }
    }
    
};