const Discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(botconfig.prefix)) return;
  let bicon = bot.user.displayAvatarURL;
  let webshopembed = new Discord.RichEmbed()
  .setDescription("PGarmy website")
  .setAuthor(message.author.username)
  .setColor("#3175e2")
  .setThumbnail(bicon)
  .setFooter("gepowered door ProGamerNL180")
  .setTimestamp()
  .addField("Website", "www.pgarmy.nl");

  message.channel.send(webshopembed)

}

module.exports.help = {
  name: "website"
}