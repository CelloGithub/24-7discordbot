module.exports = {
    name: 'unwrap',
    description: "unwrap the box",
    execute(message, args){
        message.channel.send('You unwraped the box, and something is inside. You was shocked! 😱')
    }
}