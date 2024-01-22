function extractIncreasingSubset (arr){

let result = [];
let biggest = arr.shift();
result.push(biggest)
 arr.forEach(e => {
    if (e>=biggest){
        biggest=e;
        result.push(biggest);
    }
 });

return result
}
console.log(extractIncreasingSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]))