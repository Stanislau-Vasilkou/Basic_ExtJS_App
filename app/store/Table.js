Ext.define('MyApp.store.Table', {
    extend: 'Ext.data.Store',

    alias: 'store.table',

    model: 'MyApp.model.Table',
	  pageSize: 5,
    data: { items: [
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },
        { numbercolumn: 1, datecolumn: new Date(), checkcolumn: true },

      ]},

    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
