const admin = require('firebase-admin');
let db = admin.firestore();
module.exports = (client, message) => {
	client.on('guildCreate', async guildData => {
		db.collection('dbaseGUILDc').doc(gData.id).set({
			'guildID' : guildData.id,
			'guildName' : guildData.name,
			'guildOwner' : guildData.owner.user.username,
			'guildOwnerID' : guildData.owner.user.id,
			'guildPrefix' : 'yk!'
		});

	});

}