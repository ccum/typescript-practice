export{}

enum PhotoOrientation{
    Landscape,
    Portrait, 
    Square,  
    Panorama
};

//super clase
//abstract para no instanciar la clase Item
abstract class Item{
    protected readonly _id:number;
    protected _title:string;

    constructor(id:number,title:string){
        this._id=id;
        this._title=title;
    }
    get id(){
        return this._id;
    }
    // set id(id:number){
    //     this._id=id
    // }
    get title(){
        return this._title;
    }
    set title(title:string){
        this._title=title
    }
}
class Picture extends Item{
    
    public static photoOrientation = PhotoOrientation;

    //propiedades
    private _orientation: PhotoOrientation;

    public constructor(id:number,title:string,orientation:PhotoOrientation){
        super(id,title);
        this._orientation=orientation;
    }
    
    get orientation(){
        return this._orientation;
    }
    set orientation(orientation:PhotoOrientation){
        this._orientation=orientation;
    }
    //comportamiento
    public toString(){
        return `[id:${this.id},
            titel:${this.title},
            orientation:${this.orientation}]`
    }
}

class Album extends Item{

    private _pictures:Picture[];

    public constructor(id:number,title:string){
        
        super(id,title) //conctructor de superclase
        this._pictures=[];
    }
    public addPicture(picture:Picture){
        this._pictures.push(picture)
    }
}

const album: Album = new Album(1,'Personal Pictures');
const picture:Picture= new Picture(1,'Camping', PhotoOrientation.Panorama);

//picture.id=100;
picture.title='Not Camping'
console.log('picture.id', picture.id);

album.addPicture(picture);
console.log('album', album);

// probar el miembro estatic de la clase picture
console.log('photoOrientation', Picture.photoOrientation.Portrait);