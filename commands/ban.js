exports.run = (client, message, [mention, ...reason]) => {
	const modRole = message.guild.roles.find(role => role.name === "Discord - Administrator");
       
    if (!modRole)
    return console.log("O cargo de mod não existe.");

	if (!message.member.roles.has(modRole.id))
    return message.reply("Você não tem permissão para usar esse comando!");

	if (message.mentions.members.size === 0)
    return message.reply("Mencione o membro que deseja banir.");
	
	if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.reply("");

	const banMember = message.mentions.members.first();

	banMember.ban(reason.join("")).then(member => {
    message.reply(`${member.user.username} foi banido com sucesso do servidor!`);
  });
};
	
exports.help = {
  Nome: 'ban',
  ExemploTitle: 'Ele vai banir um usuario',
  Descrição: 'Vai retirar um membro do servidor para sempre!',
  ExemploDesc: 'AVISO: Ele não vai poder voltar, só se você desbanir ele do servidor.',
  Uso: 'ban [membro] [razão]',
  ExemploUso: 'EX: dy!ban @sazz floodou no chat'
};
