const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new mongoose.Schema({
  id:{
    unique:true,
    type:String
  },
  address:String,
  is_new:Boolean,
  latitude:String,
  longitude:String,
  opening_hours:[],
  order_lead_time:Number,
  phone:String,
  delivery_fee:Number,
  minimum_order_amount:Number,
  image_path:String,
  promotion_info:String,
  rating:Number,
  recent_order_num:Number,
  supports:[],
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

RestaurantSchema.pre('save',function(next){
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  }
  else {
    this.meta.updateAt = Date.now();
  }

  next();
});

module.exports = RestaurantSchema;