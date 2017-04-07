const mongoose = require('mongoose');
const RestaurantModel = require('../models/restaurant');
const splider = require('../../splider/index');

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
          splider.rating(req.id);
        }
      });
    }
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