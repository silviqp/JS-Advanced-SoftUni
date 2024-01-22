function lastKNumbers(n, k) {

    /*let result = [1];
    

    for(let i = 1; i < n; i++){

        result[i] = sumLastK(result, k);

    }

    function sumLastK(array = result, k) {

        k = array.length > k ? k : array.length;

        let sum = 0;

        for(let i = 1; i <= k; i++){

            sum += array[array.length - i];

        }

        return sum;

    }*/
let result = [1]
let i = 1;

while (i<n){
let sum = 0;
for (let j =Math.max(0,i-k); j <i; j ++){
    sum += result[j]
}
result.push(sum);

    i++


}

return result;

}
lastKNumbers(6, 3)