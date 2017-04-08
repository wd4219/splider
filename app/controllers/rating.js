const mongoose = require('mongoose');
const RatingModel = require('../models/rating');

/**
 * 保存爬到评论的数据
 * 
 * @param {any} req 
 * @param {any} res 
 */
exports.save = function (req, res) {
  const rating = RatingModel(req);
  rating.save(function (err, rating) {
    if (err) {
      console.log(err);
    } else {
      console.log('rating保存成功');
    }
  });
}