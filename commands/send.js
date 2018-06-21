module.exports = {
    name: 'send',
    description: 'send 1 burst to address',
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
        if(message.member.roles.some(r=>["Helpful miner"].includes(r.name))) {
            var Url = `https://burst-wallet.daprogs.com/burst?requestType=sendMoney&secretPhrase=${burst_key}&recipient=${args[0]}&amountNQT=20000000&feeNQT=2500000&deadline=60`
            request({
             url:Url,
             method:"POST",
             json:true},function(error,response,body){
                     console.log(body)
                     var getJSON = require('get-json')
                     getJSON('https://explore.burst.cryptoguru.org/api/v1/account/11304873521866505399', function(error, response){
                        var bal = response.data.balance -1 / 100000000
                        console.log(bal)
                        message.reply(`Sent .2 BURST to ${args[0]}! Please allow up to 10 mins for it to apper before trying again! New facuet bal ${bal}`);
                    })
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