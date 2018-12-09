
/*const bot = new cleverbot("XW3IW0hyIa0lVkyW", "ZbLDR8jvOD3OhP6GrDBv0xn9k8aoZp80");
bot.setNick("discord-catdroid")*/
const Discord = require("discord.js");
const req = require("request");
const client = new Discord.Client();
var prfx = "!!"
var vmsg;
function setvermessage(msg) {
    vmsg = msg;
}
function ytsearch(str) {
  req("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=" + encodeURIComponent(str) + "&key=AIzaSyDMQ4fRUWfZIfc-flzqTIIHsPgTNT2FbRs", null, function(error, response) {
    var json = JSON.parse(response);

    return [[ json.items[0].id.videoId, json.items[0].snippet  ], [ json.items[1].id.videoId, json.items[1].snippet ] , [ json.items[2].id.videoId, json.items[2].snippet ], [ json.items[3].id.videoId, json.items[3].snippet ], [ json.items[4].id.videoId, json.items[4].snippet ]]
  })
}
var someoneAsciiFaces = ["( ͡° ͜ʖ ͡°)", "¯\_(ツ)_/¯", "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)", "(ノಠ益ಠ)ノ彡┻━┻", "(╯°□°）╯︵ ┻━┻", "┬──┬ ノ( ゜-゜ノ)"]

var avgMsAdded = 0;
var avgMsCalc = 0;
var avgMs = 0;
function updateAvgMs(ms) {
  avgMsAdded = avgMsAdded + 1;
  avgMsCalc = avgMsCalc + ms;
  avgMs = Math.floor(avgMsCalc / avgMsAdded);
}

