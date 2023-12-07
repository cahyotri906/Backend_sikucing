// catInfoHandler.js is responsible for handling the business logic
const catInfoModel = require('../models/catInfoModel');

function getCatInfo(breed) {
  return catInfoModel.getCatInfo(breed);
}
function getAllCatInfo() {
  return catInfoModel.getAllCatInfo();
}
module.exports = { getCatInfo,getAllCatInfo };
