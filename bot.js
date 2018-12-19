const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("524326948906991639")
setInterval(function() {
channel.send(`elcaptinkeemmoheeeeeerrryawladel27ba+kosomvenoom`);
}, 30)
})

client.login(process.env.BOT_TOKEN);