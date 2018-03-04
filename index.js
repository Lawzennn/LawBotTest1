const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("/");

  bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '/help ByLawzenn ©', type: 0} });
    console.log("Je suis connecté !");
});


bot.login(process.env.BOT_TOKEN);
