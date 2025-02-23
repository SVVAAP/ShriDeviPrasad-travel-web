const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(bodyParser.json());

// ✅ Create a MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const db = pool.promise(); // Use promise-based queries

// ✅ Remove db.connect() (Not needed for a connection pool)

// CORS & Security Headers
app.use(cors({ origin: "http://localhost:3000" }));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "http://localhost:3000"],
        connectSrc: ["'self'", "http://localhost:5000"],
      },
    },
  })
);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("CSP Policy Updated");
});

// ✅ Use async/await with try-catch to prevent errors
app.post("/vehicles", async (req, res) => {
  try {
    const { title, description, imagesrc } = req.body;
    const sql = "INSERT INTO vehicles (title, description, imagesrc) VALUES (?, ?, ?)";
    const [result] = await db.execute(sql, [title, description, imagesrc]);
    res.send({ id: result.insertId, title, description, imagesrc });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// ✅ Add similar fixes for other routes
app.post("/services", async (req, res) => {
  try {
    const { icon, title, description } = req.body;
    const sql = "INSERT INTO services (icon, title, description) VALUES (?, ?, ?)";
    const [result] = await db.execute(sql, [icon, title, description]);
    res.send({ id: result.insertId, icon, title, description });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.post("/package", async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const sql = "INSERT INTO package (title, description, image) VALUES (?, ?, ?)";
    const [result] = await db.execute(sql, [title, description, image]);
    res.send({ id: result.insertId, title, description, image });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.post("/booking", async (req, res) => {
  try {
    const { name, email, phone, date, booking_date, booking_time, package_id, vehicle_id, no_passengers } = req.body;
    const sql =
      "INSERT INTO booking (name, email, phone, date, booking_date, booking_time, package_id, vehicle_id, no_passengers) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const [result] = await db.execute(sql, [name, email, phone, date, booking_date, booking_time, package_id, vehicle_id, no_passengers]);
    res.send({ id: result.insertId, name, email, phone, date, booking_date, booking_time, package_id, vehicle_id, no_passengers });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// ✅ Retrieve Data (Fix queries)
app.get("/vehicles", async (req, res) => {
  try {
    const [results] = await db.execute("SELECT * FROM vehicles");
    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/services", async (req, res) => {
  try {
    const [results] = await db.execute("SELECT * FROM services");
    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/package", async (req, res) => {
  try {
    const [results] = await db.execute("SELECT * FROM package");
    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/booking", async (req, res) => {
  try {
    const [results] = await db.execute("SELECT * FROM booking");
    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
