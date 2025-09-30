// REST PARAMETER FUNCTION
// REST PARAMETER FUNCTION
function smAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(smAll(1, 2, 3));
console.log(smAll(10, 20, 30, 40));