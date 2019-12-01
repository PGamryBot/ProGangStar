const Discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(botconfig.prefix)) return;
  let kUser = message.guild.member(message.mentions.users.first());
  if(!kUser) return message.channel.send("Kan deze gebruiker niet vinden! Kijk als je de naam goed heb gespeld");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("sorry je hebt geen permissies!");
  if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Deze persoon kan niet gekicked worden!");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setAuthor(message.author.username)
  .setColor("#3175e2")
  .setFooter("gepowered door ProGamerNL180")
  .addField("Gekickede gebruiker:", `${kUser} met id: ${kUser.id}`)
  .addField("Gekicked door:", `<@${message.author.id}> met id: ${message.author.id}`)
  .addField("Gekicked in:", message.channel)
  .addField("Tijd", message.createdAt)
  .addField("Reden", kReason);

  let kickChannel = message.guild.channels.find(`name`, "warncounter");
  if(!kickChannel) return message.channel.send("Kan de channel kick-ban niet vinden!");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
