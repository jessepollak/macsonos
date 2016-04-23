import { app, BrowserWindow, Menu, crashReporter, shell } from 'electron';
import menubar from 'menubar'

crashReporter.start();

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
}

let m = menubar({
  dir: './app',
  width: 200,
  height: 200
})

m.on('after-create-window', () => {
  if (process.env.NODE_ENV == 'development') {
    m.window.openDevTools({ detach: true })
  }
})
