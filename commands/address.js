module.exports = {
    name: 'address',
    description: 'List of address',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        message.channel.send({embed: {
            color: 3447003,
            title: 'address',
            description: 'List of useful address',
            fields: [
                {
                    name: 'Bot facuet',
                    value: `BURST-6Z7R-LC4T-Q5AR-BURST`
                },
                {
                    name: 'BurstNeon',
                    value: `BURST-YXZW-JH7M-QKR9-9PKBN`
                },
                {
                    name: 'Loyal',
                    value: 'BURST-PPKW-T3GW-9AWF-2ZACH'
                }
            ],
            timestamp: new Date(),
            footer: {
            text: `-code to see bot's source code `
            }
        }}).catch(console.error());
    },
};