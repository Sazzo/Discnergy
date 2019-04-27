const config = require('../config.json');
const Discord = require('discord.js')
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    const embed = new Discord.RichEmbed()
    .setTitle("Discnergy - Ajuda")
    .setTimestamp()
    .setColor(0x00AE86)
    .setDescription("Yay! Você está curioso sobre meus comandos é? Pode da uma olhada aqui em baixo uwu")
    .addField(`Comandos: ${commandNames}`,
              `Sabia que eu tenho um github? https://github.com/Sazzo/Discnergy`)
    message.channel.send({embed});

    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  Nome: 'ajuda',
  ExemploTitle: 'É simples, você precisa de ajuda?',
  Descrição: 'Mostra todos os meus comandos',
  ExemploDesc: 'Tenho muitos comandos e nem sempre da pra guardar na memoria uwu',
  Uso: 'ajuda',
  ExemploUso: 'Não tem muita coisa a falar...'
};