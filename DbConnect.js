const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./TestDB.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Database created in memory');
});

const OpenDatabase = (databasePath) => {
    new sqlite3.Database(databasePath, (err) => {
        close.error(err.message);
    })
}

const QueryDatabase = (databaseObject, query) => {
    databaseObject.all(query, [], (err, rows) => {
        if (err) {
            console.log("Error accessing database.");
        }
    })
}

const CloseDatabase = (databaseObject) => {
    databaseObject.close();
}

const DataAccessor = {
    OpenDatabase,
    CloseDatabase,
    QueryDatabase
}

export default DataAccessor;