
/******* C:\workspace\cours-web-editor\app\tools/../../web-static-src/js/config.js *******/
var configPage = {
	id: 'config',
	label: 'Configuration',
	fields: [
		{name: 'id', label: 'Id'},
		{name: 'name', label: 'Nom'},
		{name: 'identifier', label: 'Identifiant'},
		{name: 'value', label: 'Value'},
		{name: 'config_type_name', label: 'Type'}
	],
	formTabs: [
		{name: 'properties', label: 'Propri√©t√©s', fields: [
			{name: 'name', label: 'Nom'},
			{name: 'identifier', label: 'Identifiant'},
			{name: 'value', label: 'Value'},
			{name: 'config_type', label: 'Type', type: 'select', table: 'config_type'}
		]}
	],
	filters: [
		{field: 'config_type', label: 'Type', table: 'config_type'}
	]
};

var configTypePage = {
	id: 'configType',
	label: 'Configuration Type',
	fields: [
		{name: 'id', label: 'Id'},
		{name: 'name', label: 'Nom'},
		{name: 'identifier', label: 'Identifiant'}
	],
	formTabs: [
		{name: 'properties', label: 'Propri√©t√©s', fields: [
			{name: 'name', label: 'Nom'},
			{name: 'identifier', label: 'Identifiant'}
		]}
	]
};

var configMenu = new mbMenuButton({
	id: 'config',
	label: 'Configuration',
	pageConfigList: [
		configPage,
		configTypePage
	]
});

/******* C:\workspace\cours-web-editor\app\tools/../../web-static-src/js/enemy.js *******/
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
		{name: 'properties', label: 'Propri√©t√©s', fields: [
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

/******* C:\workspace\cours-web-editor\app\tools/../../web-static-src/js/template.js *******/
var templatePage = {
	id: 'template',
	label: 'Template',
	fields: [
		{name: 'id', label: 'Id'},
		{name: 'name', label: 'Nom'},
		{name: 'template_type_name', label: 'Type'}
	],
	formTabs: [
		{name: 'properties', label: 'PropriÈtÈs', fields: [
			{name: 'name', label: 'Nom'},
			{name: 'template_type', label: 'Type', type: 'select', table: 'template_type'}
		]}
	],
	filters: [
		{field: 'template_type', label: 'Type', table: 'template_type'}
	]
};

var templateTypePage = {
	id: 'templateType',
	label: 'Template type',
	fields: [
		{name: 'id', label: 'Id'},
		{name: 'name', label: 'Nom'}
	],
	formTabs: [
		{name: 'properties', label: 'PropriÈtÈs', fields: [
			{name: 'name', label: 'Nom'}
		]}
	]
};

var templateMenu = new mbMenuButton({
	id: 'template',
	label: 'Template',
	pageConfigList: [
		templatePage,
		templateTypePage
	]
});
