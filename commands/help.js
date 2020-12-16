module.exports = {
    name: 'help',
    description: "help",
    execute(message, args){
        message.channel.send('The commands are: \nhelp, \nping, \nshop, \nstatus.')
    }
}