//kis trah se data ko memory m rakha jata hai aur ushko access kiya th===jata hai ushke two tarike hote
//hai ek primitive anu non -primitive 
//differnec =call by value and call by refernce 
//Primitive --
//7 types ==string ,number , boolean,null,undefined , ssymbole,bigintnt
const isLoogedIn = false;
const outsdideTemp = null
let userEMail; //undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 3645634372838473n
console.log(bigNumber);

//Refrnece (Non primitive)

//Array , objects ,Function

const heros = ["harry","pooter"];
let myobje = {
    name :"komal",
    age :22,
}

const myfuction = function()
{
    console.log("hello word this is function");
}

console.log(typeof myfuction);

console.log(typeof myobje);

console.log(typeof heros);

console.log(typeof null);

console.log(typeof undefined)