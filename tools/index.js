const Rating = require('../app/models/rating');
const Image = require('../app/models/image');
const Menu = require('../app/models/menu');
const Restaurant = require('../app/models/restaurant');

module.exports.split_path = function(path){
  if(path.substr(-3) == 'png'){
    return path.substr(0,1) + '/'+path.substr(1,2)+'/' + path.substr(3) + '.png';
  }
  else{
    return path.substr(0,1) + '/'+path.substr(1,2)+'/' + path.substr(3)+'.jpeg';
  }
}
module.exports.image_name=function(path){
  if(path.substr(-3) == 'png'){
    return path+'.png';
  }
  else{
    return path+'.jpeg';
  }
}
module.exports.restarant_iamge = function(path,image_type){
  if(image_type == 1){//餐馆图标
    return 'http://fuss10.elemecdn.com/'+ this.split_path(path)+'?imageMogr/format/webp/';
  }
  if(image_type == 2){//右边分类条icon
    return 'http://fuss10.elemecdn.com/'+this.split_path(path);
  }
  if(image_type == 3){//食物图片
    return 'http://fuss10.elemecdn.com/' + this.split_path(path)+'?imageMogr/thumbnail/140x140/format/webp/quality/85';
  }
}

module.exports.empty = function(){
  Restaurant.remove({},function(){});
  Image.remove({},function(){});
  Menu.remove({},function(){});
  Rating.remove({},function(){});
}