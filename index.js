const Discord = require('discord.js');


bot.login(process.env.BOT_TOKEN);

var bot = new Discord.Client();
var prefix = ("/");

  bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'LawBot (BETA)', type: 1} });
    console.log("Je suis connecté !");
});



