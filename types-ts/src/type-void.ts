//void
//tipo explicito
function showInfo(user:any): any{
    console.log("user Info", user.id, user.name, user.lastName);

}

showInfo({id:1, name:'Cesar', lastName:'Cueva'});

//tipo inferido

function showFormattedInfo(user:any){
    console.log('User info', `
        id: ${user.id}
        name: ${user.name}
        lastName: ${user.lastName}
    `)
}

showFormattedInfo({id:1, name:'Cesar', lastName:'Cueva'});


//tipo void como tipo de datoa en varaible

let unusable: void;
//nusable = null;
unusable = undefined;



//tipo:: never --> nunca retorna un valor
function handleError(code: number, message: string): never{
    // process you code here
    // generate a message
    throw new Error(`${message}. Code: ${code}`)
}

try {
    handleError(404, 'not found');
} catch (error) {
    
}

function sunNumbers(limit: number):never{
    let sum = 0;
    while (true) {
        sum++;
    }
}
//sunNumbers(10);


//Tipo Void: Representa la ausencia de tipo. usado en funciones que no retornan nada.
//Tipo Never: Representa funciones que lanzan excepciones o nunca retornan un valor.