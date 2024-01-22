function pieceOfPie (arr,start,end){

    let startIdx = arr.indexOf(start);
    let endIdx = arr.indexOf(end)

    let newArr = arr.slice (startIdx,endIdx+1);

    return newArr

}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')