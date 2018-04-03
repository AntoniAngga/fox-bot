var debug = require('debug')('botkit:channel_join');

module.exports = function(controller) {

    controller.on('bot_channel_join', function(bot, message) {
        bot.say("Hello, Mr Fox is Alive !");
        bot.say("Ask Me Anything !");
    });

    controller.on('channel_leave', function (bot, message) {
        bot.say("Byeee, :( :(");
    })

}
