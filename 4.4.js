
let distance = 0;
let x =0;
let y = 0;
let xsquare = 0;
let ysquare = 0;

function calcDistance(a, b){

x = (a[0] - b[0]);
y = (a[1] - b[1]);
xsquare = x*x;
ysquare = y*y;
distance = Math.sqrt(xsquare + ysquare);
return (distance);
}
console.log(calcDistance([-2, 2], [2, -2]));