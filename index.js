// Code Scraper

// calling the knwl.js module to extract dates from the provided string
var Knwl = require("./node_modules/knwl.js");
var knwlInstance = new Knwl('english');
knwlInstance.register('dates', require('./node_modules/knwl.js/default_plugins/dates.js'));

// The string below. I've taken the example provided in the knwl README.md file to test
knwlInstance.init('This was written on the 2nd of June, of 2015.');

var dates = knwlInstance.get('dates');

console.log(dates);
