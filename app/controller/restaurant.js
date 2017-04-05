const mongoose = require('mongoose');
const RestaurantModel = require('../model/restaurant');

exports.saveFromSplider = function(req,res){
  RestaurantModel.findOne({id:req.id},function(err,restaurant){
    if(err){
      console.log(err);
    }
    if(!restaurant){
      restaurant = new RestaurantModel(req);
      restaurant.save(function(err,restaurant){
        if(err){
          console.log(err);
        }
        else{
          console.log('restaurant保存成功');
        }
      });
    }
  });
}