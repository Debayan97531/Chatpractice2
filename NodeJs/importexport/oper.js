
const add =(a,b) =>{//a,b parameter
    return a+b;
}//as callback function
const sub =(a,b) =>{
    return a-b;
}
const mult =(a,b) =>{
    return a*b;
}
const name='deb';


/*module.exports.add=add;
module.exports.sub=sub;
module.exports.mult=mult;
module.exports.name=name;*/

module.exports={add,sub,name,mult};//object destructuring

