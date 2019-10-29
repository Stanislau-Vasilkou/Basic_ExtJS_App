Ext.define('MyApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.main',
	stores: ['Users'],

	showEditModal: function () {
		let vm = this.getViewModel();
		for(let key in vm.get('selectedRow').getData()) {
			vm.set('editedRow.timecolumn', vm.get('selectedRow.datecolumn'));
			vm.set(`editedRow.${key}`, vm.get(`selectedRow.${key}`));
		}
		Ext.create({
			xtype: 'modal',
			viewModel: {
				parent: vm
			},
		}).show();
	},

	showAddModal: function () {
		let vm = this.getViewModel();
		Ext.create({
			xtype: 'modal',
			viewModel: {
				parent: vm
			},
		}).show();
	},

	deleteItems: function () {
		let store = this.getViewModel().getStore('Users');
		let selectedRecord = this.getViewModel().get('selectedRow');
		let data = store.getData().items;
		let records = data.filter((i) => i.data.checkcolumn);
		Ext.Msg.confirm('Удаление записей', 'Вы дейтсвительно хотите удалить выбранные записи?', function(btn) {
			if(btn === 'yes') {
				records.length ? store.remove(records) : store.remove(selectedRecord);
			}
		});
	},
});