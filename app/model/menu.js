const mongoose = require('mongoose');
const MenuSchema = require('../schemas/menu');
const MenuModel = mongoose.model('Menu',MenuSchema);

module.exports = MenuModel;