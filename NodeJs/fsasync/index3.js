const fs=require('fs');

/*fs.mkdir('thapa',
(err)=>{
    console.log('folder created');
    console.log(err);
});*/

/*fs.writeFile('./thapa/bio.txt','my name is debayan',
(err)=>{
        console.log('files created;');
});*/

/*fs.appendFile('./thapa/bio.txt','here to add some data about me',
(err)=>{
        console.log('files appended');
})*/

/*fs.readFile('./thapa/bio.txt','utf-8',
(err,data)=>{
        console.log(data);
        //console.log(err);
});*/


/*fs.rename('./thapa/bio.txt','./thapa/mybio.txt',
(err)=>{
        console.log('rename done');
});*/

/*fs.unlink('./thapa/mybio.txt',
(err)=>{
        console.log('file deleted');
})*/

fs.rmdir('./thapa',
(err)=>{
        console.log('folder deleted');
});







