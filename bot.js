const Discord = require('discord.js');
const bot = new Discord.Client();

const target = "268402596312645633"

function randomize(){
    var number = Math.floor(Math.random() * 11);
    if(number >5){
        return true;
    }
}

bot.once("ready", () => {
    console.log("started");
});

 
bot.on("message", message => {
    if(message.author.id == target){
        if(randomize()){
            message.delete();
        }
        message.react("736209309498736681");
    }
});


bot.on("voiceStateUpdate", (oldMember,newMember) =>{

    let newUserChannel = newMember.channel
    let oldUserChannel = oldMember.channel

    if(oldUserChannel == undefined && newUserChannel !== undefined){
        if(newMember.member.id == target){
            if(randomize()){
                newMember.kick();
            }
        }
    }
});



bot.login("NzM2MTk4MjQ3NDI0NTg5ODU2.XxrUDA.W8kDWn6eKVlxQW-3wdDqT3g2uyw");
