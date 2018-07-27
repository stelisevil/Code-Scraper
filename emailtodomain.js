// A simple function for converting an commandLineEmail address into a domain name

// test commandLineEmail
let commandLineEmail = 'stelisevil@hotmail.com'

// A way of finding where the @ symbol is in the commandLineEmail address
let atSymbol = () => {
  for (atSymbolIndex = 0; atSymbolIndex < commandLineEmail.length; atSymbolIndex++) {
    if (commandLineEmail[atSymbolIndex] === '@') {
      return atSymbolIndex;
    }
  }
}


console.log(atSymbol())

console.log(commandLineEmail[atSymbol()])

console.log(commandLineEmail.substring(atSymbol+1))


// creates the domain name as a string and saves it to the variable 'domain'
let domain = 'http://www.'.concat(commandLineEmail.substring(atSymbolIndex+1))

console.log(domain)
