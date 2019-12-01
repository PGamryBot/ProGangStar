const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryID = "565568236117032960";

    if(message.channel.parentID === categoryID){

      message.channel.delete();

    }else{

      message.channel.send("Gelieve dit commando in een ticket kanaal te grebruiken");

    }

}

module.exports.help = {
  name: "sluit"
}