// Good Luck! You got this 💪🏾
// Write your code here.



let bill = 275; // Assign the bill value here
let tip;

if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15; // Calculate 15% tip
} else {
    tip = bill * 0.20; // Calculate 20% tip
}

let total = bill + tip; // Calculate the total value

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);