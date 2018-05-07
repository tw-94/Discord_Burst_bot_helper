module.exports = {
    name: 'bal',
    description: `What's the bots burst bal?`,
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        var getJSON = require('get-json')
        getJSON('https://explore.burst.cryptoguru.org/api/v1/account/11304873521866505399', function(error, response){
            var bal = response.data.balance / 100000000
            console.log(bal)
            message.reply(`Facuet bal ${bal} BURST`);

        })
    },
};