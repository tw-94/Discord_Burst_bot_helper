module.exports = {
    name: 'getpayout',
    description: 'get last payout',
    args: true,
    execute(message, args) {
      var index = 0;
        //delete the message
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        //Module for Json Wrapper
        var getJSON = require('get-json');
        var lastBlock = 0;
        var found = false;
        var max = 0;
              //Get latest Block Height
              getJSON('https://explore.burst.cryptoguru.org/api/v1/last_blocks', function(error, response){
                lastBlock = response.data.blocks[0].height;
              });
              //Find maximum Trans.Number
              getJSON('https://wallet.smit.pro:8125/burst?requestType=getAccountTransactions&account=' + args[0], function(error, response){
                max = response.transactions.length;
              });
              getJSON('https://wallet.smit.pro:8125/burst?requestType=getAccountTransactions&account=' + args[0] + "&firstIndex=0&lastIndex=30", function(error, response){
                if(response.transactions.length > 0) {
                    for(var i = max; i > response.transactions.length; i--) {
                        if(response.transactions[i].senderRS ==  "BURST-YXZW-JH7M-QKR9-9PKBN") {
                            index = i;
                        }
                    }
                    var difference = lastBlock - response.transactions[index].height;
          message.channel.send({embed: {
              color: Math.floor(Math.random() * 16777214) + 1,
              title: response.transactions[index].recipientRS,
              url: "https://explore.burst.cryptoguru.org/account/" + args[0],
              description: '' ,
              fields: [
                {
                    name: 'Current Block Height',
                    value: lastBlock
                },
                {
                    name: 'Blocks Passed',
                    value: difference + " [" + (difference/360).toFixed(2) + " Days]"
                },
                {
                    name: 'Payout Block Height',
                    value: response.transactions[index].height.toString()
                },
                  {
                      name: 'Amount',
                      value: (response.transactions[index].amountNQT / 100000000).toString()
                  },
                  {
                      name: 'Number Of Confirmations',
                      value: (response.transactions[index].confirmations).toString()
                  },
                  {
                      name: 'Transaction',
                      value: `[${response.transactions[index].transaction}](https://explore.burst.cryptoguru.org/transaction/${response.transactions[index].transaction})`
                  }
              ],
              timestamp: new Date(),
              footer: {
              text: `Visit: http://burstneon.com`
              }
          }}).catch(console.error());
        }
      });
    }
};
