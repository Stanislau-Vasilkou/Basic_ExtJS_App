var menuButt = Ext.create('Ext.Button', {
	text      : 'Действия',
	renderTo: Ext.getBody(),
	alwaysOnTop: true,
	arrowAlign: 'bottom',
	menu      : [
		{text: 'Добавить'},
		{text: 'Редактировать'},
		{text: 'Удалить'}
	]
});

Ext.define('MyApp.view.main.List', {
	extend: 'Ext.grid.Panel',
	xtype: 'mainlist',

	requires: [
		'MyApp.store.Table'
	],

	title: 'Table',

	store: {
		type: 'table'
	},
	plugins: [
		{ ptype: 'gridfilters'},
	],

	columns: [
		{
			text: 'Number',
			dataIndex: 'numbercolumn',
			filter: {
				type: 'number'
			}
		}, {
			text: 'Date',
			dataIndex: 'datecolumn',
			flex: 1,
			filter: {
				type: 'date'
			}
		}, {
			xtype: 'checkcolumn',
			headerCheckbox: true,
			dataIndex: 'checkcolumn',
			sortable: false,
			width: 250,
			filter: {
				type: 'boolean'
			}
		}
	],

	bbar: {
		xtype: 'pagingtoolbar',
		displayInfo: true
	},

	listeners: {
		select: 'onItemSelected'
	}
});
