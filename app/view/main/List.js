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
		{ptype: 'gridfilters'},
	],

	tbar: [{
		xtype: 'button',
		text: 'Action',
		menu      : [
			{text: 'Item 1'},
			{text: 'Item 2'},
			{text: 'Item 3'},
			{text: 'Item 4'}
		]
	},
	// 	xtype: 'button',
	// 	text: 'Add',
	// 	// fireEvent: 'showModal',
	// 	handler:  'showModal',
	// }, {
	// 	xtype: 'button',
	// 	text: 'Edit'
	// }, {
	// 	xtype: 'button',
	// 	text: 'Delete'
	// }
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
			width: 250
		}
	],

	bbar: {
		xtype: 'pagingtoolbar',
		displayInfo: true
	},
});