function smallest (arr){

    let sorted = arr.sort((a,b)=>a-b);
    let smallest = arr.slice(0,2);
    console.log(smallest);



}
smallest([-3, 0, 10, 4, 7, 3])