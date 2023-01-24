var x = 1;
var z = 0;
var s = 0;

function guessHigh() {
z = x;
console.log(x);
console.log(z);
newNum()
console.log(x);
console.log(z);
if(x > z){
  s++;
document.getElementById("score").innerHTML = s;
}else{
alert("You Lose!");
location.reload()
}
}
function guessLow() {
z = x;
console.log(x);
console.log(z);
newNum()
console.log(x);
console.log(z);
if(x < z){
s++;
document.getElementById("score").innerHTML = s;
}else{
alert("You Lose!");
location.reload();
}
}


function newNum() {
  x = Math.round(1+(Math.random()*19));
  document.getElementById("num").innerHTML = x;
}
