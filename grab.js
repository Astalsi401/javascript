const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const news = function () {
    for (let j = 1; j < 5; j++) {
        request({
            url: 'https://news.pts.org.tw/dailynews?page=' + j,
            method: "GET"
        }, function (error, response, body) {
            if (error || !body) {
                return;
            }
            const $ = cheerio.load(body); // 載入 body
            const result = []; // 建立一個儲存結果的容器
            const date = $('.break-news-time').text();
            for (let i = 0; i < 15; i++) {
                var news = $('h2').eq(i).text();
                result.push(Object.assign({ date, news }));
            }
            console.table(result);
        });
    };
};

news();