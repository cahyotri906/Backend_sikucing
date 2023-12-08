const express = require('express');
const router = express.Router();
const catInfoHandler = require('../handlers/catInfoHandler');
const imageController = require('../controllers/imageController');

// Endpoint untuk mendapatkan deskripsi berdasarkan ras kucing
router.get('/data/kucing', (req, res) => {
  const breed = req.query.breed;
  const catInfo = catInfoHandler.getCatInfo(breed);

  if (!catInfo) {
    return res.status(404).json({ error: 'Ras kucing tidak ditemukan' });
  }

  const {
    Ras,
    Deskripsi,
    Perawatan,
    Kucing,
    Makanan,
    Vitamin,
  } = catInfo;

  const makananArray = Array.isArray(Makanan) ? Makanan.filter((food) => food !== '') : [Makanan];
  const vitaminArray = Array.isArray(Vitamin) ? Vitamin.filter((vit) => vit !== '') : [Vitamin];

  const responseData = {
    Ras,
    Deskripsi,
    Perawatan,
    Kucing,
    Makanan: makananArray,
    Vitamin: vitaminArray,
  };

  res.json(responseData);
});


router.get('/data/all', (req, res) => {
  const allCatInfo = catInfoHandler.getAllCatInfo().map((cat) => {
    const {
      Ras,
      Deskripsi,
      Perawatan,
      Kucing,
      Makanan,
      Vitamin,
    } = cat;

    // const makanan = [{Nama: 'Wiskas',Makanan1}, {Makanan2}, {Makanan3}].filter((food) => food !== '');
    // const vitamin = [Vitamin1, Vitamin2, Vitamin3].filter((vit) => vit !== '');

    return {
      Ras,
      Deskripsi,
      Perawatan,
      Kucing,
      Makanan,
      Vitamin,
    };
  });

  res.json(allCatInfo);
});

// Endpoint untuk menampilkan gambar
router.get('/images/:imageName', imageController.getImage);

module.exports = router;
