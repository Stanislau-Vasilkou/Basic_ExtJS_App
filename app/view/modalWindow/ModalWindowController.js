Ext.define('MyApp.view.modalWindow.ModalWindowController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.modalWindow',

	saveData: function (btn) {
		let vm = this.getViewModel();
		let id = btn.up('modal').getViewModel().get('Id');
		let form = btn.up('window').down('form');
		let selectedData = vm.get('user');
		if (form.getForm().isValid()) {
			let record = form.getForm().getValues();
			let store = vm.getStore('Users');
			let time = record.timecolumn;
			let date = record.datecolumn;
			let fullDate = new Date(`${date} ${time}`);
			if(!id) {
				store.sort({
					property: 'id',
					direction: 'ASC'
				});
				let lastRecord = store.last();
				record.Id = lastRecord.data.id++;
				record.datecolumn = fullDate;
				store.add(record);
			} else if(id) {
				for (let key in record) {
					if (selectedData.hasOwnProperty(key)) {
						if(key === 'datecolumn') {
							selectedData[key] = fullDate;
						}
						selectedData[key] = record[key];
					}
				}
			}
			store.commitChanges();
			this.getView().close();
		} else if (!form.getForm().isValid()) {
			Ext.Msg.alert('Ошибка заполнения', 'Имеются некорректно заполненные поля');
		}
	},

	close: function () {
		this.getView().close();
	}
});
