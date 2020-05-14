export{}
// crear fotografía

type SquareSize = '100x100' | '500x500' | '1000x1000'

// funciones y parámetros opcionales
function createPicture(title?:string,date?:string,size:SquareSize='100x100'){
    // se crea la fotografía 
    console.log('create picture', title,date,size)
};

createPicture('My birthday', '2020-02-10','100x100');
createPicture('Peru trip', '2020-02-11');
createPicture(undefined, undefined, '1000x1000');


// flat array function
let createPic =(title:string,date:string,size:SquareSize): object =>{
    return{title,date,size};
};

const picture= createPic('session', '2020-02-11', '100x100' );
console.log('picture', picture);

// tipo de retorno con TS

function handleError(code:number, message: string): never | string{
    //procesamiento del codigo o del mensaje
    if(message === 'error'){
        throw new Error(`${message}. Code error: ${code}`);
    }
    else{
        return 'An error has ocurred';
    }
}

try {
    let result = handleError(200, 'OK'); //return string
    console.log('result', result);
    result=handleError(404,'error'); // never
    console.log('result', result);
} catch (error) {
    
}
