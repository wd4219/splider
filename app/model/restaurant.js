const mongoose = require('mongoose');
const RestaurantSchema = require('../schemas/restaurant');
const RestaurantModel = mongoose.model('RestaurantModel',RestaurantSchema);

module.exports = RestaurantModel;