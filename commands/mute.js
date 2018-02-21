module.exports = {
    name: 'mute',
    description: 'Mute that person!',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        if(message.member.roles.has("Comander")) {
            let mute = message.guild.roles.find("name", "Muted");
            let member = message.mentions.members.first();
            member.addRole(role).catch(console.error("Errored out"));
            message.reply(`${message.mentions} has been muted!`);
        } else {
            message.reply(":no_entry: You don't have perms!");
        }
    },
};