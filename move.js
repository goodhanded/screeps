
module.exports = function (creep) {
    return {
        to: function (target) {
            creep.moveTo(target);
        }
    }
}

/** @param {Creep} creep **/
function dodge(creep) {
    var direction = _.random(1, 8);
    creep.move(direction);
}

/** @param {Creep} creep **/
function getCurrentPosition(creep) {
    return new RoomPosition(creep.pos.x, creep.pos.y, creep.room.name);
}