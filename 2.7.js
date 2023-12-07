let n = window.prompt("Donne un numéro");

var y = 1;
var x = 0;
var z = 0;
var res = 0; 

if(!n)
    console.prompt("erreur");
while (y <= n){
    x = window.prompt("Donne un numéro");
    y++;
    z = Number(x);
    res = (Number(z) + Number(res)) ;
}
console.log(res);
