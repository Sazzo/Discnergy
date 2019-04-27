exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find(role => role.name === "Discord - Administrator");
  if (!modRole)
    return console.log("O cargo de mod não existe.");

  if (!message.member.roles.has(modRole.id))
    return message.reply("Você não tem permissão para usar esse comando!");

  if (message.mentions.members.size === 0)
    return message.reply("Mencione o membro que deseja expulsar.");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`${member.user.username} foi kickado com sucesso do servidor!`);
  });
};

exports.help = {
  Nome: 'Kick',
  ExemploTitle: 'Caso você seja novo no Discord, kick é expulsar. Ele apenas vai ser expulso e pode entrar novamente.',
  Descrição: 'Expulsa um membro do servidor.',
  ExemploDesc: 'Repetindo, ele não vai banir e sim expulsar! O usuario pode entrar novamente.',
  Uso: 'kick [membro] [razão]',
  ExemploUso: 'EX: dy!kick @sazz floodou no chat'
};