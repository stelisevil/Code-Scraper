// A simple function for converting an email address into a domain name

// test email
let email = 'stelisevil@hotmail.com'

// A way of finding where the @ symbol is in the email address
let atSymbol = () => {
  for (atSymbolIndex = 0; atSymbolIndex < email.length; atSymbolIndex++) {
    if (email[atSymbolIndex] === '@') {
      return atSymbolIndex;
    }
  }
}

console.log(atSymbol())

console.log(email[atSymbolIndex])

console.log(email.substring(atSymbolIndex+1))


// creates the domain name as a string and saves it to the variable 'domain'
domain = 'http://www.'.concat(email.substring(atSymbolIndex+1))

console.log(domain)
