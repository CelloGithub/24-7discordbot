module.exports = {
    name: 'ping',
    description: "wow im lagging smh",
    execute(message, args){
        message.channel.send(`my ping is \n${Math.floor(Math.random() * 2099) + 100}`)
    }
}