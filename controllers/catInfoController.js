// catInfoController.js is responsible for handling request and response for cat info endpoint
const catInfoHandler = require('../handlers/catInfoHandler');

function getCatInfo(req, res) {
  const breed = req.query.breed; // Ambil dari query parameter atau dari data yang diterima
  const {Ras,Deskripsi,Perawatan,Images} = catInfoHandler.getCatInfo(breed);
  res.json({ Ras,Deskripsi,Perawatan,Images });
}

module.exports = { getCatInfo };
