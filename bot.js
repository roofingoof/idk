const Discord = require('discord.js');
const bot = new Discord.Client();


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
    if(message.author.id == "268402596312645633"){
        if(randomize()){
            message.delete();
        }
        message.react("736209309498736681");
    }
});


bot.on("voiceStateUpdate", (oldMember,newMember) =>{
    let newUserChannel = newMember.channel
    let oldUserChannel = oldMember.channel
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
        // user joins channel
        if(newMember.member.id == "268402596312645633"){
            if(randomize()){
                newMember.kick();
            }
        }
    }
});



bot.login(process.env.token);
