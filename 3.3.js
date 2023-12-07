let first = [1, 2, 3, 4, 5];
let second = [100, 101, 102];
let x = 0;

second.length=first.length;

while(x <first.length){
    second[x] = first[x];
    x++;
}
console.log(second);