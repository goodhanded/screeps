var scout = require('scout');
var roles = require('roles');

module.exports = {
    recruit : function() {
        if (!scout.canSeeRole(roles.upgrader, 1)) {
            roles.upgrader.create();
        }
        if (!scout.canSeeRole(roles.harvester, 5)) {
            roles.harvester.create();
        }
    }
}