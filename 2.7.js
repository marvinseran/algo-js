let n = window.prompt("Donne un numéro");

var y = 1;
var x = 0;
var z = 0;
var res = 0;

while (y <= n){
    x = window.prompt("Donne un numéro");
    y++;
    z = x;
    res = Number(z) + Number(res) ;
}
console.log(res);
