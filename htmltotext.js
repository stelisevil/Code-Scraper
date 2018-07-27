const cheerio = require('cheerio');
var request = require('request');

request('http://www.manchesterhandballclub.co.uk/index.php', function (error, response, body) {
  const $ = cheerio.load(body);
  console.log($('body').text());
});
