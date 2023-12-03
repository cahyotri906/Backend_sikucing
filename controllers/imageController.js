// imageController.js berisi fungsi-fungsi yang berhubungan dengan gambar
const path = require('path');

function getImage(req, res) {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, `../images/${imageName}`);

  // Mengirimkan file gambar
  res.sendFile(imagePath);
}

module.exports = { getImage };
