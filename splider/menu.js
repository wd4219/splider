const superagent = require('superagent');
const tools = require('../tools');
const config = require('../config');
const Image = require('../app/controllers/image');
const Menu = require('../app/controllers/menu');

/**
 * 抓取单个店铺菜单
 * 
 * @param {any} restaurant_id 店铺id
 */
exports.getMenu = function (restaurant_id) {
  superagent.get('https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id=' + restaurant_id)
    .set('User-Agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1')
    .end(function (err, res) {
      if (err) {
        console.log(err);
      } else {
        var menu = {
          restaurant_id: restaurant_id,
          content: []
        };
        console.log(res.body);
        res.body.forEach(function (item) {
          var foods = [];
          item.foods.forEach(function (item) {
            if (item.image_path) {
              var image_name = tools.image_name(item.image_path);
              Image.save({
                url: tools.restarant_iamge(item.image_path, 3),
                name: image_name
              });
            }
            foods.push({
              month_sales: item.month_sales,
              image_path: item.image_path ? config.image_base_url + image_name : '',
              name: item.name,
              satisfy_rate: item.satisfy_rate,
              description: item.description,
              original_price: item.specfoods[0].original_price,
              price: item.specfoods[0].price,
              sold_out: item.specfoods[0].sold_out
            });
          });
          if (item.icon_url) {
            var icon_name = tools.image_name(item.icon_url);
            Image.save({
              url: tools.restarant_iamge(item.icon_url, 2),
              name: icon_name
            });
          }
          menu.content.push({
            description: item.description,
            icon_url: item.icon_url ? (config.image_base_url + icon_name) : '',
            name: item.name,
            foods: foods
          });
        });
        Menu.save(menu);
      }
    });
    
}