/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.main',


	showModal: function () {
		let vm = this.getViewModel();
		if (vm.get('selectedRow')) {
			let fullDate = vm.get('selectedRow.datecolumn');
			let num = vm.get('selectedRow.numbercolumn');
			vm.set('editedRow.datecolumn', fullDate);
			vm.set('editedRow.timecolumn', fullDate);
			vm.set('editedRow.numbercolumn', num);
			Ext.create({
				xtype: 'modal',
				viewModel: {
					parent: vm
				},
			}).show();
		} else {
			Ext.Msg.alert('Ошибка редактирования', 'Вы не выбрали запись для редактирования');
		}
	},

	deleteRow: function() {
		let store = this.getViewModel().getStore('table');
		console.log(store);
	},
});