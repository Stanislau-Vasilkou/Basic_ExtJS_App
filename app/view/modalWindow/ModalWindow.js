const regions = Ext.create('Ext.data.Store', {
	fields: ['abbr', 'name'],
	data: [
		{"abbr": "RU", "name": "Россия"},
		{"abbr": "BY", "name": "Беларусь"},
		{"abbr": "UA", "name": "Украина"},
		{"abbr": "PL", "name": "Польша"}
	]
});

const skills = Ext.create('Ext.data.Store', {
	fields: ['id', 'skill'],
	data: [
		{"id": "1", "skill": "Java"},
		{"id": "2", "skill": "JavaScript"},
		{"id": "3", "skill": "C#"},
		{"id": "4", "skill": ".NET"},
		{"id": "5", "skill": "Swift"}
	]
});


Ext.define('MyApp.view.modalWindow.ModalWindow', {
	extend: 'Ext.window.Window',
	title: 'Modal window',
	xtype: 'modal',
	controller: 'modalWindow',
	width: 400,
	height: 400,
	modal: true,
	items: [
		{
			xtype: 'textfield',
			flex: 1,
			bind: {
				value: '{editedRow.numbercolumn}'
			},
			allowBlank: false
		}, {
			xtype: 'combobox',
			valueField: 'abbr',
			displayField: 'name',
			queryMode: 'local',
			store: regions,
			bind: {
				value: '{editedRow.region}'
			},
			allowBlank: false
		}, {
			xtype: 'tagfield',
			anchor: '100%',
			displayField: 'skill',
			valueField: 'id',
			store: skills,
			bind: {
				value: '{editedRow.skills}'
			},
			allowBlank: false
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