const catInfoModel = require('../models/catInfoModel');

function getCatInfo(breed) {
  return catInfoModel.getCatInfo(breed);
}

module.exports = { getCatInfo };
