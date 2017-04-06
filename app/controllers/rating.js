const mongoose = require('mongoose');
const RatingModel = require('../models/rating');

exports.save = function(req,res){
  RatingModel.findOne({restaurant_id:req.restaurant_id},function(err,rating){
    if(err){
      console.log(err);
    }
    if(!rating){
      rating = new RatingModel(req);
      rating.save(function(err,rating){
        if(err){
          console.log(err);
        }
        else{
          console.log('rating保存成功');
        }
      });
    }
  });
}