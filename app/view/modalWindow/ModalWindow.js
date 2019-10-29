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
			fieldLabel: 'name',
			flex: 1,
			allowBlank: false,
			bind: {
				value: '{editedRow.name}'
			}
		}, {
			xtype: 'combobox',
			fieldLabel: 'region',
			valueField: 'abbr',
			displayField: 'name',
			queryMode: 'local',
			store: regions,
			allowBlank: false,
			bind: {
				value: '{editedRow.region}'
			}
		}, {
			xtype: 'tagfield',
			fieldLabel: 'skills',
			anchor: '100%',
			displayField: 'skill',
			valueField: 'id',
			store: skills,
			allowBlank: false,
			bind: {
				value: '{editedRow.skills}'
			},
			convert: function () {

			}
		}, {
			xtype: 'numberfield',
			fieldLabel: '№',
			hideTrigger: true,
			allowBlank: false,
			bind: {
				value: '{editedRow.numbercolumn}'
			}
		}, {
			xtype: 'container',
			layout: {
				type: 'hbox',
			},
			items: [{
				xtype: 'datefield',
				fieldLabel: 'date',
				format: 'Y-m-d',
				allowBlank: false,
				bind: {
					value: '{editedRow.datecolumn}'
				}
			}, {
				xtype: 'timefield',
				fieldLabel: 'time',
				format: 'g:i:s',
				allowBlank: false,
				bind: {
					value: '{editedRow.timecolumn}'
				}
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