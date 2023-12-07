let n = window.prompt("Donne un numéro");

let max = 10;
let min = 1;
let x = 0;


while (x < n) {
    function rand10(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    x++;
    console.log(rand10(1, 10));
}