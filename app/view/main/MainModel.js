/**
 * This class is the view model for the Main view of the application.
 */
function convertTag(val) {
	return val.isArray ? val.join(', ') : val;
}

Ext.define('User', {
	extend: 'Ext.data.Model',

	fields: [
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
	// autoSync: true,
	proxy: {
		type: 'ajax',
		url: 'http://localhost:3000/users',
		enablePaging: true,
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
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