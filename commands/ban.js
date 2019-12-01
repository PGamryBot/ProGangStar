const Discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(botconfig.prefix)) return;
  let bUser = message.guild.member(message.mentions.users.first());
  if(!bUser) return message.channel.send("Kan deze gebruiker niet vinden! Kijk als je de naam goed heb gespeld");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("sorry je hebt geen permissies!");
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Deze persoon kan niet gebanned worden!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("Ban")
  .setAuthor(message.author.username)
  .setColor("#3175e2")
  .setFooter("gepowered door ProGamerNL180")
  .addField("Verbannen gebruiker:", `${bUser} met id: ${bUser.id}`)
  .addField("Verbannen door:", `<@${message.author.id}> met id: ${message.author.id}`)
  .addField("Verbannen in:", message.channel)
  .addField("Tijd", message.createdAt)
  .addField("Reden", bReason);

  let incidentChannel = message.guild.channels.find(`name`, "bans");
  if(!incidentChannel) return message.channel.send("Kan de channel kick-ban niet vinden!");

  message.guild.member(bUser).ban(bReason);
  incidentChannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
