/**
 * Created by championswimmer on 14/09/16.
 */
const {app, Menu, Tray} = require('electron')
const path = require('path')

let tray = null
app.on('ready', () => {
    tray = new Tray(path.join(__dirname, 'img', 'white-smiley.png'))
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Item1', type: 'radio'},
        {label: 'Item2', type: 'radio'},
        {label: 'Item3', type: 'radio', checked: true},
        {label: 'Item4', type: 'radio'}
    ])
    tray.setToolTip('This is my application.')
    tray.setContextMenu(contextMenu)
    console.log(tray)
})

