const Discord = require('discord.js')
exports.run = (client , message , params) => {
	const commandNames = Array.from(client.commands.keys());
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      const embed = new Discord.RichEmbed()
      .setTitle(`Discnergy - Detalhes de: ${command.help.Nome}`)
      .setColor(0x00AE86)
      .addField(`Nome: ${command.help.Nome}`,
      			`${command.help.ExemploTitle}`)
      .addField(`Descrição: ${command.help.Descrição}`,
      			`${command.help.ExemploDesc}`)
      .addField(`Uso: ${command.help.Uso}`,
      			`${command.help.ExemploUso}`)
      message.channel.send({embed});
    }
  }

