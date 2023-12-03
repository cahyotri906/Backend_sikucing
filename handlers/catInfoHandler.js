// catInfoHandler.js is responsible for handling the business logic
const catInfoModel = require('../models/catInfoModel');

function getCatInfo(breed) {
  return catInfoModel.getCatInfo(breed);
}

module.exports = { getCatInfo };
