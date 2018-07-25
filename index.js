// Code Scraper

// calling the knwl.js module to extract information from the provided string
var Knwl = require("./node_modules/knwl.js");
var knwlInstance = new Knwl('english');

knwlInstance.register('emails', require('./node_modules/knwl.js/default_plugins/emails.js'));
knwlInstance.register('phones', require('./node_modules/knwl.js/default_plugins/phones.js'));
knwlInstance.register('places', require('./node_modules/knwl.js/default_plugins/places.js'));

// The string below. I've taken the example provided in the knwl README.md file to test
knwlInstance.init('This was written on the 2nd of June, of 2015 and my email address is name@company.com');

var emails = knwlInstance.get('emails');
var phones = knwlInstance.get('phones');
var places = knwlInstance.get('places');

console.log(emails);
console.log(phones);
console.log(places);
