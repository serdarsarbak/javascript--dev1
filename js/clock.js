let isim = prompt("Lütfen isminizi giriniz")

let myName = document.querySelector("#myName")
myName.innerHTML = isim

function time () {

var d = new Date();
var curr_hour = d.getHours();
var curr_min = d.getMinutes();
var curr_sec = d.getSeconds();
let myClock = document.querySelector("#myClock")
myClock.innerHTML = `${curr_hour}:${curr_min}:${curr_sec}`

}
setInterval(time, 1000);






