module.exports = {
    name: 'getbal',
    description: 'Get pending balance',
    args: true,
    execute(message, args) {
        //delete the message
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        console.log(args);
        const sys = require('sys')
        const exec = require('child_process').execSync;
        var get = `curl -s 'http://burstneon.com/blocks2.csv' | grep ${args[0]}`;
        var data = exec(get).toString();
        message.reply(data);
        console.log(data);
    }
};