Ext.define('MyApp.view.Table', {
    override:'Ext.view.Table',

    getMaskTarget: function () {
        let target = this.up().up();
        return target.body;
    }
});