const Discord = require("discord.js");
const client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'LawBot(BETA)', type: 0} });
    console.log("Je suis connecté !");
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
