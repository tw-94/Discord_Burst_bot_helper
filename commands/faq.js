module.exports = {
    name: 'faq',
    description: 'How do I get started',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        message.reply(`https://www.sansun.no/burstneon.php`);
    },
};