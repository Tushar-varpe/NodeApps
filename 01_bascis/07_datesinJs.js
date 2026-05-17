// *****Dates******//

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date (2006,7,13 ) // month  start 0 
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

//let myCreatedDate1 = new Date("2026-05-16")
//let myCreatedDate1 = new Date("05-16-2026")
let myCreatedDate1 = new Date(2026,4,21,6,7)
console.log(myCreatedDate1.toDateString())
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("05-16-2026")
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

// `${newDate.getDate()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",

})
