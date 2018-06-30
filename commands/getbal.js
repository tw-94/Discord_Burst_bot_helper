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
        const os = require('os');
        var system = os.platform();
        console.log(system);
        if(system = "linux"){
            const sys = require('sys')
        const exec = require('child_process').execSync;
         if(args[0] === "5329676834830749165"){
            message.reply('Still not rich! Mabey type it harder!');
        }
        var get = `curl -s 'http://burstneon.com/blocks2.csv' | grep ${args[0]}`;
        var data = exec(get).toString();
        message.reply(data);
        console.log(data);
        }else{
            console.log(`OS must be linux to use this command!`);
            message.reply(`Please contact the bot maker/owner to tell them their was an issue!`);
        };
    }
};