module.exports = {
    name: 'burstneon',
    description: 'How do I get started on burstneon',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        message.reply(`BURSTNEON MINER CONFIGURATION SETTINGS:
Server: burstneon.com
Port: 8080
?Minimum? Deadline: 63072000 (This is 2 years)
If using qbundle wallet, go to: _Tools -> _Set Pool
If using the command line 'miner-burst': edit miner.conf
Need more? See:  https://www.sansun.no/burstneon.php`);
    },
};