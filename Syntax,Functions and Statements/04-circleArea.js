function circle (input){
let inputType = typeof(input);

if (inputType === 'number'){
    let area = (Math.PI*input*input).toFixed(2)
    console.log(area);
}else {
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
}

}
circle('name')