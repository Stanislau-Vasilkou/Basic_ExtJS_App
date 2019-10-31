Ext.define('MyApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.main',
	stores: ['Users'],

	showEditModal: function (button) {
		let vm = this.getViewModel();
		let records = button.up('grid').getSelectionModel().getSelection();
		let record = records[0];
		let date = record.get('datecolumn');
		record.set('timecolumn', date);
		Ext.create({
			xtype: 'modal',
			id:	'modal'
		}).show();
		let window = Ext.getCmp('modal');
		let form = window.down('form');
		form.getForm().setValues(record.data);
	},

	showAddModal: function () {
		Ext.create({
			xtype: 'modal',
			id: 'modal'
		}).show();
		let window = Ext.getCmp('modal');
		let form = window.down('form');
		console.log(form.getForm().getValues());
		console.log(form.getForm().getValues());
	},

	deleteItems: function () {
		let store = this.getStore('Users');
		console.log(store);
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