const splider = require('./splider');
const tools = require('./tools');
const mongoose = require('mongoose');
const file = require('./file/index');
const Image = require('./app/controllers/image');
const Restaurant = require('./app/controllers/restaurant');
const schedule = require('node-schedule');
const fs = require('fs');
const http = require('http');
const DB_URL = 'mongodb://localhost/xiaodiwaimai';
const superagent = require('superagent');
const OSS = require('ali-oss').Wrapper;

// mongoose.connect(DB_URL);
// mongoose.set('debug', true);

// tools.empty();
// splider.restaurant(30.25924,120.21937);

// Restaurant.find(function(results){
//   for(let i = 0;i < results.length;i++){
//     setTimeout(function(){
//       splider.menu(results[i]);
//     },i*2000);
//   }
// });
// Image.find(file.downLoadImage);
var req = superagent.get('http://fuss10.elemecdn.com/a/79/0b3414e103133ab4134ef75593d53jpeg.jpeg?imageMogr/format/webp/').set({
  Origin: 'https://h5.ele.me',
  Referer: 'https://h5.ele.me/msite/',
});
var stream = fs.createReadStream('./download/dajuldajkl.jpeg');
var client = new OSS({
  region: 'oss-cn-shenzhen',
  accessKeyId: 'LTAIQM3IZQg4blnJ',
  accessKeySecret: 'G5Wni5yILnzAITPceB56BVZcmrQ3mP',
  bucket:'xiaodiwaimai'
});

client.putStream('icon.jpeg', stream).then(function(res){
  console.log(res);
}).catch(function(err){
  console.log(err);
});