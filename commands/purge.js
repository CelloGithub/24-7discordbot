module.exports = {
    name: 'purge',
    description: "You must delete",
    async execute(message, args){
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.reply('bro you not have permission')
      if(!args[0]) return message.reply("did not enter a number");
      if(isNaN(args[0])) return message.reply("enter a number or the command wont work")

      if(args[0] > 54) return message.reply("that is over limit! you can only do 1-54");
      if(args[0] < 1) return message.reply("if message -1 change it to -> 1-54");

      await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
        message.channel.send('Succesfully purged messages')
      })
    }
  }