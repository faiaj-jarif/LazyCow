import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('lazyCowAPI', {
    getAccentColor: () => ipcRenderer.invoke('theme:get-accent-color')
})