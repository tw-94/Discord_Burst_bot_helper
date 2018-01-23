module.exports = {
    name: 'download',
    description: 'Where do I download the wallet?',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        message.reply(`https://www.burst-coin.org/download-wallet`);
    },
};