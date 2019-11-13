Ext.define('CarsList', {
	extend: 'Ext.grid.Panel',
	xtype: 'carslist',
	viewModel: {
		type: 'carsmodel'
	},

	requires: [
		'Ext.button.Button',
		'Ext.grid.column.Check',
		'Ext.grid.column.Date',
		'Ext.grid.column.Number',
		'Ext.grid.filters.Filters',
		'Ext.toolbar.Paging',
		'MyApp.view.main.MainModel'
	],

	reference: 'carsGrid',
	title: 'Table',

	bind: {
		store: '{Cars}',
		selection: '{selectedRow}'
	},


	plugins: [
		{ptype: 'gridfilters'},
	],


	columns: [
		{
			text: 'brand',
			dataIndex: 'brand',
			filter: {
				type: 'string'
			}
		}, {
			text: 'model',
			dataIndex: 'model',
			filter: {
				type: 'string'
			}
		},  {
			text: 'year',
			xtype: 'numbercolumn',
			format: '0',
			dataIndex: 'year',
			filter: {
				type: 'number'
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
			width: 50
		}
	],

	bbar: {
		xtype: 'pagingtoolbar',
		displayInfo: true,
		displayMsg: 'Displaying {0} - {1} of {2}',
		bind:{
			store: '{Cars}'
		}
	}
});