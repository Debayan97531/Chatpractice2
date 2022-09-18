
//1st way operator defining 
const oper = require('./oper');
console.log(oper);

console.log(oper.add(5,7));
console.log(oper.sub(8,9));
console.log(oper.mult(88,7));
console.log(oper.name);

//2nd way
const {add,sub,name,mult}=require('./oper');

console.log(add(6,8));
console.log(sub(6,-9));
console.log(mult(8,4));
console.log(name);
