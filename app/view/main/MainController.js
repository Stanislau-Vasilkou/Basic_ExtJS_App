Ext.define('MyApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.main',
	stores: ['Users'],

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

	deleteRow: function () {
		let store = this.getViewModel().getStore('Users');
		let selectedRecord = this.getViewModel().get('selectedRow');
		let data = store.getData().items;
		let records = data.filter((i) => i.data.checkcolumn);
		records.length ? store.remove(records) : store.remove(selectedRecord);
	},
});