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
		{name: 'properties', label: 'Propriétés', fields: [
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
		{name: 'properties', label: 'Propriétés', fields: [
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