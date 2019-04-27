exports.run = (client, message, db, args) => {

    if (args.lenght === 0){
        message.channel.send('Você precisa colocar um prefixo!');
        }else if(args.lenght == 1){
            let spcPrefix = args[0];

            db.collection('dbaseGUILDc').doc(message.guild.id).update({
                'guildPrefix' : spcPrefix
            }).then(() => {
                message.channel.send(`Sucesso! Meu prefixo agora é **${spcPrefix}**!`)
            })
        };
    }
