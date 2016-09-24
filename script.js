/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var productList = []; //this is an array

//Your code here
var product = {
  name:'abc',
  price: 10,
  maker: 'nike'
};
productList.push(product);

product = {
  name:'bcd',
  price: 40,
  maker: 'costco'
};
productList.push(product);


product = {
  name:'cde',
  price: 70,
  maker: 'adidas'
};
productList.push(product);

product = {
  name:'def',
  price: 40,
  maker: 'new balance'
};
productList.push(product);

// console.log(productList[1]);

//Hint: productList.push(newObject) will add the object you just created to the array


/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i = 0; i < productList.length; i++){

    //Your code here
    if (productList[i].price < 50){
      console.log(productList[i].name+ " is under 50");
    }

}

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again
var sum = 0;
for (var i=0; i<productList.length; i++){
  sum += productList[i].price;
}
var average = sum/productList.length;
console.log('The average price is ' + average);
//3.2 then, divide total price by the number of products, using proudctList.length


/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;
    //Your code here
    for (var i=0; i<productList.length; i++){
      if (productList[i].price < p){
        numOfMatchingProducts ++;
      }
    }
    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
