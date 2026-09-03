const  { app, BrowserWindow } = require('electron')

const createNewWindow = () => {
    const win = new BrowserWindow ({
        width: 550,
        height: 900,
        resizable: true,
        autoHideMenuBar: true,
    })
    win.loadFile('index.html')}

app.whenReady().then(() => {
    createNewWindow()
})  