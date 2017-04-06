const Restaurant = require('../app/controllers/restaurant');
const superagent = require('superagent');
const splider = require('../splider/index');
const tools = require('../tools');
const config = require('../config');
const Image = require('../app/controllers/image');

exports.getRestaurant = function (url,callback) {
  superagent.get(url).
  end(function (err, res) {
      res.body.forEach(function (item) {
        var activities = [];
        item.activities.forEach(function (act_item) {
          activities.push({
            description: act_item.description,
            icon_name: act_item.icon_name,
            icon_color: act_item.icon_color,
          });
        });
        var supports = [];
        item.supports.forEach(function (sup_item) {
          supports.push({
            description: sup_item.description,
            icon_name: sup_item.icon_name,
            icon_color: sup_item.icon_color,
          });
        });
        if (item.image_path) {
          var image_name = tools.image_name(item.image_path);
          Image.save({
            url: tools.restarant_iamge(item.image_path, 1),
            name: image_name
          });
        }

        var data = {
          activities: activities,
          address: item.address,
          is_new: item.is_new,
          id: item.id,
          name: item.name,
          latitude: item.latitude,
          longitude: item.longitude,
          opening_hours: item.opening_hours,
          order_lead_time: item.order_lead_time,
          phone: item.phone,
          delivery_fee: item.float_delivery_fee,
          minimum_order_amount: item.float_minimum_order_amount,
          image_path: item.image_path ? (config.image_base_url + image_name) : '',
          promotion_info: item.promotion_info,
          rating: item.rating,
          recent_order_num: item.recent_order_num,
          supports: supports
        }
        Restaurant.saveFromSplider(data);
        splider.rating(item.id);
      });
      callback(null);
  });
}