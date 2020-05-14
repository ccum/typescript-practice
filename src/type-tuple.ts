export{};
//tuple [1, 'cecum']
let user:[number,string];
user = [1,'cecum'];
console.log('user', user);
console.log('userId', user[0]);
console.log('userName', user[1]);
console.log('userName.length', user[1].length);


//tuplas con varios valores
// id, userName, isPro
let userInfo:[number,string,boolean];
userInfo=[2,'cb',true];
console.log('userInfo', userInfo);


//arreglo de tuplas
let array:[number, string][]=[];
array.push([1,'pepe']);
array.push([2,'car']);
array.push([3,'ivn']);
console.log('array', array);

// Uso de funciones Array
//ivn --> ivn001
array[2][1] = array[2][1].concat('001');
console.log('array', array);