const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json"); // Essa config não está na github por conter informações secretas do bot.
client.config = config;

// Iniciando DataBase
const firebase = require('firebase/app');
const FieldValue = require ('firebase-admin').firestore.FieldValue;
const admin = require('firebase-admin');
const Account = require('./system/gearDBASEops.json')

admin.initializeApp({
  credential: admin.credential.cert(Account)
});

let db = admin.firestore();


// Tudo isso é a Command Handler.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log(`Sistema: Evento enviado ${eventName}`)
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Sistema: Enviado ${commandName}`);
    client.commands.set(commandName, props);
  });
});

// Vai logar no bot.
client.login(config.token)