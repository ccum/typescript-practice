export{}
// union de tipo, varios tipo en una variable
// 10 , '10'

let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar userName dado un ID

function getUserNameById(id:number|string){
    //logica de busqueda
    return 'ccum';
}

getUserNameById(10);
getUserNameById('10');


//alias de tipo para typescript

type IdUser = number | string; // este es el alias
type UserName = string;
let idUserOther:IdUser; 
idUserOther = 10;
idUserOther = '10';

// Buscar userName dado un ID

function getUserNameByIdOther(id: IdUser): UserName{
    //logica de busqueda
    return 'ccum';
}

getUserNameByIdOther(10);
getUserNameByIdOther('10');

//tipo literales
type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = "500x500";
