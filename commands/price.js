module.exports = {
    name: 'price',
    description: 'Get the current price of burst from coinmarketcap.com',
    execute(message, args) {
        //delete the message
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        console.log(args);
        var getJSON = require('get-json')
        getJSON('https://api.coinmarketcap.com/v1/ticker/burst/', function(error, response){

        error
        // undefined

        message.reply(`Usd price:${response.result}`);

    response.ok
    // => true

})
    }
};