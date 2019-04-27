module.exports = async (client) => {
const config = require("../config.json")
// Database

const playings = [
	`Olá! Estou tem ${client.guilds.size} servidores`,
	"Entre no meu servidor de suporte!",
	"Yakigami - yk!ajuda",
	"Fui criada por sazz!",
	"Agora sim! Este servidor está supimpa!",
	"Não estou funcionando? Tente usar yk!ping",
	"Tem uma sugestão? Entre no meu servidor de suporte!",
	"Quer saber mais sobre mim? Use yk!botinfo",
	"Deseja um café?"

]
console.log(`Estou online senhorito!`);
setInterval(function() {
const playing = Math.floor(Math.random() * (playings.length - 1) + 1);
 client.user.setActivity(playings[playing]);

	}, 10000);



}