
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
            var role = guild.roles.get("501752627709870080");
            var role2 = guild.roles.get("493436150019784704");
        guild.channels.get("510904449913323520").send("Rainbow color roles have been enabled.");
            setInterval(()=>{
                role.setColor([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)])
                setTimeout(()=>{
                  role2.setColor([Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)])
                }, 7500)
                if (client.ping >= 12000) {
                    guild.channels.get("510904449913323520").send("High latency detected. Rainbow color feature has been shut down to prevent bot crash/server outage.");
                    triggered = false;
                }
            }, 15000)
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
    console.log("setted 2")
    if (messageReaction.message == vmsg) {
        console.log("setted 3")
        messageReaction.message.guild.members.get(member.id.toString()).addRole("493432953909542912", "Reacted!")
    }
})
client.login(process.env.LOGIN)
