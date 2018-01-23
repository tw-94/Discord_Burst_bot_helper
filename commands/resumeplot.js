module.exports = {
    name: 'resumeplot',
    description: 'How do I ruseme plotting?',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
       message.channel.send(`HOW TO RESUME PLOTTING WITH QBUNDLE'S XPLOTTER

See this handy video:
https://www.youtube.com/watch?v=-8iKW_O2kNs&feature=youtu.b`);
    },
};