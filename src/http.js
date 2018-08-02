"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var req = http_1.get("http://172.18.1.16:8082/", function (res) {
    res.on("data", function (body) {
        console.log(body.toString());
    });
});
req.on('error', function (e) {
    console.error(e.message);
});
