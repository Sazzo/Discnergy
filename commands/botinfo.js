const Discord = require("discord.js")
exports.run = (client, message) => {
	const embed = new Discord.RichEmbed()
    .setTitle("Yakigami - Quem sou eu?")
    .setColor(0x00AE86)
    .setDescription("Olá! Meu nome é Yakigami e eu sou uma pequena bot que foi feita para te ajudar a deixar seu servidor mais supimpa!")
    .addField("Em qual linguagem de programação você foi feita?", "Fui feita em discord.js, ou seja Javascript!", true)
    .addField("Você é open-source?", "Sim! Você pode ver meu repositorio aqui: [Clique aqui](https://github.com/yakigamibot/Yakigami)", true)
    .addField("Uhm, estou tendo problemas! Você tem um servidor de suporte?", "Meu servidor de suporte: Quando estiver pronto", true)
    .addField("Quantos servidores será que eu estou?", `Eu estou em ${client.guilds.size} servidores`, true)
    .addField("Como posso te adicionar no meu servidor?", "Use este link: [Clique aqui](google.com)")
    .setFooter("Yakigami - Criada por Sazz", "https://cdn.discordapp.com/avatars/560463799010983936/1f674e2099b1031d12f740267fc85a4a.png?size=2048")

    message.channel.send({embed})


}