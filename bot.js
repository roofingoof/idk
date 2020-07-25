const Discord = require('discord.js');
const bot = new Discord.Client();

bot.once("ready", () => {
    console.log("started");
});


bot.on("message", message => {
    if(message.author.id == "268402596312645633 "){
        message.react("736209309498736681");
    }
});



bot.login();
