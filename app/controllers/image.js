const mongoose = require('mongoose');
const Image = require('../models/image');

/**
 * 保存爬到图片的数据
 * 
 * @param {any} req 
 * @param {any} res 
 */
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
      cb(result);
    }
  }).limit(200);
}
exports.delete = function(name){
  Image.find({'name':name},function(err,res){
    if(err){
      console.log(err);
    }
    else{
      if(res){
        Image.remove({'name':name},function(err){
          if(err){
            console.log(err);
          }
          else{
            console.log('delete success');
          }
        });
      }
    }
  })
}
