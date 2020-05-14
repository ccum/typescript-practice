export{}
//<> // Angle bracket syntax --> es mas usado
let userName: any;
userName = 'cecum';

// tenemos una cadena, ts confia en mi
let message: string= (<string>userName).length > 5 ? 
                    `Welcome ${userName}`:
                    'Username is to short';

console.log('message', message);

let userNameWithId: any = 'ccum 10';

//como obtener el username
userName = (<string>userNameWithId).substring(0,4);
console.log('username only', userName);


//Syntaxis "as" --> es menos usado
message: (userName as string).length > 5 ? 
        `Welcome ${userName}`:
        'Username is to short';


let helloUser: any;
helloUser = "hello cecum";
userName = (helloUser as string).substring(6);
console.log('username only', userName);
