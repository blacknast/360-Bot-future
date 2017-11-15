const Commando = require('discord.js-commando');
const config = require('./config.js.dist')
const path = require('path');
const client = new Commando.Client();

client.registry
    // Registers your custom command groups
    .registerGroups([
        ['job', 'Job commands'],
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));


//send a message to the main channel? 

client.on('ready', function(evt) {
  console.log('I am ready!');
  let textChannel = client.channels.entries().next().value;
  let channel = textChannel[1];
  channel.send("Je suis en ligne, pm moi si tu cherches du taf ! ;) ");
});

client.login(config.token);

