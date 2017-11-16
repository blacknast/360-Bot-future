const Commando = require('discord.js-commando');

module.exports = class AddNumbersCommand extends Commando.Command {
constructor(client) {
		super(client, {name: 'job',
			aliases: ['job', 'search-job','#search'],
			group: 'job',
			memberName: 'job',
			description: 'This command help user to find work: search-job|job|#search website kind type place',examples: ['job-search linkedin webdev php paris'],	args: [
				{
					key: 'website',
					label: 'website',
					prompt: 'what job search engine do you want to use, ex: linkedin',
					type: 'string'
				},
				
{

					key: 'kind',
					label: 'Kind of job',
					prompt: 'what kind of job, ex: webdeveloppers',
					type:'string'
}
,
{

					key: 'type',
					label: 'type of technologies are used',
					prompt: 'what type of technology, ex: #c++',
					type:'string'
},
{

					key: 'place',
					label: 'Place of the job',
					prompt: 'Place of job, ex: paris',
					type:'string'
}
]});}
/***
* @override
*/
async run(msg, args) {
	      //DONT SHOW MESSAGE IF ROOM IS DM
		let out = `you want a ${args.kind} job from ${args.website} in ${args.place} where ${args.type}  is used `;

//Si l'utilisateur est dans une salle quelconque; lui prévenir que sa commande est entrain d'être traité
//et qu'il doit aller en privé pour voir le résultat
if(msg.channel.type === 'text' )
{
		let channelMsg= `une message privé contenant les infos dont pous avez besoin  vous a été envoyé`;	
		msg.reply(channelMsg);
}

		return msg.author.send(out);
		
	}

};
