const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RatingSchema = new Schema({
  restaurant_id:{
    type:String
  },
  content:{},
  meta:{
    createAt:{
      type:Date,
      default:Date.now()
    },
    updateAt:{
      type:Date,
      default:Date.now()
    }
  } 
});

RatingSchema.pre('save',function(next){
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt=Date.now();
  }
  else{
    this.meta.updateAt = Date.now();
  }
  next();
});

module.exports = RatingSchema;