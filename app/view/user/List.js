Ext.define('TR.view.user.List', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.userlist',
    config: {
        title: 'User',
        iconCls: 'user',
        store: 'Users',
        itemTpl: '<img src="http://src.sencha.io/{[Ext.Viewport.getOrientation()]}/{photo_url}" />',
        iconMask: true,
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            ui: 'light',
            items: [{
                xtype: 'textfield',
                placeHolder: 'Search by user name...',
                flex: 1
            }]
        }]
    }
});