// Importing chalk module
//import chalk from 'chalk';
/*const chalk=require("chalk");

// Creating theme
const warning=chalk.red;

// Printing theme text
console.log(warning("Restricted Zone"));
const welcome=chalk.green
console.log(welcome("GFG"))*/

const chalk = require("chalk");
const validator=require("validator");
const res= validator.isEmail('thapa@bar.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res)); 
//console.log(chalk.green("success"));

