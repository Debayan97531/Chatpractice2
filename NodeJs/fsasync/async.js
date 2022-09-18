const fs=require('fs');

/*const data=fs.readFileSync('read1.txt','utf-8');
console.log(data);*/

const data=fs.readFile('read1.txt','utf-8',
(err,data) =>{
        console.log(data);
});

console.log('after the data');