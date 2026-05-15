const name = "Tushar"
const repocount = 40

// console.log(name + repocount +"value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String("tushar-varpe")

console.log(gameName[0])

console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.substring())
console.log(gameName.strike())
console.log(gameName.charAt(6))
console.log(gameName.indexOf('r'))

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(1,4)
console.log(anotherString);

const newString1 = "  Tushar  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))

console.log(gameName.split('-'))



