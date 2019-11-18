const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = '!';

client.on('message', message => {

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'octogone') {
        let players = message.mentions.members;
        players.set(message.member.user.id, message.member);
        if (players.size == 1) {
            return message.channel.send(`You're alone in the octogone...`);
        }

        if (players.size > 1) {
            let winner = players.random();

            return message.channel.send(`${winner.nickname || winner.user.username} won!`);
        }
    }
});

client.login(process.env.TOKEN);