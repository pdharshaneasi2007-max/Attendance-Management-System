# Attendance-Management-System
This code defines a dynamic Student Management System interface designed to track student records, attendance, and grades.
#command of projects:
Here is the complete, single list of all the commands you need for your project, from setup to running the server and navigating the terminal:

* **`npm init -y`** — Creates the `package.json` file to initialize a new Node.js project.
* **`npm install express sqlite3`** — Downloads and inserts the core Express and SQLite libraries.
* **`npm install -D nodemon`** — Installs Nodemon as a development tool so your server auto-restarts on save.
* **`npm run dev`** — Runs the server using Nodemon (Best for development).
* **`npm start`** — Runs the server normally using Node (Best for final production).
* **`node server.js`** — The direct command to run the server without using `package.json` shortcuts.
* **`start http://localhost:3000`** — Automatically opens your default web browser to your website.
* **`curl http://localhost:3000/api/students`** — Fetches and prints the raw JSON data from your live server API directly into CMD.
* **`node view_data.js`** — Runs your custom script to print the database data as a beautiful table in CMD.
* **`cd C:\path\to\your\folder`** — Moves CMD into your specific project folder (Change Directory).
* **`cls`** — Clears all the messy text off the CMD window to give you a clean slate.
* **`Ctrl + C`** — A keyboard shortcut that stops the currently running server so you can type new commands.
* **`dir`** — Lists all the files and folders currently inside your directory.
* **`sqlite3 students.db`** — Opens your database file inside CMD (requires downloading the official SQLite tool).
* **`.mode table`** — Formats the raw SQL output to look like a clean grid/table inside the SQLite CLI.
* **`SELECT * FROM students;`** — The SQL query to view all rows and columns in the students table.
* **`.quit`** — Exits the database and returns you to the normal Windows CMD.
