const splider = require('./splider');
const tools = require('./tools');
const mongoose = require('mongoose');
const file = require('./file/index');
const Image = require('./app/controllers/image');
const Restaurant = require('./app/controllers/restaurant');
const schedule = require('node-schedule');
const DB_URL = 'mongodb://localhost/xiaodiwaimai';

mongoose.connect(DB_URL);
// mongoose.set('debug', true);


splider.restaurant(30.25924,120.21937);


// Image.find(file.downLoadImage);