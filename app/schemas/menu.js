const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MenuSchema = new mongoose.Schema({
  restaurant_id:{
    unique:true,
    type:String
  },
  content:[],
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

MenuSchema.pre('save',function(next){
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt=Date.now();
  }
  else{
    this.meta.updateAt = Date.now();
  }
  next();
});

module.exports = MenuSchema;