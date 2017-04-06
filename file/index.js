const fs = require('fs');
const http = require('http');


exports.downLoadImage = function (result) {
  result.forEach(function (item) {
    http.get(item.url, function (res) {
      var imgData = "";
      res.setEncoding("binary");
      res.on("data", function (chunk) {
        imgData += chunk;
      });
      res.on("end", function () {
        var path = './download/' + item.name;
        fs.writeFile(path, imgData, "binary", function (err) {
          if (err) {
            console.log("down fail");
          }
          console.log("down success");
        });
      });
    });
  });
}