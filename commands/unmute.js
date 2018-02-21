module.exports = {
    name: 'mute',
    description: 'unmute him!',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        if(message.member.roles.has("Commander")) {
            let mute = message.guild.roles.find("name", "Muted");
            let member = message.mentions.members.first();
            member.removeRole(role).catch(console.error("Errored out"));
            message.reply(`${message.mentions} has been unmuted!`);
        } else {
            message.reply(":no_entry: You don't have perms!");
        }
    },
};