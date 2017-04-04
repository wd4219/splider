const mongoose = require('mongoose');
const RestaurantSchema = require('../schemas/restaurant');
const RestaurantModel = mongoose.model('RestaurantModel',RestaurantSchema);

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
          console.log('成功');
        }
      });
    }
  });
}