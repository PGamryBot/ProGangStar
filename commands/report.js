const Discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(botconfig.prefix)) return;
  let rUser = message.guild.member(message.mentions.users.first());
  if(!rUser) return message.channel.send("Kan de gebruiker niet vinden!");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("PGarmy-Report")
  .setAuthor(message.author.username)
  .setColor("#3175e2")
  .setFooter("Gepowered door ProGamerNL180")
  .addField("Gerapporteerde gebruiker:", `${rUser} met id: ${rUser.id}`)
  .addField("Gerapporteerd door:", `${message.author} met id: ${message.author.id}`)
  .addField("Gerapporteerd in:", message.channel)
  .addField("Tijd:", message.createdAt)
  .addField("Reden:", reason);

  let reportchannel = message.guild.channels.find(`name`, "reportcounter");
  if(!reportchannel) return message.channel.send("Kan de channel reports niet vinden!");

    message.delete().catch(O_o=>{});
    reportchannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
