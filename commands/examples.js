module.exports = {
    name: 'examples',
    description: 'list of examples',
    execute(message, args) {
       console.log("examples");
       message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        message.channel.send({embed: {
            color: 3447003,
            title: 'Examples',
            description: 'So you want to see an example of something?',
            fields: [
                {
                    name: '-burstneon',
                    value: `For pool info`
                },
                {
                    name: '-minerexample',
                    value: `Example of miner setup in qbundle`
                }
            ],
            timestamp: new Date(),
            footer: {
            text: `-commands for all commands `
            }
        }}).catch(console.error());
    },
};