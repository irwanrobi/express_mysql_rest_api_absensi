const db = require("./Connection");

// membuat function Tambah Data Absen
const tambahAbsen = async (data) => {
  return await db
    .table("siswa")
    .insert(data)
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

// function untuk menampilkan data absen
const tampilAbsen = async () => {
  return await db
    .from("siswa")
    .select("*")
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

// function untuk menghapus absen
const hapusAbsen = async (data) => {
  return await db("siswa")
    .where(data)
    .del()
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

// function untuk mengubah absen
const editAbsen = async (id, data) => {
  return await db("siswa")
    .where({ id: id })
    .update(data)
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

// export module
module.exports = { tambahAbsen, tampilAbsen, hapusAbsen, editAbsen };
