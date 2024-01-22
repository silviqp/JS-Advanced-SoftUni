function addAndRemove (arr){

let n = 1;
let result = [];

for (let i = 0; i < arr.length; i ++){

    switch (arr[i]){
        case 'add': 
        result.push(n);
        n++;
        break;
        case 'remove':
            result.pop(n);
            n++;
            break;

    }
}
return result.length?  result.join('\n'): 'Empty'
}
addAndRemove(['add', 
'add', 
'add', 
'add'])