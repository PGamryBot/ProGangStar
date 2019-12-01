const Discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(botconfig.prefix)) return;
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Discord Server Informatie")
  .setAuthor(message.author.username)
  .setColor("#3175e2")
  .setThumbnail(sicon)
  .setFooter("gepowered door ProGamerNL180")
  .setTimestamp()
  .addField("Server naam", message.guild.name)
  .addField("Discord Server gemaakt op", message.guild.createdAt)
  .addField("Je bent gejoined", message.member.joinedAt)
  .addField("Totaal aantal gebruikers", message.guild.memberCount);

   message.channel.send(serverembed)
}

module.exports.help = {
  name: "serverinfo"
}