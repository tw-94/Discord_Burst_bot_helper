module.exports = {
    name: 'getblock',
    description: '',
    execute(message, args) {
        //delete the message
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        //Variable for last block
        var lastheight = 0;
        setInterval(function(){
        //Variable for accountName
        var accountName = "";
        //Variable for String Builder -> Forged by
        var generatorText = "";
        //Boolean for checking if block found
        var found = false;
        //Variable RS Format
        var reedSolomon = "";
        //Module for Json Wrapper
        var getJSON = require('get-json');
        //Module converting numeeric to Reed-Solomon Format
        var nxtjs = require('nxtjs');
        //Module Momment of utc convertging
        var moment = require('moment');
          //Return Json Object
          getJSON('https://explore.burst.cryptoguru.org/api/v1/last_blocks', function(error, response){
            //Iter. backwards, catching blocks
            for(var i = 99; i > 3; i--) {

              if(response.data.blocks[i].reward_recipient_id == 8801781361909135356 && response.data.blocks[i].height > lastheight ) {
                found = true;
                lastheight = response.data.blocks[i].height;
                reedSolomon = nxtjs.rsConvert(response.data.blocks[i].generator_id);
                if (response.data.blocks[i].generator_name != undefined){
                  accountName = response.data.blocks[i].generator_name;
                  var reedSolomon = reedSolomon.accountRS;
                  reedSolomon = reedSolomon.replace("NXT-", "BURST-");
                  generatorText = reedSolomon + " [" + accountName + "]";
                } else {
                  var reedSolomon = reedSolomon.accountRS;
                  reedSolomon = reedSolomon.replace("NXT-", "BURST-");
                  accountName = "-";
                  generatorText = reedSolomon + " [" + accountName + "]";
                }
                //Block #n
                var a = moment(response.data.blocks[i].created);
                //Block #n+1 -> backwards
                var b = moment(response.data.blocks[i-1].created);
                //Block difference
                var diff = b.diff(a, "minutes");
                //Formatting Genertor String
                if(diff < 1) {
                  diff = "0 min " + b.diff(a, "seconds") + " sec ";
                } else {
                  var rest = diff % 60;
                  diff = b.diff(a, "minutes") + " min " + rest + " sec";
                }
            //Generate Embed for Discord Channel
            message.channel.send({embed: {
                color: Math.floor(Math.random() * 16777214) + 1,
                title: 'BurstNeon Block Reporter',
                description: 'Payouts will be updated in 15 minutes',
                fields: [
                    {
                        name: 'Block Height',
                        value: response.data.blocks[i].height.toString()
                    },
                    {
                        name: 'Generator Time',
                        value: diff.toString()
                    },
                    {
                        name: 'Transactions',
                        value: response.data.blocks[i].transactions.toString()
                    },
                    {
                        name: 'Block Size',
                        value: response.data.blocks[i].size.toString()
                    },
                    {
                        name:'Created on',
                        value: response.data.blocks[i].created.toString()
                    },
                    {
                        name:'Forged by',
                        value: generatorText
                    }
                ],
                timestamp: new Date(),
                footer: {
                text: `Visit: http://burstneon.com`
                }
            }}).catch(console.error());

          }
        }
          })
          //Catch Data every 30 sec
        }, 30000);
      },
};
