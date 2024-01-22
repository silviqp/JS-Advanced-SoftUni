function processOld (arr){
const final = arr.filter((c,i)=>i%2).map(e=>e*2).reverse().join(' ')

console.log(final);

}
processOld([10, 15, 20, 25])
processOld([3, 0, 10, 4, 7, 3])