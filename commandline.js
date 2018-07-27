// Takes an email address provided on the command line and sets it as a variable

var commandLineEmail = process.argv[2];

function validateEmail(commandLineEmail) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(commandLineEmail);
}

if (validateEmail(commandLineEmail)) {
  console.log(`You entered: ${commandLineEmail}`);
} else {
  console.log(`Error: ${commandLineEmail} is not a valid email address.`);
  process.exit(1);
};
