function biggerHalf (arr){

    let sorted = arr.sort ((a,b)=>a-b);
    const midlle =Math.floor (arr.length/2)
    const bigger = arr.slice (midlle)
    return bigger


}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6])