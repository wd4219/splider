const mongoose = require('mongoose');
const RatingSchema = require('../schemas/rating');
let RatingModel = mongoose.model('RatingModel',RatingSchema);

module.exports = RatingModel;