const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(botconfig.prefix)) return;

  const categoryID = "565568236117032960";

  var username = message.author.username;
  var userDiscriminator = message.author.discriminator;

  var bool = false;

  message.guild.channels.forEach((channel) => {

      if(channel.name === username.toLowerCase() + "-" + userDiscriminator){

        message.channel.send("Je hebt al een support-ticket aangemaakt!");

        bool = true;

      }

  });

  if(bool === true) return;

  var embedTicket = new Discord.RichEmbed()
  .setTitle("Hallo," + " " + message.author.username)
  .setColor("#3175e2")
  .setDescription("Je support-kanaal wordt aangemaakt!");

  message.channel.send(embedTicket);

  message.guild.createChannel(username + "-" + userDiscriminator, "text").then((createdChannel) => {

    createdChannel.setParent(categoryID).then((settedParent) => {

      settedParent.overwritePermissions(message.guild.roles.find(`name`, "@everyone"), {"READ_MESSAGES":false });

      settedParent.overwritePermissions(message.author, {

        "READ_MESSAGES": true, "SEND_MESSAGES": true,
        "ATTACH_FILES": true, "CONNECT": true,
        "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

      });

      var embedParent = new Discord.RichEmbed()
      .setTitle("Hallo," + " " + message.author.username)
      .setDescription("Je ticket is aangemaakt, leg je probleem goed uit!");

      settedParent.send(embedParent)

    });

  });
}

module.exports.help = {
  name: "ticket"
}