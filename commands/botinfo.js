const Discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(botconfig.prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Informatie")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("naam bot", bot.user.username)
    .addField("servers", 2)
    .addField("members", 59)
    .addField("Leden", 46)
    .addField("gemaakt op", bot.user.createdAt);


    return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
