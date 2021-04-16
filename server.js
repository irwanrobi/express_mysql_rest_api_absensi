// import packagae
const express = require("express");
const cors = require("cors");
const app = express();

// import Controller
const absen = require("./Controllers/AbsensiController");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routing
app.use("/api/absen", absen)

// listener
app.listen(8000, () => {
    console.log("Aplikasi terhubung di Port 8000")
});