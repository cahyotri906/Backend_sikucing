const express = require('express');
const router = express.Router();
const catInfoHandler = require('../handlers/catInfoHandler');
const imageController = require('../controllers/imageController');

// Endpoint untuk mendapatkan deskripsi berdasarkan ras kucing
router.get('/data/kucing', (req, res) => {
  const breed = req.query.breed;
  const {Ras,Deskripsi,Perawatan,Kucing,Makanan1,Makanan2,Makanan3,Vitamin1,Vitamin2,Vitamin3} = catInfoHandler.getCatInfo(breed);
  res.json({ Ras,Deskripsi,Perawatan,Kucing,Makanan1,Makanan2,Makanan3,Vitamin1,Vitamin2,Vitamin3 });
});

// Endpoint untuk menampilkan gambar
router.get('/images/:imageName', imageController.getImage);

module.exports = router;
