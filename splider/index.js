const superagent = require('superagent');
const tools = require('../tools');
const config = require('../config');
const Promise = require('bluebird');
const restaurant = require('./restaurant');
const rating = require('./rating');
const menu = require('./menu');
const async = require('async');
/**
 * 爬取餐馆信息的函数
 * 
 * @param {any} latitude 经度参数
 * @param {any} longitude 纬度参数
 */

module.exports.restaurant = function (latitude, longitude) {
  async.series([
     function(callback) {
        restaurant.getRestaurant('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=' + latitude + '&longitude=' + longitude + '&offset=0&limit=20&extras[]=activities&terminal=h5',callback);
    },
    function(callback) {
        restaurant.getRestaurant('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=' + latitude + '&longitude=' + longitude + '&offset=20&limit=20&extras[]=activities&terminal=h5',callback);
    },
    function(callback) {
        restaurant.getRestaurant('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=' + latitude + '&longitude=' + longitude + '&offset=40&limit=20&extras[]=activities&terminal=h5',callback);
    },
    function(callback) {
        restaurant.getRestaurant('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=' + latitude + '&longitude=' + longitude + '&offset=60&limit=20&extras[]=activities&terminal=h5',callback);
    },
    function(callback) {
        restaurant.getRestaurant('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=' + latitude + '&longitude=' + longitude + '&offset=80&limit=20&extras[]=activities&terminal=h5',callback);
    }
  ]);
  
}


/**
 * 爬取餐馆食物菜单
 * 
 * @param {any} restaurant_id 餐馆id
 */

module.exports.menu = function (restaurant_id) {
  menu.getMenu(restaurant_id);
}


/**
 * 爬取餐馆评论信息
 * 
 * @param {any} restaurant_id 餐馆id
 */
module.exports.rating = function (restaurant_id) {
  rating.getRating('https://mainsite-restapi.ele.me/ugc/v2/restaurants/' + restaurant_id + '/ratings?has_content=true&offset=0&limit=20', restaurant_id);
//   rating.getRating('https://mainsite-restapi.ele.me/ugc/v2/restaurants/' + restaurant_id + '/ratings?has_content=true&offset=20&limit=20', restaurant_id);
//   rating.getRating('https://mainsite-restapi.ele.me/ugc/v2/restaurants/' + restaurant_id + '/ratings?has_content=true&offset=40&limit=20', restaurant_id);
//   rating.getRating('https://mainsite-restapi.ele.me/ugc/v2/restaurants/' + restaurant_id + '/ratings?has_content=true&offset=60&limit=20',restaurant_id);
//   rating.getRating('https://mainsite-restapi.ele.me/ugc/v2/restaurants/' + restaurant_id + '/ratings?has_content=true&offset=80&limit=20',restaurant_id);
}