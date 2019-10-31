/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.main',

	data: {
		name: 'MyApp',
	},

	stores: {
		Users: {
			type: 'users'
		},
		formulas: {
			user: {
				bind: {
					bindTo: '{usersGrid.selection}',
					deep: true
				},
				// get: function (record) {
				// 	return record;
				// },
				// set: function (record) {
				// 	if (!record.isModel) {
				// 		record = this.get('Users').getById(record.id);
				// 		this.set('user', record);
				// 	}
				// }
			}
		}
	}
});
