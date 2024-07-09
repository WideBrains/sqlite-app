const dbmgr = require("./dbman")
const db = dbmgr.db

const readAllPersons = () => {
    try {
        const query = `SELECT * FROM person`
        const readQuery = db.prepare(query)
        const rowList = readQuery.all()
        return rowList
    } catch (err) {
        console.error(err)
        throw err
    }
}

const insertPerson = (name, age) => {
    try {
        const insertQuery = db.prepare(
            `INSERT INTO person (name, age) VALUES ('${name}' , ${age})`
        )

        const transaction = db.transaction(() => {
            const info = insertQuery.run()
            console.log(
                `Inserted ${info.changes} rows with last ID 
                 ${info.lastInsertRowid} into person`
            )
        })
        transaction()
    } catch (err) {
        console.error(err)
        throw err
    }
}

const createTablePerson = ()=>{
    try{
        const createTableQuery = db.prepare(
            "CREATE TABLE person (name TEXT NOT NULL, age INT NOT NULL);"
        );
        const transaction = db.transaction(()=>{
            const info = createTableQuery.run();
            console.log(
                `Created Table person`
            )
        });
        transaction()
    }catch(err){
        console.error(err)
        throw err
    }
}

module.exports = {
    readAllPersons,
    insertPerson,
    createTablePerson
}