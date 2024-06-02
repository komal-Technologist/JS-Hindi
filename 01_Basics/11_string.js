const name  = "hitest"
const reposcount = 50 
//String = "komal"
console.log(name)
console.log(name + reposcount + "value")//outdated 
//Modern Backdetcs ---string interpolation
console.log(`Hello my name is ${name} and my ${reposcount}`)

const secondwaytodecalre = new String('hiteshhc');

console.log(secondwaytodecalre[0])
console.log(secondwaytodecalre.__proto__)


console.log(secondwaytodecalre.length)

console.log(secondwaytodecalre.toUpperCase())
console.log(secondwaytodecalre.charAt(2))
console.log(secondwaytodecalre.indexOf('t'))
console.log(secondwaytodecalre.substring(0,4))
console.log(secondwaytodecalre.slice(-8,5))
console.log(secondwaytodecalre.trim())

const url = "dgyegygd%gfbhvw.com";

console.log(url.replace('%','-'));

console.log(url.includes('komal'));
console.log(url.split('%'));