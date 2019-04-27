 // Database
module.exports = async (client, message, err, user) => {
 const config = require('../config.json')
const admin = require('firebase-admin');
let db = admin.firestore();

    
db.collection('dbaseGUILDc').doc(message.guild.id).get().then((q) => {
  if (q.exists){
      prefix = q.data().prefix;
  }
}).then(() => {
      // Vai ignorar todos os bots.
  if (message.author.bot) return;

  // Vai ignorar todo prefixo que não está setado na config
  if (message.content.indexOf(config.prefix) !== 0) return;

  // Sistema de Erro
  
    client.users.get("326123612153053184").send("Olá! Um erro aconteceu!");
    client.users.get("326123612153053184").send("ERR " + err + "");
  

  // Uma pequena defenição de comandos com argumentos
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Pega a data dos comandos
  const cmd = client.commands.get(command);

  // Se o comando não exist, vai sair em silencio
  if (!cmd) return message.channel.send("Este comando não existe.");

  // E finalmente vai rodar o comando!
  cmd.run(client, message, args);

    });
  }