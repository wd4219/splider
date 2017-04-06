const mongoose = require('mongoose');
const RestaurantModel = require('../models/restaurant');

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
},
exports.findone = function(req,res){
  RestaurantModel.findOne({id:'553877'},function(err,restaurant){
    if(err){
      console.log(err);
    }
    console.log(!restaurant);
    
  });
}
exports.find = function(cb){
  RestaurantModel.find({},function(err,restaurant){
    if(err){
      console.log('查询出错！');
    }
    else{
      var result = []
      for(let i = 0;i < restaurant.length;i++){
        result.push(restaurant[i].id);
      }
      cb(result);
    }
  });
}