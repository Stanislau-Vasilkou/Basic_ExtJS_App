/**
 * This class is the view model for the Main view of the application.
 */
function convertTag(val) {
	return val.isArray ? val.join(', ') : val;
}

Ext.define('User', {
	extend: 'Ext.data.Model',
	idProperty: 'Id',
	fields: [
		{name: 'Id', type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'region', type: 'string'},
		{name: 'skills', convert: convertTag},
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
	autoLoad: true,
	autoSync: true,
	proxy: {
		type: 'ajax',
		url: 'http://localhost:3000/users',
		enablePaging: true,
		reader: {
			type: 'json',
			rootProperty: 'data',
			totalProperty: 'totalCount'
		},
	// 	api: {
	// 		// create: 'country/create',
	// 		read: 'http://localhost:3000/users',
	// 		// update: 'counrtry/update',
	// 		destroy: 'http://localhost:3000/users/destroy'
	// 	},
	}
});

Ext.define('MyApp.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.main',

	data: {
		name: 'MyApp',
	},

	stores: {
		Users: {
			type: 'users'
		}
	},
});