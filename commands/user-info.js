module.exports = {
  name: 'user-info',
  description: "idk if this even helps lol",
  execute(message, args){
    message.channel.send(`your username is ${message.author.username} there,\nalso your id is ${message.author.id} there.`);
  }
}