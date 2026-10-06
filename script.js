console.log("SpendWise JS loaded");

// 1. Application data (variables)
let userName = "";
let monthlyBudget = 0;
let totalSpent = 0;
let remainingBalance = 0;
let isOverBudget = false;

// 2. Reusable functions
function calculateTotal(...amounts) {
  let total = 0;
  for (let a of amounts) total += a;
  return total;
}

function calculateBalance(budget, spent) {
  return budget - spent;
}

function checkBudgetStatus(balance) {
  return balance < 0 ? "Over budget" : "Within budget";
}

// 3. Collect user input
userName = prompt("Enter your name:");
monthlyBudget = Number(prompt("Enter your monthly budget:"));
let rent = Number(prompt("How much did you spend on rent?"));
let food = Number(prompt("How much did you spend on food?"));
let transport = Number(prompt("How much did you spend on transport?"));

// 4. Perform calculations
totalSpent = calculateTotal(rent, food, transport);
remainingBalance = calculateBalance(monthlyBudget, totalSpent);
isOverBudget = remainingBalance < 0;

// 5. Display results in the console
console.log("===== SpendWise Summary =====");
console.log("Name: " + userName);
console.log("Monthly Budget: KSh " + monthlyBudget);
console.log("Total Spent: KSh " + totalSpent);
console.log("Remaining Balance: KSh " + remainingBalance);
console.log("Status: " + checkBudgetStatus(remainingBalance));
console.log("Over Budget? " + isOverBudget);
