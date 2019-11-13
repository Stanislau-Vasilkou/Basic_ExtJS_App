Ext.define('List', {
	extend: 'Ext.grid.Panel',
	xtype: 'mainlist',
	viewModel: {
		type: 'main',
		data: {
			counter: 1
		}
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

	reference: 'usersGrid',

	bind: {
		store: '{Users}',
		selection: '{selectedRow}',
		title: '{counter}',
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
					disabled: '{counter}'
				},
				handler: 'deleteItems'
			}, 
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
			},
			width: 200
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
			listeners: {
				checkChange: 'onCheckChange'
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
			store: '{Users}'
		}
	}
});