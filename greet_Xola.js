const chalk = require('chalk');


const greet = require('./greet');

const styledMsg = chalk.bgRed.black(greet('Xola'));

console.log(styledMsg);

module.exports = greet;
