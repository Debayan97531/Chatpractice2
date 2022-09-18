const EventEmitter = require('events');

const event = new EventEmitter();

/*event.on("sayMyName",() =>{
    console.log("your name is deb");
}); //like addEventListener

event.on("sayMyName",() =>{
    console.log("your name is kumar");
}); 

event.on("sayMyName",() =>{
    console.log("your name is ghosh");
}); //multiple functions through 1 event 

event.emit("sayMyName");*/


event.on('checkPage', (sc,msg) =>{
    console.log(`status code is ${sc} and page is ${msg}`);
})

event.emit('checkPage',200,'ok');