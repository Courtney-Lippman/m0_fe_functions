// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
  console.log("Hello There!");
}

printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function onlyYes(yes) {
  console.log(`I only accept ${yes} as an answer!`);
}

onlyYes("YES");


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
