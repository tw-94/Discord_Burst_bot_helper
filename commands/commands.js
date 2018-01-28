module.exports = {
    name: 'commands',
    description: 'Help Me!',
    execute(message, args) {
       console.log("Help");
       message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        message.channel.send({embed: {
            color: 3447003,
            title: 'Help',
            description: 'So you want help hu?',
            fields: [
                {
                    name: '-faq',
                    value: `For pool info`
                },
                {
                    name: '-start',
                    value: `To learn how to get started in the world of burst mining`
                },
                {
                    name: '-resumeplot',
                    value: `to learn how to resume plotting`
                },
                {
                    name:'-download',
                    value: 'To download qbundle or burst core'
                }
            ],
            timestamp: new Date(),
            footer: {
            text: `-code to see bot's source code `
            }
        }}).catch(console.error());
    },
};