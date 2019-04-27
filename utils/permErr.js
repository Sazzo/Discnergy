const Discord = require('discord.js')
const fs = require('fs')
const config = require('../config.json')
// Permissão: OwnerID
module.exports.ownerperm = (message, authorId) => {
	const embed = new Discord.RichEmbed()
    .setTitle("Discnergy - Sem permissão")
    .setTimestamp()
    .setColor(0x00AE86)
    .setDescription("Apenas o dono do bot pode usar este comando.")
    .addField("Permissão requerida:",
    			"ownerId")
    message.channel.send({embed});
}
