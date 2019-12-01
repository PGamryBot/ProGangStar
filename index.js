//discord bot needs:
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

//commandhandler
fs.readdir("./commands", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js" )
  if(jsfile.length <= 0){
    console.log("Couldn't load commands");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} is geladen`);
    bot.commands.set(props.help.name, props);
  });

  bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "SPELER");
    if(!role) return;
    member.addRole(role);
    const channel  = member.guild.channels.find("name", "👋welkom")
    if(!channel) return;
    channel.send(`Welkom op de **PGarmy** discord server ${member}
Minecraft server ip PGserver.chplay.nl  versie 1.9 t/m 1.13
invite je vrienden, 15 invites is inviter rank!`);

  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("!help | PGarmy.nl");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;0

  var prefix = prefixes[message.guild.id].prefixes;
  var messageArray = message.content.split(" ");
  var command = messageArray[0];
  var arguments = messageArray.slice(1);
  var commands = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

//bot login
bot.login(process.env.token);
