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
        getJSON('http://coincap.io/page/BURST', function(error, response){

        error

        
        message.reply(`One $BURST = ${response.price_usd} USD or ${response.price_btc} BTC`);

})
    }
};