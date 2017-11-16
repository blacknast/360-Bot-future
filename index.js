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



client.on('ready', function(evt) {
  console.log('I am ready!');
//récupère le 1er channel (général)
  let textChannel = client.channels.entries().next().value;
  let channel = textChannel[1];
/* uncomment si tu peux prévenir qd le bot est prêt*/
//  channel.send("Je suis en ligne, pm moi si tu cherches du taf ! ;) ");
});


client.on('message', message => {
  if (message.author.id === client.user.id) {
    return;
  }

if (message.content === 'ping') {
    message.reply('pong');
  }

//si le message est envoyé depuis un channel quelconque et  correspond au pattern #search linkedin webdev #c paris
//le resultat est envoyé en privé et l'user est prévenu
if (/\s*#search\s*([\w#]+\s*)*/g.test(message.content)&& message.channel.type !== 'dm'  ) {
    let command = client.registry.findCommands('job')[0];//récupération de la commande
    let idx = message.content.indexOf("#search")+7;// récupération des paramères (enlever le #search)
//créer et executer la commande
    let commandMessage = new Commando.CommandMessage(message,command,message.content.substr(idx));
    commandMessage.run();
  }
})
client.login(config.token);

