const config = require("../config.json")
const permErr = require("../utils/permErr.js")
exports.run = (client, message, args) => {
  if(message.author.id !== config.sazz) return permErr.ownerperm(message);
  if(!args || args.size < 1) return message.reply("Amigo, cade o comando?");
  const commandName = args[0];
  // Vai dar uma olhada se o comando realmente existe.
  if(!client.commands.has(commandName)) {
    return message.reply("Esse comando não existe.");
  }

  delete require.cache[require.resolve(`./${commandName}.js`)];

  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`O comando ${commandName} foi recarregado com sucesso!`);
};

exports.help = {
  Nome: 'reload',
  ExemploTitle: 'Ele vai dar reload em um certo comando do bot',
  Descrição: 'Um simples comando que apenas os donos podem usar.',
  ExemploDesc: 'Mas porque eu não posso usar? Porque se ele é usado em massa pode até crashar o bot!',
  Uso: 'reload [comando]',
  ExemploUso: 'EX: dy!reload details'
};