// number
// explicito
let edad: number;
edad =1;
edad = 120;
//edad = 'hola'; --> error


//inferido

let edadPerson = 10
edadPerson= 30
//edadPerson = '2222' --> error


let hex: number = 0xf00d;
let binary: number = 0b0101110;
let oct: number = 0o744;


//bolean
//tipado explicito
let isPro: boolean;
isPro=true;

//tipado inferido
let isUserPro=false;
isUserPro=true;


//STRING
//tipado explicito
let userName: string = 'linux academy';
userName= "valor diferente";

//String template
// uso de back-tick
let userInfo: string;
userInfo = `
    Userinfo:
    Username: ${userName}
    firtsName ${userName + 'Cueva'}
    edad: ${edad}
    isPro: ${isUserPro}
`;

console.log(userInfo);