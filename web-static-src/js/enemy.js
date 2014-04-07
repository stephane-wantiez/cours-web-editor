var enemyPage = {
	id: 'enemy',
	label: 'Ennemis',
	fields: [
		{name: 'id', label: 'Id'},
		{name: 'name', label: 'Nom'},
		{name: 'xp', label: 'Gain d\'XP'},
		{name: 'scale', label: 'Taille'}
	],
	formTabs: [
		{name: 'properties', label: 'Propriétés', fields: [
	   		{name: 'name', label: 'Nom'},
			{name: 'xp', label: 'Gain d\'XP'},
			{name: 'scale', label: 'Taille'}
		]}
	]
};

var enemyMenu = new mbMenuButton({
	id: 'enemy',
	label: 'Ennemis',
	pageConfigList: [
        enemyPage
	]
});