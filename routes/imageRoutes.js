// imageRoutes.js berisi definisi endpoint khusus untuk menampilkan gambar
const express = require('express');
const imageController = require('../controllers/imageController');

const router = express.Router();

// Menyediakan endpoint khusus untuk menampilkan gambar
router.get('/images/:imageName', imageController.getImage);

module.exports = router;
