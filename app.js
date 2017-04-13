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


mongoose.connect(DB_URL);
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
Image.find(file.downLoadImage);
