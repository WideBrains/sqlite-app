const Database = require("better-sqlite3")
const path = require("path")

let dbPath = "C:/Users/pitti/OneDrive/Documents/CDAC/sqlite-app/test.db";
const db = new Database(dbPath, {fileMustExist: true});
db.pragma("journal_mode = WAL");

exports.db = db;
