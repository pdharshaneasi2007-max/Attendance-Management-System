const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Tell the server to read JSON data and serve your HTML file
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Create and connect to the local SQLite database
const db = new sqlite3.Database('./students.db', (err) => {
    if (err) console.error('Error:', err.message);
    console.log('Connected to the SQLite database.');
});

// Create the table to store students
db.run(`CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    roll TEXT NOT NULL UNIQUE,
    attendance REAL NOT NULL,
    grade TEXT NOT NULL
)`);

// Logic to calculate grades
function calculateGrade(attendance) {
    if (attendance >= 90) return 'A';
    if (attendance >= 80) return 'B';
    if (attendance >= 70) return 'C';
    if (attendance >= 60) return 'D';
    return 'F';
}

// API: Get all students
app.get('/api/students', (req, res) => {
    db.all('SELECT * FROM students', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// API: Add a new student
app.post('/api/students', (req, res) => {
    const { name, roll, attendance } = req.body;
    const grade = calculateGrade(attendance);

    const sql = 'INSERT INTO students (name, roll, attendance, grade) VALUES (?, ?, ?, ?)';
    db.run(sql, [name, roll, attendance, grade], function(err) {
        if (err) return res.status(400).json({ error: 'Roll number already exists.' });
        res.json({ id: this.lastID, name, roll, attendance, grade });
    });
});

// API: Delete a student
app.delete('/api/students/:id', (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM students WHERE id = ?', id, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Deleted successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running! Open http://localhost:${PORT}`);
});