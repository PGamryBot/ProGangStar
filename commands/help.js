const Discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(botconfig.prefix)) return;
  let bicon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setDescription("PGarmy - commando's")
  .setColor("#3175e2")
  .setThumbnail(bicon)
  .addField("**!ip**", "Laat je ons server-ip zien")
  .addField("**!serverinfo**", "Laat je de informatie van onze discord server zien!")
  .addField("**!botinfo**", "laat je de informatie van de bot zien!")
  .addField("**!report**", "!report <gebruiker> <reden>")
  .addField("**!nieuw**", "maakt een ticket voor je aan **BETA**!" );

  let hEmbed = new Discord.RichEmbed()
  .setDescription("Staff - commando's")
  .setColor("#3175e2")
  .setFooter("Gepowered door ProGamerNL180")
  .setTimestamp()
  .addField("**!ban**", "!ban <gebruiker> <reden>")
  .addField("**!kick**", "!kick <gebruiker> <reden>")
  .addField("**!tempmute**", "!tempmute <gebruiker> <tijd>")
  .addField("**!tempban**", "!tempban <gebruiker> <tijd> <reden>");

  message.channel.send(helpembed)
  message.channel.send(hEmbed)
}

module.exports.help = {
  name: "help"
}
