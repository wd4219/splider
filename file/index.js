const fs = require('fs');
const http = require('http');

exports.downLoadImage = function (result) {
  // result.forEach(function (item) {
  //   http.get(item.url, function (res) {
  //     var imgData = "";
  //     res.setEncoding("binary");
  //     res.on("data", function (chunk) {
  //       imgData += chunk;
  //     });
  //     res.on("end", function () {
  //       var path = './download/' + item.name;
  //       fs.writeFile(path, imgData, "binary", function (err) {
  //         if (err) {
  //           console.log("down fail");
  //         }
  //         console.log("down success");
  //       });
  //     });
  //   });
  // });
   http.get('http://fuss10.elemecdn.com/a/79/0b3414e103133ab4134ef75593d53jpeg.jpeg?imageMogr/format/webp/', function (res) {
      var imgData = "";
      res.setEncoding("binary");
      res.on("data", function (chunk) {
        imgData += chunk;
      });
      res.on("end", function () {
        var path = './download/' + 'dajuldajkl.jpeg';
        fs.writeFile(path, imgData, "binary", function (err) {
          if (err) {
            console.log("down fail");
          }
          console.log("down success");
        });
      });
    });
}