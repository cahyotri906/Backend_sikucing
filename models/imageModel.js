// models/imageModel.js

// Untuk mengelola operasi terkait gambar
// Contoh sederhana: hanya mengembalikan daftar nama file gambar
const fs = require('fs');

function getImages() {
  const imageFiles = fs.readdirSync('./images');
  return imageFiles;
}

module.exports = { getImages };
