Ext.define('MyApp.view.main.cars.Car', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    fields: [
        {name: 'brand', type: 'string'},
        {name: 'model', type: 'string'},
        {name: 'year', type: 'number'},
    ]
});

Ext.define('MyApp.view.main.cars.Cars', {
    extend: 'Ext.data.Store',
    alias: 'store.cars',
	pageSize: 5,
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'http://localhost:3000/cars',
		enablePaging: true,
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}
});

Ext.define('MyApp.view.main.cars.CarsModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.carsmodel',

	data: {
		name: 'MyApp',
	},

	stores: {
		Cars: {
			type: 'cars'
		}
	},
});