setInterval(()=>{
  updateAvgMs(client.ping);
  client.user.setActivity("Ping: " + Math.floor(client.ping) + "ms | Avg: " + avgMs + "ms")
}, 4500)
var triggered = false;
client.on("message", function(message) {
    client.syncGuilds(message.guild)
    if (message.author.bot) {
        return;
    }

    if (triggered == false && client.ping <= 7000) {
      triggered = true;
        
      var guild = message.guild;
            setInterval(()=>{
                var humanMembers = 0;
                guild.members.forEach(function(GuildMember) {
                  if (!GuildMember.user.bot) {
                    humanMembers = humanMembers + 1;
                  }
                })
                guild.channels.get("512683276918325248").setName("Member Count: " + humanMembers);
            }, 15000)
    }
    
    if (message.content.startsWith("@someone")) {
        var rand = someoneAsciiFaces[Math.floor(Math.random() * someoneAsciiFaces.length)];
        message.channel.send(rand + " .... I choosed " + message.guild.members.random().user.username);
    }
        if (message.channel.id == "516263179446124555") {
      
      message.channel.send("Reading JSON..").then((msg) => {
        msg.delete(2100);
      })
      try {
        var json = JSON.parse(message.content);
        message.channel.send("Read successful.").then((msg) => {
          msg.delete(2000);
        })
        message.channel.send("", {embed: {
          title: json.name,
          description: json.description,
          author: {
            name: message.author.username,
            icon_url: message.author.avatarURL
          },
          footer: {
            text: "Reason why this idea: " + json.why
          }
        }}).then((msg) => {
           msg.react("✅");
          msg.react("516258169035554817");
          msg.react("516258587845328906");
        })
        
      } catch {
         message.channel.send("JSON read error. Check your JSON!").then((msg) => {
           msg.delete(7000);
         })
        
      }
      message.delete();
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
    
    if (message.channel == message.guild.channels.get("510904818228002827")) {
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
        case "ghost/coldpev":
            message.channel.send("@everyone").then((message) => {
                message.delete();
            })
            message.delete();
            break;
                    case "cod3breaker":
    a = 0;
                b = 0;
                c = 0;
                d = 0;
                e = 0;
                f = 0;

            a = Math.floor(Math.random() * 30);
            b = Math.floor(Math.random() * 30) + 31;
            c = Math.floor(Math.random() * 30) + 62;
            d = Math.floor(Math.random() * 30) + 93;
            e = Math.floor(Math.random() * 30) + 124;
            f = Math.floor(Math.random() * 30) + 155;

            message.channel.send("Numbers are:\n**" + a + ", " + b + ", " + c + ", " + d + ", " + e + ", " + f + "**\nYou have 2 minutes to solve this. ");
            var msg = message;
            const filter = msg => msg.author.id.includes(message.author.id)
            message.channel.awaitMessages(filter, { time: 100000, errors: ['time'] })
                .then(function (message) {
                    if (message.content.includes((b - a).toString() + (c - b).toString() + (d - c).toString() + (e - d).toString() + (f - e).toString())) {
                        message.channel.send("You found the RIGHT code!")
                        if (!message.member.roles.has("518779140732878849")) {
                            message.member.addRole("518779140732878849")
                        } 
                    } else {
                        message,channel.send("That's the wrong code!")
                    }
                })
                .catch(collected => message.channel.send("Breaking code time is up!"))
            break;


            case "addEmoteRestriction":

            if (!message.member.roles.has("517341315155886082")) {
                message.reply("No permissions (1): role Superuser not found");
                return;
            }
            try {
                message.guild.emojis.find("name", args[1].replace(" ", "")).addRestrictedRole(message.guild.roles.find("name", args[2].replace(" ", "")))
                                message.channel.send("Emoji successfully restricted!")
            } catch(err) {
                message.channel.send("An error occured while adding role restriction.\n```js\n" + err + "\n```")
            }
            break;
        }
});
client.on("messageReactionAdd", function (messageReaction, member) {
    console.log(messageReaction.emoji.name);
    if (messageReaction.emoji.name == "☑") {
                var ok = false;
        messageReaction.users.forEach(function(User) {
            if (User.id == "408924581802541076" || User.id == "372737442840707072") {
                ok = true;
            }
        })
        if (!ok) return;
        messageReaction.message.channel.send("", {
            embed: {
                title: "Suggestion Approved",
                description: messageReaction.message.embeds[0].title + "\n" + messageReaction.message.embeds[0].description,
                author: {
                    name: messageReaction.message.embeds[0].author.name,
                    icon_url: messageReaction.message.embeds[0].author.iconURL
                },
                color: 3394611
            }
        })

        messageReaction.message.delete();
    }
    if (messageReaction.emoji.name == "suggestionRejected") {

        messageReaction.message.channel.send("", {
            embed: {
                title: "Suggestion Rejected",
                description: messageReaction.message.embeds[0].title + "\n" + messageReaction.message.embeds[0].description,
                author: {
                    name: messageReaction.message.embeds[0].author.name,
                    icon_url: messageReaction.message.embeds[0].author.iconURL
                },
                color: 16724736
            }
        })
    }

    if (messageReaction.message == vmsg) {
        messageReaction.message.guild.members.get(member.id.toString()).addRole("493432953909542912", "Reacted!")
    }
})
var devlogchannel = null;

client.on("ready", function() {
    devlogchannel = client.guilds.get("493432486148177923").channels.get("520952642608824349");
    devlogchannel.send("", {embed: {
        title: "Event Emit",
        description: "ready"
    }})
    client.guilds.get("493432486148177923").channels.get("516263179446124555").fetchMessages()
})
client.on("warn", (e)=> {
    devlogchannel.send("", {embed: {
        title: "Event Emit",
        description: "warn\n```\n" + e + "\n```"
    }})
})
client.on("error", (e)=> {
    devlogchannel.send("", {embed: {
        title: "Event Emit",
        description: "error\n```\n" + e + "\n```"
    }})
})
client.on("channelCreate", (e) => {
    devlogchannel.send("", {embed: {
        title: "Event Emit",
        description: "channelCreate\n```\n" + e + "\n```"
    }})
})
client.on("channelDelete", (e)=> {
    devlogchannel.send("", {embed: {
        title: "Event Emit",
        description: "channelDelete\n```\n" + e + "\n```"
    }})
})

client.login(process.env.LOGIN)
