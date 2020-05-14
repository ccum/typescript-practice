// type object

let user: object;
user = {}; //Object

user={
    id:1,
    userName: 'ccum',
    firstName : 'Cesar',
    isPro: true
};

console.log('user', user);
//console.log('user.userName', user.userName); --> error

//Object vs object (la clase de JS vs tipo TS)
const myObject ={
    id:1,
    userName: 'ccum',
    firstName : 'Cesar',
    isPro: true
};

const isInstance = myObject instanceof Object; // clase Object JS
console.log("isInstance",isInstance);
console.log('myObject.userName', myObject.userName); 