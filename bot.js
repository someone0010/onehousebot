
/*const bot = new cleverbot("XW3IW0hyIa0lVkyW", "ZbLDR8jvOD3OhP6GrDBv0xn9k8aoZp80");
bot.setNick("discord-catdroid")*/
const Discord = require("discord.js");
const req = require("request");
const client = new Discord.Client();
var prfx = "!-"
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

       case "showrule-thepassis481052?ver=en":
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
        case "showrule-thepassis481052?roles=y":
            message.guild.roles.forEach(function(Role) {
            Role.setMentionable(true)
          })
        var embed = {
      "title": "Roles",
  "description": "All the roles of the server",
  "color": 10551551,
  "fields": [
    {
      "name": "```--------------------- Main Roles ---------------------```",
      "value": "are:"
    },
    {
      "name": "Member",
      "value": "Self explanatory.",
      "inline": true
    },
    {
      "name": "Active member(+)(++)",
      "value": "Active users here.",
      "inline": true
    },
    {
      "name": "Creator",
      "value": "Have a good game.",
      "inline": true
    },
    {
      "name": "Content Creator",
      "value": "Make modd.io vids. You\nmust have >100 subs\nand post at least 2 videos\nper week.",
      "inline": true
    },
    {
      "name": "Trusted",
      "value": "Members we trust.",
      "inline": true
    },
    {
      "name": "Artist",
      "value": "Make good artworks\n(pixel arts are also good)",
      "inline": true
    },
    {
      "name": "Moderator",
      "value": "Our server mods that\nmanage the chat and all\nusers.",
      "inline": true
    },
    {
      "name": "Owner / Co-Owner",
      "value": "Developers of this server.",
      "inline": true
    },
    {
      "name": "```-------------------- Special Roles -------------------```",
      "value": "are:"
    },
    {
      "name": "Level 2/3/4/5 VIP",
      "value": "In game VIPs have it.",
      "inline": true
    },
    {
      "name": "VIP begger",
      "value": "You get it when you ask\nfor VIP...",
      "inline": true
    },
    {
      "name": "Top 1 Active Member",
      "value": "Member that is #1 on\nMEE6 leaderboard",
      "inline": true
    },
    {
      "name": "Modd.io Creator",
      "value": "Members that has\nCreator role in official\nModd.io discord server.",
      "inline": true
    },
    {
      "name": "Modd.io Moderator",
      "value": "Members that has\nMod role in official\nModd.io discord server.",
      "inline": true
    },
    {
      "name": "Modd.io Admin",
      "value": "Members that has\nAdmin role in official\nModd.io discord server.",
      "inline": true
    },
    {
      "name": "Modd.io Developer",
      "value": "Members that have\nDev role in official\nModd.io discord server.",
      "inline": true
    },
    {
      "name": "More coming soon...",
      "value": "<:happy_pepe:498060038175326218>",
      "inline": true
    }
  ]
};
message.channel.send({ embed });
            message.guild.roles.forEach(function(Role) {
            Role.setMentionable(false)
          })
          break;
        /*case "find5vids":
          var response = ytsearch(message.content.slice(11));

          message.channel.send("Found some!\n`1` " + response[0][1].title + "\n`2` " + response[1][1].title + "\n`3` " + response[2][1].title + "\n`4` " + response[3][1].title + "\n`5` " + response[4][1].title)
          break;*/
    }
});
client.on("messageReactionAdd", function (messageReaction, member) {
    if (member.bot) return;
        if (messageReaction.message.channel.id == "516263179446124555") {
         if (messageReaction.emoji.name == "✅") {
          if (messageReaction.count >= 10) {
            messageReaction.message.channel.send("", {embed: {
              title: "Suggestion Approved",
              description: messageReaction.message.embeds[0].title + "\n" + messageReaction.message.embeds[0].description,
              author: {
                name: messageReaction.message.embeds[0].author.name,
                icon_url: messageReaction.message.embeds[0].author.iconURL
              },
              color: 3394611,
              footer: {
                text: "Why: The message got 10 ✅ reactions."
              }
            }})
          }
          messageReaction.message.delete();
        }
        if (messageReaction.emoji.name == "516258169035554817") {
          if (messageReaction.count >= 8) {
            messageReaction.message.channel.send("", {embed: {
              title: "Suggestion sent to Staff",
              description: messageReaction.message.embeds[0].title + "\n" + messageReaction.message.embeds[0].description,
              author: {
                name: messageReaction.message.embeds[0].author.name,
                icon_url: messageReaction.message.embeds[0].author.iconURL
              },
              color: 16764006,
              footer: {
                text: "Why: The message got 8 <:neutral:516258169035554817> reactions."
              }
            }})
          }
          messageReaction.message.guild.channels.get("517331518843125760").send("", {embed: {
            title: "Suggestion to check",
            description: messageReaction.message.embeds[0].title + "\n" + messageReaction.message.embeds[0].description,
            author: {
              name: messageReaction.message.embeds[0].author.name,
              icon_url: messageReaction.message.embeds[0].author.iconURL
            },
            color: 16764006,
            footer: {
              text: "Approving/disapproving this won't change the embed in <#516263179446124555>."
            }
          }})
          messageReaction.message.delete();
        }
        if (messageReaction.emoji.name == "516258587845328906") {
          if (messageReaction.count >= 7) {
            messageReaction.message.channel.send("", {embed: {
              title: "Suggestion Rejected",
              description: messageReaction.message.embeds[0].title + "\n" + messageReaction.message.embeds[0].description,
              author: {
                name: messageReaction.message.embeds[0].author.name,
                icon_url: messageReaction.message.embeds[0].author.iconURL
              },
              color: 16724736,
              footer: {
                text: "Why: The message got 7 <:bad:516258587845328906> reactions."
              }
            }})
          }
        }
        if (messageReaction.emoji.name == "☑") {
          var staffMemberReacted = false;
          messageReaction.message.guild.members.forEach(function(GuildMember) {
            if (messageReaction.users.keyArray().includes(GuildMember.user) && (GuildMember.roles.has("501752627709870080") || GuildMember.roles.has("493436150019784704"))) {
              staffMemberReacted = true;
            }
          })
            console.log("reached manapprove")
          if (staffMemberReacted) {
            messageReaction.message.channel.send("", {embed: {
              title: "Suggestion Approved",
              description: messageReaction.message.embeds[0].title + "\n" + messageReaction.message.embeds[0].description,
              author: {
                name: messageReaction.message.embeds[0].author.name,
                icon_url: messageReaction.message.embeds[0].author.iconURL
              },
              color: 3394611,
              footer: {
                text: "Why: A owner or co-owner manually approved it."
              }
            }})
            messageReaction.message.delete();
          }
        }
        if (messageReaction.emoji.name == "517327626373824522") {
          var staffMemberReacted = false;
          messageReaction.message.guild.members.forEach(function(GuildMember) {
            if (messageReaction.users.keyArray().includes(GuildMember.user) && (GuildMember.id || GuildMember.roles.find)) {
              staffMemberReacted = true;
            }
          })

          if (staffMemberReacted) {
            messageReaction.message.channel.send("", {embed: {
              title: "Suggestion Rejected",
              description: messageReaction.message.embeds[0].title + "\n" + messageReaction.message.embeds[0].description,
              author: {
                name: messageReaction.message.embeds[0].author.name,
                icon_url: messageReaction.message.embeds[0].author.iconURL
              },
              color: 16724736,
              footer: {
                text: "Why: A owner or co-owner manually rejected it."
              }
            }})
            messageReaction.message.delete();
          }
        }
      }

      
    
    
    
    console.log("setted 2")
    if (messageReaction.message == vmsg) {
        console.log("setted 3")
        messageReaction.message.guild.members.get(member.id.toString()).addRole("493432953909542912", "Reacted!")
    }
})
client.login(process.env.LOGIN)
