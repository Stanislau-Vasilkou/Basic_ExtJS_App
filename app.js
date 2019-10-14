/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'BasicExtJSApp.Application',

    name: 'BasicExtJSApp',

    requires: [
        // This will automatically load all classes in the BasicExtJSApp namespace
        // so that application classes do not need to require each other.
        'BasicExtJSApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'BasicExtJSApp.view.main.Main'
});
