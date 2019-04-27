
exports.run = (client, message) => {
	const gIcon = message.guild.displayAvatarURL
	const uIcon = message.author.displayAvatarURL
	const owner = message.guild.owner
	const Discord = require("discord.js")

	const embed = new Discord.RichEmbed()
	.setColor("#75ed63")
	.setThumbnail(gIcon)
	.setAuthor(`Informações - ${message.guild.name}`, uIcon)
	.addField("Você entrou aqui:", message.member.joinedAt, true)
	.addField("Foi criado:", message.guild.createdAt, true)
	.addField("Total de Membros:", message.guild.memberCount, true)
	.addField("Dono:", owner, true)

	message.channel.send({embed});
}