function biggestElement (matrix){

let max = matrix[0][0];

for (let el of matrix){
    for (let num of el){
        if (num > max){
        max = num 
    }
}
}
console.log(max);
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]);
    biggestElement([[3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]])