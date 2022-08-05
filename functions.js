// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
  console.log("Hello There!");
}

printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function onlyYes(yes) {
  console.log(`I only accept ${yes} as an answer!`);
}

onlyYes("Yes");


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function threeParameters(company, min, max) {
  var range = max - min;
  console.log(`The job posting for ${company} has a pay range of $${range}.`);
}

threeParameters("Apple", 90000, 200000);

// 4: Write a function that satifies the following interaction pattern:
function checkStock(amount, item) {

  if (item === "Coffee" && amount === 4) {

  console.log(`${item} is stocked`);

  }  else if (item === "Tortillas" && amount === 3) {

        console.log(`${item} - running LOW`);

    } else if (item === "Cheese" && amount === 0) {

      console.log(`${item} - OUT of stock!`);

    } else if (item === "Salsa" && amount === 1) {

console.log(`${item} - running LOW`);


    }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

//4.5: I think I can make 4 more efficient:
// write a function that checks the stock of items in a grocery store.
// the function should be able to take any item and amount of that item as input
// if there are 0 of the item, the function should tell us we are out of stock of that item
// 1-3 and we are running LOW
// 4 or more and we are overstocked

//the following are examples of inputs and outputs for this function:

function checkStocks(amount, item) {
   if (amount >= 4) {
     console.log(`${item} is stocked`);

   } else if (amount > 0) {
      console.log(`${item} is running LOW`);
   } else if (amount === 0) {
     console.log(`${item} is OUT of stock!`);
   } else {
     console.log("Error")
   }


}

checkStocks(4, "Coffee");
// => "Coffee is stocked"

checkStocks(5, "Coffee");
// => "Coffee is stocked"

checkStocks(3, "Tortillas");
// => "Tortillas - running LOW"

checkStocks(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStocks(1, "Salsa");
// => "Salsa - running LOW"
console.log("***********")
function checkStocks2(amount, item) {
   var stockStatus = ""
   if (amount >= 4) {
      stockStatus = " is stocked"

   } else if (amount > 0) {
     stockStatus = " - running low"

   } else if (amount === 0) {
    stockStatus = " - OUT of stock!"
   }

   console.log(item + stockStatus)

}

checkStocks2(4, "Coffee");
// => "Coffee is stocked"
checkStocks2(5, "Coffee");
// => "Coffee is stocked"

checkStocks2(3, "Tortillas");
// => "Tortillas - running LOW"

checkStocks2(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStocks2(1, "Salsa");
// => "Salsa - running LOW"
