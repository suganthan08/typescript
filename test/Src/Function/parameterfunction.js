// REST PARAMETER FUNCTION
// REST PARAMETER FUNCTION
function smAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(smAll(1, 2, 3));
console.log(smAll(10, 20, 30, 40));
