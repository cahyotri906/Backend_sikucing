// handlers/imageHandler.js

const imageModel = require('../models/imageModel');

function getAllImages() {
  return imageModel.getImages();
}

module.exports = { getAllImages };
