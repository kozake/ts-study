"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
function call(url) {
    return new Promise((resolve, rejects) => {
        let buff = "";
        const req = http_1.get(url, res => {
            res.on("data", body => {
                buff += body.toString();
            });
            res.on("end", () => {
                resolve(buff);
            });
        });
        req.on('error', (e) => {
            rejects(e.message);
        });
    });
}
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data1 = yield call("http://172.18.1.16:8082/");
            let data2 = yield call("http://172.18.1.16:8082/");
            let data3 = yield call("http://172.18.1.16:8082/");
            console.log(data1);
            console.log(data2);
            console.log(data3);
        }
        catch (message) {
            console.log(message);
        }
    });
}
test();
