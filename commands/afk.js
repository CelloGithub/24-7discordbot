module.exports = {
    name: 'afk',
    description: "afk?",
    execute(message, args){
        message.channel.send('```I set your afk```')
        message.react('😪');
    }
}