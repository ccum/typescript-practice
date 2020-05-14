// funcion para mostrar una fotografia
export{}

enum PhotoOrientation{
    Landscape,
    Portrait, 
    Square,  
    Panorama
};


interface Picture{
    title:string;
    date:string;
    orientation:PhotoOrientation
}

function showPicture(picture:Picture){
    console.log(`[title:${picture.title},
    date: ${picture.date},
    orientation: ${picture.orientation}]`)
}

let myPic={
    title:'Test title',
    date:'2020-03-01',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title:'Test title 01',
    date:'2020-04-01',
    orientation: PhotoOrientation.Panorama
});

//Interfaces: propiedades opcionales

interface PictureConfig{
    title?:string;
    date?:string;
    orientation?:PhotoOrientation
}

function generatePicture(config:PictureConfig){
    const pic = {title:'Default', date:'2020-03'}
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }
    return pic
}

let picture = generatePicture({});
console.log('picture', picture);

picture = generatePicture({title:'Travel Pic'});
console.log('picture', picture);

picture = generatePicture({title:'Travel Pic', date:'2020-03'});
console.log('picture', picture);

//Interface: atributos de solo lectura
interface User{
    readonly id:number;
    userName:string;
    isPro:boolean;
}

let user:User;
user = {id:10,userName:'cecum',isPro:true};
//user.id=20; --> ERROR
console.log('user', user);

