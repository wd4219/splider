var mongoose = require('mongoose');
var ImagePathSchema = require('../schemas/image_path')
var ImagePath = mongoose.model('ImagePath',ImagePathSchema);

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
          console.log('成功');
        }
      });
    }
  });
}