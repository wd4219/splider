const mongoose = require('mongoose');
const Image = require('../models/image');

exports.save = function(req,res){
  Image.findOne({url:req.url},function(err,image){
    if(err){
      console.log(err);
    }
    if(!image){
      image = new Image(req);
      image.save(function(err,image){
        if(err){
          console.log(err);
        }
        else{
          console.log('image保存成功');
        }
      });
    }
  });
}
exports.find = function(cb){
  Image.find({},function(err,image){
    if(err){
      console.log(err);
    }
    else{
      var result = []
      for(let i = 0;i < image.length;i++){
        result.push({url:image[i].url,name:image[i].name});
      }
      Image.remove({},function(err){
        if(!err){
          console.log('删除成功');
        }
      });
      cb(result);
    }
  });
}
