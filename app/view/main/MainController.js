Ext.define('MyApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.main',
	stores: ['Users'],
	counter: 0,

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
		window.getViewModel().set('Id', record.id);
		form.getForm().setValues(record.data);
	},

	showAddModal: function (button) {
		button.up('grid').getSelectionModel().deselectAll();
		Ext.create({
			xtype: 'modal',
			id: 'modal'
		}).show();
		let window = Ext.getCmp('modal');
		window.lookupController().getViewModel().set('user', {})
	},

	deleteItems: function (btn) {
		let store = this.getStore('Users');
		let selectedRecord = btn.up('grid').getSelectionModel().getSelection();
		let data = store.getData().items;
		let records = data.filter((i) => i.data.checkcolumn);
		Ext.Msg.confirm('Удаление записей', 'Вы действительно хотите удалить выбранные записи?', function(btn) {
			if(btn === 'yes') {
				records.length ? store.remove(records) : store.remove(selectedRecord);
			}
		});
	},

	onCheckChange: function(context, rowIndex, checked) {
		console.log(this.getViewModel().get('counter'));
		checked ? this.counter++ : this.counter--;
		this.getViewModel().set('counter', this.counter);
	},

	// onHeaderClick: function(ctx, col) {
	// 	console.log(col);
	// }
});