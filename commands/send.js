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
        var request = require('request');
        request.post(
            `{SEND_URL_HERE}`,
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body)
                    message.respond(`Sent ${args[1]} to ${args[0]}!`);
                }
            }
        );
    }
};