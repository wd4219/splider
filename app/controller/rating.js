const mongoose = require('mongoose');
const RatingModel = require('../model/rating');

exports.save = function(req,res){
  RatingModel.findOne({restaurant_id:req.restaurant_id},function(err,menu){
    if(err){
      console.log(err);
    }
    if(!menu){
      menu = new RatingModel(req);
      menu.save(function(err,menu){
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