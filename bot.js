const Discord = require('discord.js');
const bot = new Discord.Client();

const target = "268402596312645633"

function randomize(percentage){
    var number = Math.floor(Math.random() * 101);
    if(percentage >= number){
        return true;
    }
}

bot.once("ready", () => {
    console.log("started");
});

 
bot.on("message", message => {
    if(message.author.id == target){
        if(randomize(20)){
            message.delete();
            return;
        }
        message.react("736209309498736681");
        return;
    }
});


bot.on("voiceStateUpdate", (oldMember,newMember) =>{

    let newUserChannel = newMember.channel
    let oldUserChannel = oldMember.channel

    if(oldUserChannel == undefined && newUserChannel !== undefined){
        if(newMember.member.id == target){
            if(randomize(10)){
                newMember.kick();
                return;
            }else if(randomize(15)){
                newMember.setMute(true);
                setTimeout(function(){
                    newMember.setMute(false);
                },5000);
            }else if(randomize(18)){
                newMember.setDeaf(true);
                setTimeout(function(){
                    newMember.setDeaf(false);
                },5000);
            }else if(randomize(20)){
                var vc = newMember.guild.channels.cache.find(channel => channel.name === "Retarded Normies");
                newMember.setChannel(vc);
            }
            
            

        }
    }
});


bot.login(process.env.token);
