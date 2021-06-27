module.exports = {
	name: 'message',
	once: false,
	execute(message) {
		console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
	},
};
