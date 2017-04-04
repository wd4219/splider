const splider = require('./splider');
const tools = require('./tools');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');


const DB_URL = 'mongodb://localhost/xiaodiwaimai';

mongoose.connect(DB_URL);
// var models_path = __dirname + '/app/models'
// var walk = function(path) {
//   fs
//     .readdirSync(path)
//     .forEach(function(file) {
//       var newPath = path + '/' + file
//       var stat = fs.statSync(newPath)

//       if (stat.isFile()) {
//         if (/(.*)\.(js|coffee)/.test(file)) {
//           require(newPath)
//         }
//       }
//       else if (stat.isDirectory()) {
//         walk(newPath)
//       }
//     })
// }
// walk(models_path)
// console.log(tools.restarant_iamge('5da3872d782f707b4c82ce4607c73d1ajpeg'));
splider.restaurant(31.20597,121.46792);


// splider.menu(161235);
// splider.rating(161235);
