const Discord = require('discord.js');
const config = require('./config');
var bot = new Discord.Client();
console.log(process.argv);
if(process.argv === "dev"){
    bot.login(config.tokenDev);
}else{
    bot.login(config.token);
}

const sharder = new Discord.ShardingManager(`./bot.js`);

sharder.on('launch', shard => console.log(`launched ${shard.id}`));

sharder.spawn(1);
