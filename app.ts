#!/usr/bin/env node
import inquirer from "inquirer";
let currency : any = {
    "USD" : 1,
    "GBP" : 0.80,
    "CAD" : 1.37,
    "PKR" : 280,
}
const answer = await inquirer.prompt([
    {
        message:"Select currency from you want convert!!",
        type:"list",
        choices:['USD','GBP','CAD','PKR'],
        name:"from"
    },
    {
        message:"Select currency you want to convert in!!",
        type:"list",
        choices:['USD','GBP','CAD','PKR'],
        name:"to"
    },
    {
        message:"Enter your amount",
        type:"number",
        name:"amount"
    },

])

let Amountfrom =  currency[answer.from];
let Amountto =  currency[answer.to];
let baseAmount = answer.amount / Amountfrom;
let convertedAmount = baseAmount * Amountto
console.log(`${currency[answer.to]} ${convertedAmount}`);
