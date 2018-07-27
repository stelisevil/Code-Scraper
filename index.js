// Code Scraper - Accepts an email address and returns any associated email addresses, phone numbers and addresses

const Knwl = require("knwl.js");
const cheerio = require('cheerio');
const request = require('request');
const knwlInstance = new Knwl('english');

// Takes the command line arguement email and brings it into the program
var commandLineEmail = process.argv[2];

// Email validator
function validateEmail(commandLineEmail) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(commandLineEmail);
}
if (validateEmail(commandLineEmail)) {
  console.log(`You entered: ${commandLineEmail}`);
} else {
  console.log(`Error: ${commandLineEmail} is not a valid email address.`);
  process.exit(1); // exits the program if the email is not valid
};

// My method of turning the provided email address into a domain name
// First, find where the @ symbol is in the email address
let atSymbol = () => {
  for (atSymbolIndex = 0; atSymbolIndex < commandLineEmail.length; atSymbolIndex++) {
    if (commandLineEmail[atSymbolIndex] === '@') {
      return atSymbolIndex;
    }
  }
}

// Creates the domain name as a string and saves it to the variable 'domain'
let domain = 'http://www.'.concat(commandLineEmail.substring(atSymbol()+1));

console.log(`Domain: ${domain}`);

// Visits the provided domain to copy the html source code
request(domain, function (error, response, body) {
  const $ = cheerio.load(body);

  knwlInstance.register('emails', require('knwl.js/default_plugins/emails.js'));
  knwlInstance.register('phones', require('knwl.js/default_plugins/phones.js'));
  knwlInstance.register('places', require('knwl.js/default_plugins/places.js'));

  // Pass the stripped down body of text through knwl to extract emails, phone numbers and places
  knwlInstance.init($('body').text());

  var emails = knwlInstance.get('emails');
  var phones = knwlInstance.get('phones');
  var places = knwlInstance.get('places');

  // Logs the emails, phone numbers and places to the console
  console.log(`Emails found: ${emails}`);
  console.log(`Phone numbers found: ${phones}`);
  console.log(`Places found: ${places}`);
});
