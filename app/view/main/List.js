function getRandomDate() {
	let randomDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
	return randomDate;
}

Ext.define('Table', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'name'},
		{name: 'skills'},
		{name: 'languages'},
		{name: 'numbercolumn'},
		{name: 'datecolumn'},
		{name: 'checkcolumn'}
	]
});

let table = Ext.define('Table', {
	extend: 'Ext.data.Store',
	model: 'Table',
	alias: 'store.table',
	pageSize: 5,
	data: {
		items: [
			{name: 'Ivan', numbercolumn: 1, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ivan', numbercolumn: 2, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ivan', numbercolumn: 3, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ivan', numbercolumn: 4, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ivan', numbercolumn: 5, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ivan', numbercolumn: 6, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ivan', numbercolumn: 7, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ivan', numbercolumn: 8, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ivan', numbercolumn: 9, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ivan', numbercolumn: 10, datecolumn: getRandomDate(), checkcolumn: false},
			{name: 'Ivan', numbercolumn: 11, datecolumn: getRandomDate(), checkcolumn: false},

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
	title: 'Table',

	bind: {
		store: '{Table}',
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

			},
			{
				text: 'Редактировать',
				handler: 'showModal'
			},
			{
				text: 'Удалить',
				handler: 'deleteRow'
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
			text: 'skills',
			filter: {
				type: 'string'
			}
		}, {
			text: 'skills',
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
			dataIndex: 'checkcolumn',
			sortable: false,
			width: 250
		}
	],

	bbar: {
		xtype: 'pagingtoolbar',
		displayInfo: true
	}
});