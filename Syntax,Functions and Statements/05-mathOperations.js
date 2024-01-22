
function mathOps (a,b,operator){
let result = 0;

if (operator === '+'){
    result = a+b
}else if (operator === '-'){
    result= a- b
}else if (operator === '*'){
    result = a * b
}else if (operator === '/'){
    result = a/b
}else if (operator === '%'){
    result = a%b
}else {
    result = a**b
}
console.log(result);
}
mathOps(3, 5.5, '*')