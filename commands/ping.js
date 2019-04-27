exports.run = async (client, message, args) => {
	const m = await message.channel.send(":zap: | Verificando...");
    m.edit(`<:wumplus:561620162449506306> | Pong! BOT: **${m.createdTimestamp - message.createdTimestamp}** API: **${Math.round(client.ping)}ms**`).catch(console.error);
}

exports.help = {
  Nome: 'ping',
  ExemploTitle: 'Pong!',
  Descrição: 'Vai mostrar como está o bot em ping.',
  ExemploDesc: 'Ele pode mostrar o ping da API (que vai ser lançada) e outras coisas!',
  Uso: 'ping',
  ExemploUso: 'É... Pong!'
};