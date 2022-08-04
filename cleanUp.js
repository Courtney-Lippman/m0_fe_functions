// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name");
}

nameQuestion();

// I added a semicolon the the end of line two and line 15 because that is following best practices and other coding languages may require it.

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// I added a semicolon to line 21 and unindented the curly bracket on line 23.

// EX 3:
func makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
//Added a space between () and { on line 30. Moved } from line 35 to line 36.

//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`The average is: ${avg}.`);
}

average(20, 40);
//Move { on line 43 up to end of line 42. Capitalized the T of the in line 46. Moved the . inside the backticks in line 46. Added ; to end of line 46. Add code to call the function on line 49 (I understand that you don't always have to call a function but I thought it would be good practice to add it.)
