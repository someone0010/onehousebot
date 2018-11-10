
/*const bot = new cleverbot("XW3IW0hyIa0lVkyW", "ZbLDR8jvOD3OhP6GrDBv0xn9k8aoZp80");
bot.setNick("discord-catdroid")*/
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
var prfx = "!-"
var vmsg;
function setvermessage(msg) {
    vmsg = msg;
}
var triggered = false;
client.on("message", function(message) {
    client.syncGuilds(message.guild)
    if (message.author.bot) {
        return;
    }
    if (triggered) {
      triggered = true;
      var guild = message.guild;
            var role = guild.roles.get("501752627709870080");
            var role2 = guild.roles.get("493436150019784704");
            setInterval(()=>{
              role.setColor([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)])
              role2.setColor([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)])
            }, 8000)
    }
    
   /* if (message.content.startsWith("<@508255194975305728> ")) {
        message.channel.startTyping(); 
        bot.create(function (err, session) {
            console.log("reached 0")
            bot.ask(message.content.replace("<@508255194975305728> ", ""), function (err, response) {
                console.log("reached 1")
                message.channel.stopTyping();
                message.channel.send(response);
            });
        })
    }*/
    
    if (message.channel == message.guild.channels.get("493446448910958616")) {
        if (message.content == "-role verify" || message.content.startsWith("?")) return;
        message.delete();
        var vermessage = message.channel.send("Hello <@" + message.author.id + ">!\nTo simply start off and get access to channels, type `-role verify`, or react to this message!")
        vermessage.then((message)=>{
            var rlvermessage = message
            setvermessage(rlvermessage);
        });
        console.log("setted")
    }
    var cmd = message.content.slice(prfx.length);
    var args = message.content.slice(2).split("  /  ")

    switch (args[0]) {
        /*case "showrule-thepassis481052?ver=en":
        var embed = {
            "title": "One House Rules",
            "description": "Read all these rules before typing anything in <#493446448910958616>.",
            "color": 1807894,
            "timestamp": "2018-11-10T08:42:56.334Z",
            "fields": [
              {
                "name": "1. No spamming",
                "value": "Spamming will result in a mute.",
                "inline": true
              },
              {
                "name": "2. No swearing/crude language",
                "value": "Swearing results in long mutes.     ",
                "inline": true
              },
              {
                "name": "3. No advertising",
                "value": "Advertising results in a softban/ban.",
                "inline": true
              },
              {
                "name": "4. No raiding/botting",
                "value": "Raiding and/or botting results in a ban.",
                "inline": true
              },
              {
                "name": "5. No asking for VIP",
                "value": "This will result in a kick, then ban.",
                "inline": true
              },
              {
                "name": "6. Do not abuse VIP",
                "value": "Results in a kick, then vip removal.  ",
                "inline": true
              },
              {
                "name": "7. No punishment evasion",
                "value": "Punishment evasion will result in a ban.",
                "inline": true
              },
              {
                "name": "8. No flaming",
                "value": "Flaming results in a mute, kick then ban.  ",
                "inline": true
              },
              {
                "name": "9. No minimodding",
                "value": "You can provide accurate info, but\nminimodding results in a warn.",
                "inline": true
              },
              {
                "name": "10. No NSFW in main channels",
                "value": "NSFW in main channels result in a   \nlong mute, then ban.                             ",
                "inline": true
              },
              {
                "name": "11. No excessive trolling",
                "value": "There is a border between jokes\nand trolling, big trolls are not\nallowed.                                                  ",
                "inline": true
              }
            ]
          };
          message.channel.send({ embed });
            break;
        case "showrule-thepassis481052?ver=ru":
        var embed = {
            "title": "One House Правила",
            "description": "Прочтите все эти правила прежде чем напите в <#493446448910958616>.",
            "color": 253123,
            "timestamp": "2018-11-10T08:42:56.334Z",
            "fields": [
              {
                "name": "1. Не спамить",
                "value": "Вы можете быть заглушшеным \nза спам.",
                "inline": true
              },
              {
                "name": "2. Не материться",
                "value": "Вы можете быть долго заглушенны\nза маты в сообщениях.     ",
                "inline": true
              },
              {
                "name": "3. Никакой рекламы",
                "value": "За рекламу вы можете быть\nзабанены.",
                "inline": true
              },
              {
                "name": "4. Не рейдить",
                "value": "Если вы попробуйте зарейдить\nнас, мы также забаним вас.",
                "inline": true
              },
              {
                "name": "5. Не просить VIP",
                "value": "Вас могут кикнуть или забанить за \nэто.",
                "inline": true
              },
              {
                "name": "6. Не злоупотреблять VIP",
                "value": "Вы можете быть кикнуты, а потом \nснимем VIP.                                                 ",
                "inline": true
              },
              {
                "name": "7. Не избегать наказание",
                "value": "Воизбежание наказания вы можете\nбыть забанены.",
                "inline": true
              },
              {
                "name": "8. Уважать всех",
                "value": "За неуважение можете был \nзаглушены кикнуты а потом \nзабанены.                                                      ",
                "inline": true
              },
              {
                "name": "9. Не надо мини-моддить",
                "value": "Вы можете обозначить точную\nинформацию, но мини-мод вас\nприведёт в предупреждению.",
                "inline": true
              },
              {
                "name": "10. Никакого Отвратительного контента",
                "value": "Отвратительный контент в\n основных каналах приведёт \nвас к длительному заглушению, и бан.",
                "inline": true
              },
              {
                "name": "11. Не троллить всех часто.",
                "value": "Здесь барьер около шуток\nи троллинга, большие троллинги не \nразрешены.                                                  ",
                "inline": true
              }
            ]
          };
          message.channel.send({ embed });
          break;*/
    }
});
client.on("messageReactionAdd", function (messageReaction, member) {
    console.log("setted 2")
    if (messageReaction.message == vmsg) {
        console.log("setted 3")
        messageReaction.message.guild.members.get(member.id.toString()).addRole("493432953909542912", "Reacted!")
    }
})
client.login(process.env.LOGIN)
