function getRandomDate() {
	let randomDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
	return randomDate;
}

function convertTag(val) {
	return val.join(', ');
}

Ext.define('User', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'name', type: 'string'},
		{name: 'region', type: 'string'},
		{name: 'skills', type: 'string', convert: convertTag},
		{name: 'salary', type: 'number'},
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
			{name: 'Ivan', region: 'Россия', skills: ['.NET'], salary: 300, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Petr', region: 'Украина', skills: ['Java', '.NET'], salary: 200, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Fedor', region: 'Россия', skills: ['JavaScript', 'Swift'], salary: 350, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Michael', region: 'Россия', skills: ['JavaScript', 'Java'], salary: 400, datecolumn: getRandomDate(), checkcolumn: false},
			// {name: 'Jan', region: 'Россия', skills: [1, 3], salary: 5, datecolumn: getRandomDate(), checkcolumn: false},
			// {name: 'Alex', region: 'Беларусь', skills: [1, 3], salary: 6, datecolumn: getRandomDate(), checkcolumn: false},
			// {name: 'Ales', region: 'Беларусь', skills: [4], salary: 7, datecolumn: getRandomDate(), checkcolumn: false},
			// {name: 'Stas', region: 'Беларусь', skills: [4], salary: 8, datecolumn: getRandomDate(), checkcolumn: false},
			// {name: 'Sergey', region: 'Россия', skills: [1], salary: 9, datecolumn: getRandomDate(), checkcolumn: false},
			// {name: 'Kirill', region: 'Россия', skills: [1], salary: 10, datecolumn: getRandomDate(), checkcolumn: false},
			// {name: 'Fillip', region: 'Беларусь', skills: [1], salary: 11, datecolumn: getRandomDate(), checkcolumn: false},
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
		'Ext.grid.column.Check',
		'Ext.grid.column.Date',
		'Ext.grid.column.Number',
		'Ext.grid.filters.Filters',
		'Ext.toolbar.Paging',
		'MyApp.view.main.MainModel'
	],

	reference: 'usersGrid',
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
					disabled: '{!usersGrid.selection}',
				},
				handler: 'showEditModal'
			},
			{
				text: 'Удалить',
				id: 'deleteButton',
				bind: {
					disabled: '{!usersGrid.selection}',
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
			text: 'salary',
			xtype: 'numbercolumn',
			format: '0',
			dataIndex: 'salary',
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