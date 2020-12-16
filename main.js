const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '<';

const fs = require('fs');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot on!');
    client.user.setPresence({ activity: { name: 'Youtube, Watching Cello"s new intro!!' }, status: 'dnd' }).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
     client.command.get('ping').execute(message, args);
    } else if (command == 'help'){
        const testEmbed = new Discord.MessageEmbed()
        .setColor('#720C0C ')
        .setTitle('\nHello!, Im cellos Utilities!, Here are my commands')
        .setAuthor('by 𝓒𝓮𝓵𝓵𝓸#2516', 'https://cdn.discordapp.com/avatars/243711858060689408/3f40de51e0847099aa2d4b19206b5277.webp?size=128')
        .setDescription('afk, \nhelp, \ninvite, \nping, \nshop, \nstatus, More commands at shop')
        .addField('Bot made by Cello, Scripted and coded by Cello,Da smurf', 'Credits: \nkimi1614#8375 for commands \nDa Smurf#7329 To show to code \nAtainemy1Giftz𝖟#7920 For partnership \n', true)
        .setTimestamp()
        .setFooter('Cellos Utilities', 'https://cdn.discordapp.com/avatars/769875416277581824/6cd37389d73fe0be7865a19ef94a4863.webp?size=256');
            try {
                message.reply(testEmbed);
            } catch {
                message.reply('this is for when it not work')
            }
    } else if (command === 'command thing'){
        const testEmbed = new Discord.MessageEmbed()
            .setColor(0xecfc03)
            .setTitle('title 1')
            .setDescription('Testing')
        try {
            message.reply(testEmbed);
        } catch {
            message.reply('this is for when it not work')
        }
    } else if (command == 'buy'){
     client.command.get('buy').execute(message, args);
    } else if (command == 'shop'){
     client.command.get('shop').execute(message, args);
    } else if (command == 'status'){
        client.command.get('status').execute(message, args);
    } else if (command == 'unwrap'){
        client.command.get('unwrap').execute(message, args);
    } else if (command == 'afk'){
        client.command.get('afk').execute(message, args);
    } else if (command == 'user-info'){
        client.command.get('user-info').execute(message, args);
    } else if (command == 'invite'){
        client.command.get('invite').execute(message, args);
    } else if (command == 'purge'){
        client.command.get('purge').execute(message, args);
        } else if (command === 'swear_dm'){
        const user = client.users.cache.get(`${message.author.id}`)
        user.send('Hey dude I swear now ||bitch||')
        message.channel.send('Uh oh')
     } 
    }
);

client.login(process.env.token);