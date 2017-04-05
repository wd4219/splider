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

// splider.restaurant(31.21597,121.46792);
splider.menu(302449);