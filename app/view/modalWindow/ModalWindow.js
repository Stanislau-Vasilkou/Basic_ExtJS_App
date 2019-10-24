Ext.define('MyApp.view.modalWindow.ModalWindow', {
	extend: 'Ext.window.Window',
	title: 'Modal window',
	xtype: 'modal',
	store: {
		type: 'table'
	},
	controller: 'modalWindow',
	width: 400,
	height: 400,
	modal: true,
	items: [
		{
			xtype: 'textfield',
			flex: 1,
			emptyText: 'Input your text',
			allowBlank: false
		}, {
			xtype: 'combobox',
			allowBlank: false
		}, {
			xtype: 'tagfield',
			allowBlank: true
		}, {
			xtype: 'numberfield',
			bind: {
				value: '{editedRow.numbercolumn}'
			},
			hideTrigger: true,
			allowBlank: false
		}, {
			xtype: 'container',
			layout: {
				type: 'hbox'
			},
			items: [{
				xtype: 'datefield',
				format: 'Y-m-d',
				bind: {
					value: '{editedRow.datecolumn}'
				},
				allowBlank: false
			}, {
				xtype: 'timefield',
				format: 'g:i:s',
				bind: {
					value: '{editedRow.timecolumn}'
				},
				allowBlank: false,
			}]
		}, {
			xtype: 'button',
			text: 'Сохранить',
			handler: 'saveEditedData'
		}, {
			xtype: 'button',
			text: 'Закрыть',
			handler: 'closeModal',
		}
	],
});