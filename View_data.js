// Import the sqlite3 package
const sqlite3 = require('sqlite3').verbose();

// 1. Connect to your database file (in Read-Only mode for safety)
const db = new sqlite3.Database('./students.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Successfully connected to the students database.\n");
    }
});

// 2. Run the SQL query to retrieve all data
db.all("SELECT * FROM students", [], (err, rows) => {
    if (err) {
        console.error("Error retrieving data:", err.message);
        return;
    }
    
    // 3. Print the data as a beautiful table in CMD!
    console.table(rows); 
    
    // 4. Close the database connection when finished
    db.close((err) => {
        if (err) {
            console.error("Error closing database:", err.message);
        }
    });
});