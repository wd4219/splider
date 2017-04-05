const mongoose = require('mongoose');
const MenuModel = require('../model/menu');

exports.save = function(req,res){
  MenuModel.findOne({restaurant_id:req.restaurant_id},function(err,menu){
    if(err){
      console.log(err);
    }
    if(!menu){
      menu = new MenuModel(req);
      menu.save(function(err,menu){
        if(err){
          console.log(err);
        }
        else{
          console.log('menu保存成功');
        }
      });
    }
  });
}