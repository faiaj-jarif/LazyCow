import { app, BrowserWindow, ipcMain, systemPreferences } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'

// Because we are using ES Modules (import), we have to manually recreate __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Connect our new preload script to the window
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.setMenu(null)

  // Listen for React asking for the color. We grab it from Windows, slice it to standard length, and add the '#'
  ipcMain.handle('get-accent-color', () => {
    const hexColor = systemPreferences.getAccentColor()
    return `#${hexColor.slice(0, 6)}`
  })

  // Point Electron to the Vite dev server URL
  mainWindow.loadURL('http://localhost:5173')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})