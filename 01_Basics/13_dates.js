let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
//Note months start in js from 0 
let mycreateddate = new Date(2023,0,23);
console.log(mycreateddate.toDateString());
console.log(mycreateddate.toDateString());

let mycreatedFOrmat = new Date("01-14-2024");

console.log(mycreatedFOrmat.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(mycreatedFOrmat.getTime());

console.log(Math.round(Date.now()/1000));


let newdate = new Date();
console.log(newdate.getDay());
console.log(newdate.getMonth()+ 1);



//``


newdate.toLocaleString('default',{
    weekday : "long",
    timeZone : "IST"
})