const express = require("express");
const absen = express.Router();
const {
  tambahAbsen,
  tampilAbsen,
  hapusAbsen,
  editAbsen,
} = require("../Models/AbsensiModel");

absen.post("/", (req, res) => {
  // tangkap data dari request
  let data = req.body;

  tambahAbsen(data)
    .then((result) => {
      res.status(201).json({
        pesan: "data berhasil dimasukkan",
        rows: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        pesan: "error pada MySQL Syntax",
      });
    });
});

absen.get("/", (req, res) => {
  // function model tampil Absen
  tampilAbsen()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json({
        pesan: "tidak bisa menampilkan data",
      });
    });
});

absen.delete("/", (req, res) => {
  let data = req.body;

  hapusAbsen(data)
    .then((result) => {
      if (result > 0) {
        res.status(200).json({
          pesan: "berhasil menghapus data",
        });
      } else {
        res.status(404).json({
          pesan: "Data yang akan dihapus tidak ditemukan",
        });
      }
    })
    .catch((err) => {
      res.status(401).json({
        pesan: "gagal menghapus pesan",
      });
    });
});

absen.patch("/edit/:id", (req, res) => {
    let id = req.params.id;

    let data = req.body;

    editAbsen(id, data)
    .then((result) => {
        if (result > 0) {
            res.status(200).json({
                hasil : result,
                pesan: "data berhasil diubah"
            });
        } else {
            res.status(404).json({
                pesan: "data yang akan diubah tidak ditemukan"
            })
        }
    })
    .catch((err) => console.log(err))
});

module.exports = absen;
