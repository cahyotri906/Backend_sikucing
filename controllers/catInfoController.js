const catInfoHandler = require('../handlers/catInfoHandler');

function getCatInfo(req, res) {
  const breed = req.query.breed; // Ambil dari query parameter atau dari data yang diterima
  const catInfo = catInfoHandler.getCatInfo(breed);
  res.json({ catInfo });
}

module.exports = { getCatInfo };
