const Commando = require('discord.js-commando');

module.exports = class AddNumbersCommand extends Commando.Command {
constructor(client) {
		super(client, {name: 'job',
			aliases: ['job', 'search-job'],
			group: 'job',
			memberName: 'job',
			description: 'This command help user to find work. search-job #website #kind #type #place',examples: ['job-search linkedin webdev php paris'],	args: [
				{
					key: 'website',
					label: 'website',
					prompt: 'what job search engine do you want to use',
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

async run(msg, args) {

		let out = `you want a ${args.kind} job from ${args.website} in ${args.place} where ${args.type}  is used `;
	
		return msg.reply(out);
	}

};
