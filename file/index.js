const fs = require('fs');
const http = require('http');
const superagent = require('superagent');
const OSS = require('ali-oss').Wrapper;
const Image = require('../app/controllers/image');

exports.downLoadImage = function (result) {
  const client = new OSS({
    region: 'oss-cn-shenzhen',
    accessKeyId: 'LTAIQM3IZQg4blnJ',
    accessKeySecret: 'G5Wni5yILnzAITPceB56BVZcmrQ3mP',
    bucket: 'xiaodiwaimai'
  });
  result.forEach(function (item) {
    var req = superagent.get(item.url).set({
      Origin: 'https://h5.ele.me',
      Referer: 'https://h5.ele.me/msite/',
    });
    client.putStream(item.name, req).then(function (res) {
      console.log('upload success');
      Image.delete(item.name);
    }).catch(function (err) {
      console.log('upload fail')
    });
  })
}