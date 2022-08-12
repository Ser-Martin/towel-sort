// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) return result;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2 !== 0) {
                let tmp = j;
                j = matrix[i].length - 1 - j;
                result.push(matrix[i][j]);
                j = tmp;
            } else result.push(matrix[i][j]);
        }
    }
    return result;
};
