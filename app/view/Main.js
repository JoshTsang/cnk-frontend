Ext.define("cnk.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: '菜单',
                iconCls: 'bookmarks',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '菜单'
                },

                html: [
                    "nothing here"
                ].join("")
            },
            {
                title: '已点',
                iconCls: 'compose',
				badgeText: '4',

				styleHtmlContent: true,
                scrollable: true,
                
                items: {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '已点'
                    },
                    
                html: [
                    "nothing here"
                ].join("")
            },
            {
                title: '关于',
                iconCls: 'info',

				styleHtmlContent: true,
                scrollable: true,
                
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '关于'
                },

                html: [
                    "nothing here"
                ].join("")
            }
        ]
    }
});
