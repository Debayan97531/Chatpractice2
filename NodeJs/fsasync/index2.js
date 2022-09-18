const fs=require('fs');

/*fs.writeFile("read1.txt","today is awesome",
(err) => {console.log("files created'");
        console.log(err);
});*/
//callback->function passing as an argument

/*fs.appendFile('read1.txt','    hello guys',
(err) => {console.log('task completed');
        console.log(err);
});*/

fs.readFile('read1.txt','utf-8',
(err,data)=>{
    console.log(data);
});
