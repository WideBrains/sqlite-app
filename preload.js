const {contextBridge} = require("electron")
const personDB = require("./db/PersonManager")

contextBridge.exposeInMainWorld("sqlite", {personDB})