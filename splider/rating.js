const superagent = require('superagent');
const splider = require('../splider/index');
const tools = require('../tools');
const config = require('../config');
const Image = require('../app/controllers/image');
const Rating = require('../app/controllers/rating');

/**
 * 爬取餐馆评价信息
 * 
 * @param {any} url 
 * @param {any} restaurant_id 
 * @param {any} callback 
 */
exports.getRating = function (url, restaurant_id, callback) {
  superagent.get(url).end(function (err, res) {
    if (err) {
      console.log(err);
    } else {
      res.body.forEach(function (item) {
        var item_ratings = [];
        item.item_ratings.forEach(function (item) {
          item_ratings.push({
            food_name: item.food_name
          });
        });
        var avatar_url = '';
        if (item.avatar) {
          var icon_name = tools.image_name(item.avatar);
          Image.save({
            url: tools.restarant_iamge(item.avatar, 1),
            name: icon_name
          });
          avatar_url = config.image_base_url + icon_name;
        }
        Rating.save({
          restaurant_id: restaurant_id,
          content: {
            avatar: avatar_url,
            item_ratings: item_ratings,
            rated_at: item.rated_at,
            rating_star: item.rating_star,
            rating_text: item.rating_text,
            time_spent_desc: item.time_spent_desc,
            username: item.username
          }
        });
      });
    }
    callback(null);
  });
}