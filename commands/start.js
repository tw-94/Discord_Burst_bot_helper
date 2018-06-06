module.exports = {
    name: 'start',
    description: 'How do I get started',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        var text = `Here is the proper logic:
        Get a coin! From ether this discord server (kindly ask someone) or from a facuet
        1) Set reward recipient: https://burstneon.com/rewardassignment.html
            For burstneon.com, recipient is: BURST-YXZW-JH7M-QKR9-9PKBN
        2) Mine and earn some coins.
        3) Set your name when you finally have some coins.
        In other words, you can mine without setting your name. Don't waste your first coin on that.
        Let setting the reward assignment be yout first transaction.`;
        if(message.mentions.users.size === 0) {
             message.reply(text);
           } else{
                let TagedMember = message.guild.member(message.mentions.users.first());
               message.channel.send(`${TagedMember} ${text}`);
           }
    },
};

