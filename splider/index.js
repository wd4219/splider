const superagent = require('superagent');
const tools = require('../tools');
const config = require('../config');
const Restaurant = require('../app/controller/restaurant');
const ImagePath = require('../app/controller/image_path');
/**
 * 爬取餐馆信息的函数
 * 
 * @param {any} latitude 经度参数
 * @param {any} longitude 纬度参数
 */
module.exports.restaurant = function (latitude,longitude) {
  let url = 'https://mainsite-restapi.ele.me/shopping/restaurants?latitude='+ latitude + '&longitude='+longitude+'&offset=0&limit=20&extras[]=activities&terminal=h5'
  superagent.get(url).end(function (err, res) {
    var restaurants = [];
    var image = []
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
      var image_name = tools.image_name(item.image_path);
      image.push({
        url:tools.restarant_iamge(item.image_path,1)
      });
      ImagePath.save({
        url:tools.restarant_iamge(item.image_path,1)
      });
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
        image_path: config.image_base_url+image_name,
        promotion_info: item.promotion_info,
        rating: item.rating,
        recent_order_num: item.recent_order_num,
        supports: supports
      }
      Restaurant.saveFromSplider(data);
    });
  });
}

/**
 * 爬取餐馆食物菜单
 * 
 * @param {any} restaurant_id 餐馆id
 */
module.exports.menu=function(restaurant_id){
  superagent.get('https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id='+restaurant_id).end(function(err,res){
    var menu = {
      restaurant_id:restaurant_id,
      content:[]
    }
    if(!err){
      res.body.forEach(function(item){
        var foods = [];
        item.foods.forEach(function(item){
          foods.push({
            month_sales:item.month_sales,
            image_path:item.image_path,
            name:item.name,
            satisfy_rate:item.satisfy_rate,
            description:item.description,
            original_price:item.specfoods[0].original_price,
            price:item.specfoods[0].price,
            sold_out:item.specfoods[0].sold_out
          })
        });
        menu.content.push({
          description:item.description,
          icon_url:item.icon_url,
          name:item.name,
          foods:foods
        });
      });
      console.log(JSON.stringify(menu));
    }
  })
}

/**
 * 爬取餐馆评论信息
 * 
 * @param {any} restaurant_id 餐馆id
 */
module.exports.rating = function(restaurant_id){
  superagent.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+restaurant_id+'/ratings?has_content=true&offset=0&limit=10').end(function(err,res){
    var rating = {
      restaurant_id:restaurant_id,
      content:[],
    }
    res.body.forEach(function(item){
      var item_ratings = [];
      item.item_ratings.forEach(function(item){
        item_ratings.push({
          food_name:item.food_name
        });
      });
      rating.content.push({
        avatar:item.avatar,
        item_ratings:item_ratings,
        rated_at:item.rated_at,
        rating_star:item.rating_star,
        rating_text:item.rating_text,
        time_spent_desc:item.time_spent_desc,
        username:item.username
      });
    });
    console.log(JSON.stringify(rating));
  });
}
