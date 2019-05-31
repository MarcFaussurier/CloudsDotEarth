require("./http_server.js");

const fs = require('fs');
const glob = require("glob");

// Module to control application life, browser window and tray.
const { ipcMain, app, BrowserWindow } = require('electron');

// Electron settings from .json file.
const cdvElectronSettings = require('./cdv-electron-settings.json');

// Needed client side javascript files
const clientJSFiles = ["/cordova.js", "/cordova_plugins.js"] 

glob.sync(__dirname + "/plugins/**/*.js").forEach(element => {
    clientJSFiles.push(element.split(__dirname)[1]);
});

glob.sync(__dirname + "/../../../www/dist/js/*.js").forEach(element => {
    clientJSFiles.push("/../../../www" + element.split("www")[1]);
});

const cssFiles = [];

glob.sync(__dirname + "/../../../www/dist/css/*.css").forEach(element => {
    cssFiles.push(element.split("www")[1]);
});

let mainWindow;

function createWindow () {
  //  console.log(__dirname);
    // Create the browser window.
    let appIcon;
    if (fs.existsSync(`${__dirname}/img/app.png`)) {
        appIcon = `${__dirname}/img/app.png`;
    } else if (fs.existsSync(`${__dirname}/img/icon.png`)) {
        appIcon = `${__dirname}/img/icon.png`;
    } else {
        appIcon = `${__dirname}/img/logo.png`;
    }
    // load needed client javascripts
    for(let i = 0; i < clientJSFiles.length; i++ ) {
        clientJSFiles[i] = [clientJSFiles[i], fs.readFileSync(__dirname + clientJSFiles[i])];
    }
    const browserWindowOpts = Object.assign({}, cdvElectronSettings.browserWindow, { icon: appIcon });
    mainWindow = new BrowserWindow(browserWindowOpts);
    mainWindow.loadURL(`https://www.google.com/maps/@45.7555968,4.9035559,6080m/data=!3m1!1e3`);
    mainWindow.hide();
    mainWindow.webContents.on('did-finish-load', function () {
        mainWindow.webContents.send('window-id', mainWindow.id);
        mainWindow.webContents.executeJavaScript(`var HOME_DIR = window.atob("`+Buffer.from(__dirname).toString('base64')+`");`);
        mainWindow.webContents.executeJavaScript(`var CSS_FILES = JSON.parse(window.atob("`+Buffer.from(JSON.stringify(cssFiles)).toString('base64')+`"));`);

        // run needed client javascripts
        for(let i = 0; i < clientJSFiles.length; i++ ) {
            mainWindow.webContents.executeJavaScript(`console.log("Executing: `+clientJSFiles[i][0]+` ");`);
            let shouldContinue = true;

            if (shouldContinue) {
                mainWindow.webContents.executeJavaScript(`eval( window.atob("` + Buffer.from(clientJSFiles[i][1]).toString('base64') + `"));`); 
            }
        }
        mainWindow.webContents.executeJavaScript(`console.log("AppIcon: `+appIcon+`");`);
        mainWindow.webContents.executeJavaScript(`console.log("All javascripts executed.");`);
        setTimeout(() => {
            mainWindow.show();
        }, 750);
    }.bind(mainWindow));

    // Open the DevTools.
    if (cdvElectronSettings.browserWindow.webPreferences.devTools) {
        mainWindow.webContents.openDevTools();
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
