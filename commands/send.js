module.exports = {
    name: 'send',
    description: 'Get pending balance',
    args: true,
    execute(message, args) {
        //delete the message
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        console.log(args);
        const {burst_key} = require('../config');
        var request = require('request');
        let miner = message.guild.roles.find("name", "Helpful miner");
        if(message.member.roles.has(miner)) {
            var Url = `http://localhost:8125/burst?requestType=sendMoney&secretPhrase=${burst_key}&recipient=${args[0]}&amountNQT=100000000&feeNQT=100000000&deadline=60`
            request({
             url:Url,
             method:"POST",
             json:true},function(error,response,body){
                     console.log(body)
                     message.reply(`Sent 1 BURST to ${args[1]}! Please allow up to 10 mins for it to apper before trying again!`)
                     if (args[2] == "output"){
                         message.reply(body);
                     }
               }
            );
        } else {
        console.log(`Nope, noppers, nadda.`);
        message.reply('Nope, noppers, nadda.');
        }
    }
};