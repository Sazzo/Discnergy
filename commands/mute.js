const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let razão = args.slice(1).join(' ');
  let usuario = message.mentions.users.first();
  let modlog = client.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.reply('Não consegui achar o canal de texto da logs.').catch(console.error);
  if (!muteRole) return message.reply('Não consegui achar o cargo de mute.').catch(console.error);
  if (razão.length < 1) return message.reply('Você precisa inserir uma razão para o seu mute!').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Você precisa mencionar alguem para mutar').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Comando:', 'Un/Mute')
    .addField('Usuario:', `${usuario.username}#${usuario.discriminator}`)
    .addField('Moderador:', `${message.author.username}#${message.author.discriminator}`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Infelizmente eu não tenho as permissões necessarias.').catch(console.error);

  if (message.guild.member(usuario).roles.has(muteRole.id)) {
    message.guild.member(usuario).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(usuario).addRole(muteRole).then(() => {
      message.reply(`O usuario ${usuario.username} foi mutado com sucesso`)
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.help = {
  Nome: 'Mute',
  ExemploTitle: 'Ele vai mutar um usuario.',
  Descrição: 'Vai adicionar um cargo de mute para que o usuario não possa falar nos canais de texto.',
  ExemploDesc: 'DICA: Você pode modificar as permissões do cargo!',
  Uso: 'mute [membro] [razão]',
  ExemploUso: 'EX: dy!mute @sazz floodou no chat'
};