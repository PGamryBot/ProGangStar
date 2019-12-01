const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempban <gebruiker> <tijd> <reden>

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("sorry je hebt geen permissies!")

  var user = message.guild.member(message.mentions.users.first());

  if(!user) return message.channel.send("kan deze gebruiker niet vinden, kijk of je hem goed hebt gespeld!");

  if(user.hasPermission("BAN_MEMBERS")) return message.channel.send("deze gebruiker kan je niet tempbannen!");

  var tempBanTime = args[1];

  var reason = args.join(" ").slice(22);

  if(!reason) return message.channel.send("Je moet een reden opgeven!");

  if(ms(tempBanTime)){

   await message.guild.member(user).ban(reason);

   message.channel.send(`${user} is verbannen voor ${reason}`);

   setTimeout(function(){

     message.guild.unban(user.id);

     message.channel.send(`${user} is geunbanned`);

   }, ms(tempBanTime));

 }else{
    return message.channel.send("Je moet een geldige reden opgeven!");
  }

}

module.exports.help = {
  name: "tempban"
}
