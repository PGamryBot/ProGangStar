const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(botconfig.prefix)) return;
  let bicon = bot.user.displayAvatarURL;
  let ipembed = new Discord.RichEmbed()
  .setColor("#3175e2")
  .setThumbnail(bicon)
  .setTimestamp()
  .addField("Minecraft server-ip", "PGserver.chplay.nl");

  message.channel.send(ipembed);
}

module.exports.help = {
  name: "ip"
}