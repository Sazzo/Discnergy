exports.run = async (client, message, args) => {
	const config = require('../config.json')
	const permErr = require("../utils/permErr.js")

    if (message.author.id !== config.sazz) return permErr.ownerperm(message);

    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
 
      message.channel.send(client.clean(evaled), {code:"js"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${client.clean(err)}\n\`\`\``);
    }
};