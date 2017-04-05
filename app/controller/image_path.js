const mongoose = require('mongoose');
const ImagePath = require('../model/image_path');

exports.save = function(req,res){
  ImagePath.findOne({url:req.url},function(err,imagepath){
    if(err){
      console.log(err);
    }
    if(!imagepath){
      imagepath = new ImagePath(req);
      imagepath.save(function(err,imagepath){
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