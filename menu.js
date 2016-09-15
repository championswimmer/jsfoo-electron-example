const { Menu, app, shell } = require('electron');
const defaultMenu = require('electron-default-menu');
const dialog = require('dialog');

app.on('ready', () => {
    // Get template for default menu
    const menu = defaultMenu(app, shell);
    // Add custom menu
    menu.splice(4, 0, {
        label: 'Custom',
        submenu: [
            {
                label: 'Do something',
                click: (item, focusedWindow) => {
                    dialog.info("Yay did something ! ", "Done something")
                }
            }
        ]
    })
    // Set top-level application menu, using modified template
    Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
})
 