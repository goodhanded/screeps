var recruiter = require('recruiter');
var general = require('general');
var dustman = require('dustman');

module.exports.loop = function () {
    dustman.clearMemory();
    recruiter.recruit();
    general.giveOrders();
}