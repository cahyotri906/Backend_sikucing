const express = require('express');
const router = express.Router();
const catInfoHandler = require('../handlers/catInfoHandler');
const imageController = require('../controllers/imageController');

// Endpoint untuk mendapatkan deskripsi berdasarkan ras kucing
router.get('/images/deskripsi', (req, res) => {
  const breed = req.query.breed;
  const {Ras,Deskripsi,Perawatan,Images} = catInfoHandler.getCatInfo(breed);
  res.json({ Ras,Deskripsi,Perawatan,Images });
});

// Endpoint untuk menampilkan gambar
router.get('/images/:imageName', imageController.getImage);

module.exports = router;
