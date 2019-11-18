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
	minWidth: 400,
	title: 'Modal window',
	xtype: 'modal',
	controller: 'modalWindow',
	viewModel: {
		type: 'main',
		data: {
			Id: null
		}
	},
	modal: true,
	padding: 10,
	items: [
		{
			xtype: 'form',
			id: 'customForm',
			items: [
				{
					xtype: 'textfield',
					fieldLabel: 'name',
					name: 'name',
					allowBlank: false,
					bind: {
						value: '{user.name}'
					}
				}, {
					xtype: 'combobox',
					fieldLabel: 'region',
					name: 'region',
					valueField: 'name',
					displayField: 'name',
					queryMode: 'local',
					store: regions,
					allowBlank: false,
					bind: {
						value: '{user.region}'
					}
				}, {
					xtype: 'tagfield',
					fieldLabel: 'skills',
					name: 'skills',
					anchor: '100%',
					displayField: 'skill',
					valueField: 'skill',
					store: skills,
					allowBlank: false,
					bind: {
						value: '{user.skills}'
					},
				}, {
					xtype: 'numberfield',
					fieldLabel: 'salary',
					name: 'salary',
					hideTrigger: true,
					format: '0',
					allowBlank: false,
					bind: {
						value: '{user.salary}'
					}
				}, {
					xtype: 'container',
					layout: 'hbox',
					items: [
						{
							xtype: 'datefield',
							fieldLabel: 'date',
							name: 'datecolumn',
							format: 'Y-m-d',
							allowBlank: false,
							bind: {
								value: '{user.datecolumn}'
							}
						}, {
							xtype: 'timefield',
							fieldLabel: 'time',
							name: 'timecolumn',
							padding: '0 0 0 10',
							format: 'g:i:s',
							allowBlank: false
						}]
				}]
		}, {
			xtype: 'container',
			minWidth: 600,
			margin: '10 0 0 0',
			id: 'cont',
			items: [
				{
					xtype: 'button',
					width: 100,
					text: 'Сохранить',
					handler: 'saveData'
				}, {
					xtype: 'button',
					width: 100,
					text: 'Закрыть',
					handler: 'close'
				}
			],
			layout: {
				type: 'hbox',
				pack: 'end',
				align: 'middle'
			},
		}]
});