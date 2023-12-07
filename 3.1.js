let first = [1, 2, 3, 4, 5];
let second = [100, 101, 102];
let z = 0;
let x = 0;
let res = 0;

while(x <first.length){
    z = first[x];
    res = Number(z) + Number(res) ;
    x++;
}
console.log(res)