// 2Darray traversal
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
];
for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
    var row = matrix_1[_i];
    for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
        var element = row_1[_a];
        console.log(element);
    }
}
