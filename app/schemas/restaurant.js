const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RestaurantSchema = new Schema({
  id: {
    unique: true,
    type: String
  },
  activities:[],
  address: String,
  is_new: Boolean,
  is_brand: Boolean,
  name: String,
  coordinate:[],
  opening_hours: [],
  order_lead_time: Number,
  phone: String,
  delivery_fee: Number,
  minimum_order_amount: Number,
  image_path: String,
  promotion_info: String,
  rating: Number,
  recent_order_num: Number,
  supports: [],
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

RestaurantSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }

  next();
});
RestaurantSchema.index({'coordinate':'2dsphere'});

module.exports = RestaurantSchema;