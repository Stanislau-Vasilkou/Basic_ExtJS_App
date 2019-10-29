function getRandomDate() {
	let randomDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
	return randomDate;
}

Ext.define('User', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'name', type: 'string'},
		{name: 'region', type: 'string'},
		{name: 'skills', type: 'string'},
		{name: 'numbercolumn', type: 'number'},
		{name: 'datecolumn', type: 'date'},
		{name: 'checkcolumn', type: 'boolean'}
	]
});

Ext.define('Users', {
	extend: 'Ext.data.Store',
	model: 'User',
	alias: 'store.users',
	pageSize: 5,
	data: {
		items: [
			{name: 'Ivan', region: 'Russia', skills: [1, 2, 3], numbercolumn: 1, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Petr', region: 'Ukraine', skills: 'JS, Angular, React', numbercolumn: 2, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Fedor', region: 'Russia', skills: 'JS, Angular, React', numbercolumn: 3, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Michael', region: 'Russia', skills: 'JS, Angular, React', numbercolumn: 4, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Jan', region: 'Russia', skills: 'JS, Angular, React', numbercolumn: 5, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Alex', region: 'Belarus', skills: 'JS, Angular, React', numbercolumn: 6, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ales', region: 'Belarus', skills: 'JS, Angular, React', numbercolumn: 7, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Stas', region: 'Belarus', skills: 'JS, Angular, React', numbercolumn: 8, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Sergey', region: 'Russia', skills: 'JS, Angular, React', numbercolumn: 9, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Kirill', region: 'Russia', skills: 'JS, Angular, React', numbercolumn: 10, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Fillip', region: 'Ukraine', skills: 'JS, Angular, React', numbercolumn: 11, datecolumn: getRandomDate(), checkcolumn: false},
		]
	},

	proxy: {
		type: 'memory',
		enablePaging: true,
		autoLoad: true,
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});

Ext.define('MyApp.view.main.List', {
	extend: 'Ext.grid.Panel',
	xtype: 'mainlist',

	requires: [
		'Ext.button.Button',
		'Ext.form.field.ComboBox',
		'Ext.grid.column.Check',
		'Ext.grid.column.Date',
		'Ext.grid.column.Number',
		'Ext.grid.filters.Filters',
		'Ext.toolbar.Paging'
	],

	reference: 'myGrid',
	title: 'Table',

	bind: {
		store: '{Users}',
		selection: '{selectedRow}'
	},


	plugins: [
		{ptype: 'gridfilters'},
	],

	tbar: [{
		xtype: 'button',
		width: 120,
		text: 'Действие',
		menu: [
			{
				text: 'Добавить',
				handler: 'showAddModal'
			},
			{
				text: 'Редактировать',
				bind: {
					disabled: '{!myGrid.selection}',
				},
				handler: 'showEditModal'
			},
			{
				text: 'Удалить',
				id: 'deleteButton',
				bind: {
					disabled: '{!myGrid.selection}',
				},
				handler: 'deleteItems'
			}
		]
	}],

	columns: [
		{
			text: 'name',
			dataIndex: 'name',
			filter: {
				type: 'string'
			}
		}, {
			text: 'region',
			dataIndex: 'region',
			filter: {
				type: 'string'
			}
		}, {
			text: 'skills',
			dataIndex: 'skills',
			filter: {
				type: 'string'
			}
		}, {
			text: 'Number',
			xtype: 'numbercolumn',
			dataIndex: 'numbercolumn',
			filter: {
				type: 'number'
			}
		}, {
			text: 'Date',
			dataIndex: 'datecolumn',
			xtype: 'datecolumn',
			format: 'Y-m-d g:i:s',
			flex: 1,
			filter: {
				type: 'date'
			}
		}, {
			xtype: 'checkcolumn',
			headerCheckbox: true,
			reference: 'mycheck',
			listeners: {
				checkChange: function (context, rowIndex, checked) {
					checked ? Ext.getCmp('deleteButton').setDisabled(false) : Ext.getCmp('deleteButton').setDisabled(true);
				},
			},
			dataIndex: 'checkcolumn',
			sortable: false,
			width: 100
		}
	],



	bbar: {
		xtype: 'pagingtoolbar',
		displayInfo: true
	}
});