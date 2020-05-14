// corchetes []


//uso explícito
let users: string[];
users = ['unos', 'dos', 'tres'];


// uso inferido
let otherUsers = ['unos', 'dos', 'tres'];


// Array<TIPO>

let pictureTitles: Array<string>;
pictureTitles = ['title 1','title 2','title 3','title 4','title 5'];

// accediendo a valores en un array
console.log('first users', users[0]);
console.log('first pictureTitles', pictureTitles[2]);

// propiedades en array
console.log('tamaño arreglo', users.length);

//uso de funciones
users.push('cuatro');
users.sort()
console.log('users', users);



