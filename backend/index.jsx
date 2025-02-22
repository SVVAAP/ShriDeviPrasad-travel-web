const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Create Data
app.post('/vehicles', (req, res) => {
    const { title, description, imagesrc } = req.body;
    const sql = 'INSERT INTO vehicles (title, description, imagesrc) VALUES (?, ?, ?)';
    db.query(sql, [title, description, imagesrc], (err, result) => {
        if (err) throw err;
        res.send({ id: result.insertId, title, description, imagesrc });
    });
});

app.post('/services', (req, res) => {
    const { icon, title, description } = req.body;
    const sql = 'INSERT INTO services (icon, title, description) VALUES (?, ?, ?)';
    db.query(sql, [icon, title, description], (err, result) => {
        if (err) throw err;
        res.send({ id: result.insertId, icon, title, description });
    });
});

app.post('/package', (req, res) => {
    const { title, description, image } = req.body;
    const sql = 'INSERT INTO package (title, description, image) VALUES (?, ?, ?)';
    db.query(sql, [title, description, image], (err, result) => {
        if (err) throw err;
        res.send({ id: result.insertId, title, description, image });
    });
});

app.post('/booking', (req, res) => {
    const { name, email, phone, date, booking_date, booking_time, package_id, vehicle_id, no_passengers } = req.body;
    const sql = 'INSERT INTO booking (name, email, phone, date, booking_date, booking_time, package_id, vehicle_id, no_passengers) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, email, phone, date, booking_date, booking_time, package_id, vehicle_id, no_passengers], (err, result) => {
        if (err) throw err;
        res.send({ id: result.insertId, name, email, phone, date, booking_date, booking_time, package_id, vehicle_id, no_passengers });
    });
});

// Retrieve Data
app.get('/vehicles', (req, res) => {
    db.query('SELECT * FROM vehicles', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/services', (req, res) => {
    db.query('SELECT * FROM services', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/package', (req, res) => {
    db.query('SELECT * FROM package', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/booking', (req, res) => {
    db.query('SELECT * FROM booking', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});