function calcPrice (fruit,grams,price){

    let kilograms = (grams/1000);
   
    let total = (kilograms * price);

 console.log(`I need $${total.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)
  
}
calcPrice('orange', 2500, 1.80)