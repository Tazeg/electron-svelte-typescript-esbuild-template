//-------------------------
// main Electron file
//-------------------------

import { app, BrowserWindow, ipcMain } from 'electron'
import { IpcMainEvent } from 'electron/main'

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  mainWindow.loadFile('index.html')

  if (process.env.ELECTRON_MODE === 'dev') {
    mainWindow.webContents.openDevTools()
  }
} // createWindow

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// sample test
ipcMain.on('asynchronous-message', (event: IpcMainEvent, arg: string) => {
  console.log(arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong')
})

// HMR in dev mode
if (process.env.ELECTRON_MODE === 'dev') {
  console.log('electron-reloader active')
  try {
    // eslint-disable-next-line
    require('electron-reloader')(module)
  } catch (error) {
    console.error(error)
  }
}
