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

	requires: [
		'Ext.form.Panel'
	],
	controller: 'modalWindow',
	width: 600,
	height: 400,
	modal: true,
	items: {
		xtype: 'form',
		id: 'customForm',
		items: [
			{
				xtype: 'textfield',
				fieldLabel: 'name',
				name: 'name',
				flex: 1,
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
				convert: function () {

				}
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
				layout: {
					type: 'hbox',
				},
				items: [{
					xtype: 'datefield',
					name: 'datecolumn',
					fieldLabel: 'date',
					format: 'Y-m-d',
					allowBlank: false,
					bind: {
						value: '{user.datecolumn}'
					}
				}, {
					xtype: 'timefield',
					name: 'timecolumn',
					fieldLabel: 'time',
					format: 'g:i:s',
					allowBlank: false
				}]
			}, {
				xtype: 'button',
				text: 'Сохранить',
				handler: 'saveData'
			}, {
				xtype: 'button',
				text: 'Закрыть',
				listeners: {
					click: function() {

					}
				}
			}
		],
	}
});