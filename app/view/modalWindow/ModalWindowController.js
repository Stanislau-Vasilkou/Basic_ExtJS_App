Ext.define('MyApp.view.modalWindow.ModalWindowController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.modalWindow',

	closeModal: function (thisWindow) {
		console.log(thisWindow);
		if (!thisWindow.isConfirmed) {
			Ext.MessageBox.confirm('Confirmation', 'Are you sure you wish to close this window before saving your changes?', function (btn) {
				if (btn === 'yes') {
					thisWindow.isConfirmed = true;
					thisWindow.close();
				}
			});
			return false;
		}
	},

	saveEditedData: function () {
		let vm = this.getViewModel();
		// let selectedData = vm.get('selectedRow');
		// let editedData = vm.get('editedRow');
		// let time = Ext.Date.format(editedData['timecolumn'], 'g:i:s');
		// let date = Ext.Date.format(editedData['datecolumn'], 'Y-m-d');
		// let fullDate = new Date(`${date} ${time}`);
		// selectedData.set('datecolumn', fullDate);
		// selectedData.set('numbercolumn', editedData['numbercolumn']);
		console.log(vm);
		this.getView().close();
	}
});