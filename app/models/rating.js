const mongoose = require('mongoose');
const RatingSchema = require('../schemas/rating');
let RatingModel = mongoose.model('Rating',RatingSchema);

module.exports = RatingModel;