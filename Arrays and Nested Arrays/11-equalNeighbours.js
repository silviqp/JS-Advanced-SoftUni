function equalNeighbours (mat){

    let pairs = 0;

for (let row = 0; row < mat.length -1; row ++){
    for (let col =0; col< mat[row].length; col ++){
        if (mat[row][col] === mat[row+1][col]){
            pairs++
        }
        if (mat[row][col] === mat[row][col +1]){
            pairs++
        }
        if (row === mat.length -2 && mat[row +1][col] === mat[row+1][col+1]){
            pairs++
        }
    }
}


console.log(pairs);

}
equalNeighbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])