Ext.define('MyApp.view.modalWindow.ModalWindow', {
	extend: 'Ext.window.Window',
	title: 'Some modal window',
	xtype: 'modal',
	width: 400,
	height: 400,
	modal: true,
	items: [
		{
			xtype: 'textfield',
			value: 'Input your text',
			allowBlank: true,
			border: 2,
		}, {
			xtype: 'combobox',
			allowBlank: true,
			border: 2,

		}, {
			xtype: 'tagfield',
			allowBlank: true,
			border: 2,
		}, {
			xtype: 'numberfield',
			allowBlank: true,
			border: 2,
		}, {
			xtype: 'datefield',
			allowBlank: true,
			border: 2,
		}, {
			xtype: 'timefield',
			allowBlank: true,
			border: 2,
		}
	]
});