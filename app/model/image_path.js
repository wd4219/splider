var mongoose = require('mongoose')
var ImagePathSchema = require('../schemas/image_path')
var ImagePath = mongoose.model('ImagePath', ImagePathSchema);

module.exports = ImagePath