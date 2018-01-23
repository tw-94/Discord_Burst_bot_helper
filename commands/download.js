module.exports = {
    name: 'download',
    description: 'Where do I download the wallet?',
    execute(message, args) {
        message.reply(`https://www.burst-coin.org/download-wallet`);
    },
};