const path=require("path");

console.log(path.dirname("E:/nodejsYoutube/Pathmodule/path.js"));
console.log(path.extname("E:/nodejsYoutube/Pathmodule/path.js"));
console.log(path.basename("E:/nodejsYoutube/Pathmodule/path.js"));

console.log(path.parse("E:/nodejsYoutube/Pathmodule/path.js"));

const myPath=path.parse("E:/nodejsYoutube/Pathmodule/path.js");
console.log(myPath.name);
console.log(myPath.root);