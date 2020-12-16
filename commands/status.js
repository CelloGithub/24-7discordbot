module.exports = {
    name: 'status',
    description: "is it offline?",
    execute(message, args){
        message.channel.send('Status: Commands working,\nBot status: Fixed')
    }
}