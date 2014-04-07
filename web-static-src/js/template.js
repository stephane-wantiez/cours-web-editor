var templatePage = {
	id: 'template',
	label: 'Template',
	fields: [
		{name: 'id', label: 'Id'},
		{name: 'name', label: 'Nom'},
		{name: 'template_type_name', label: 'Type'}
	],
	formTabs: [
		{name: 'properties', label: 'Propriétés', fields: [
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
		{name: 'properties', label: 'Propriétés', fields: [
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