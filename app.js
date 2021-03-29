import { Client, MessageEmbed } from 'discord.js';
import irloctogone from './irloctogone.js';

function inviteUrl(id) {
    return `https://discord.com/oauth2/authorize?client_id=${id}&scope=bot`;
}

function tagUser(user) {
    return `<@${user.id}>`
}

const client = new Client();
let application = null;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.fetchApplication().then(
        app => {
            application = app;
            console.log(inviteUrl(app.id)); 
        }
    );
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
        const response = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Octogone')
            .setDescription(`${tagUser(message.member)} wants to start a fight!`)
            .addField('Fighters', players.map(player => tagUser(player)).join('\n'));

        if (players.size > 1) {
            let winner = players.random();
            response.addField('Winner :trophy:', tagUser(winner));
        }
        else {
            response.addField('Winner :trophy:', `No one.\nEven though you were alone in the octogone, you managed to loose...`);
        }

        return message.reply(response);
    }
    else if (command === 'irloctogone') {
        return message.channel.send(irloctogone());
    }
});

client.login(process.env.TOKEN);