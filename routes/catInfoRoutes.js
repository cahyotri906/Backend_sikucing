// routes/catInfoRoutes.js

const express = require('express');
const catInfoController = require('../controllers/catInfoController');

const router = express.Router();

router.get('/catinfo', catInfoController.getCatInfo);

module.exports = router;
