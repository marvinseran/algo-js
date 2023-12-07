let y = 1;
let result = 1;

function factorial(a){

    if (a === 0 || a === 1) {
        return 1;
    }

    while (y <= a)
	{
		result *= y;
        y++;
	}
    return result;
}
console.log(factorial(5));
