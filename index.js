#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    "USD": 1,
    "INR": 74.08,
    "GBP": 0.83,
    "EUR": 0.88,
    "CAD": 1.30,
    "JPY": 113.32,
    "CNY": 6.79,
    "PKR": 278.50,
    "AED": 3.67,
    "SAR": 3.75,
};
let user_answer = await inquirer.prompt([
    {
        name: "From",
        message: "Enter from currency",
        type: "list",
        choices: ['USD', 'INR', 'GBP', 'EUR', 'CAD', 'JPY', 'CNY', 'PKR', 'AED', 'SAR']
    },
    {
        name: "To",
        message: "Enter To currency",
        type: "list",
        choices: ['USD', 'INR', 'GBP', 'EUR', 'CAD', 'JPY', 'CNY', 'PKR', 'AED', 'SAR']
    },
    {
        name: "Amount",
        message: "Enter amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.From]; //currency entered to be converted from
let toAmount = currency[user_answer.To]; //currency entered to be converted into
let amount = user_answer.Amount; // The amount entered 
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log("Result is ", convertedAmount);
