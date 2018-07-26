// A simple function for converting an email address into a domain name

let email = 'stelisevil@hotmail.com'

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

domain = 'http://www.'.concat(email.substring(atSymbolIndex+1))

console.log(domain)
