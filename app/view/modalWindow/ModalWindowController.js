Ext.define('MyApp.view.modalWindow.ModalWindowController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.modalWindow',

	saveData: function (btn) {
		let vm = this.getViewModel();
		let form = btn.up('window').down('form');
		if (form.getForm().isValid()) {
			let record = form.getForm().getValues();
			let store = vm.getStore('Users');
			let selectedData = vm.get('selectedRow');
			let time = record.timecolumn;
			let date = record.datecolumn;
			let fullDate = new Date(`${date} ${time}`);
			if (!selectedData) {
				store.sort({
					property: 'id',
					direction: 'ASC'
				});
				let lastRecord = store.last();
				record.id = lastRecord.data.id++;
				record.datecolumn = fullDate;
				store.add(record);
				store.commitChanges();
			} else if (selectedData) {
				for (let key in record) {
					if (selectedData.getData().hasOwnProperty(key)) {
						key === 'datecolumn' ? selectedData.set(key, fullDate) : selectedData.set(key, record[key]);
					}
				}
			}
			store.commitChanges();
			this.getView().close()
		} else if (!form.getForm().isValid()) {
			Ext.Msg.alert('Ошибка заполнения', 'Имеются некорректно заполненные поля');
		}
	},

	close: function () {
		this.getView().close();
	}
});
