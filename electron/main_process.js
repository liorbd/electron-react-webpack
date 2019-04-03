const path = require('path');
// Basic init
const electron = require('electron')
const {app, BrowserWindow, dialog} = electron

// Let electron reloads by itself when webpack watches changes in ./app/
// require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 600})
    dialog.showMessageBox(mainWindow, {message: JSON.stringify(process.env)})
    if (process.env.ELECTRON_ENV === "development") {
        mainWindow.loadURL(`http://localhost:8000`)
    }
    else {
        const index = path.resolve(__dirname, '../dist/index.html');
        mainWindow.loadURL(`file://${index}`);
    }
})
