module.exports = {
    name: 'minerexample',
    description: 'How do I get started on burstneon',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        message.reply(`https://cdn.discordapp.com/attachments/381290446657421336/407678045810327573/minerexample.PNG`);
    },
};