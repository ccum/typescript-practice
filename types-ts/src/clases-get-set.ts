export{}

enum PhotoOrientation{
    Landscape,
    Portrait, 
    Square,  
    Panorama
};

class Picture{
    //propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id:number,title:string,orientation:PhotoOrientation){
        this._id=id;
        this._title=title;
        this._orientation=orientation;
    }
    get id(){
        return this._id;
    }
    set id(id:number){
        this._id=id
    }
    get title(){
        return this._title;
    }
    set title(title:string){
        this._title=title
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

class Album{
    private _id:number;
    private _title:string;
    private _pictures:Picture[];

    public constructor(id:number,title:string){
        this._id=id;
        this._title=title;
        this._pictures=[];
    }
    public addPicture(picture:Picture){
        this._pictures.push(picture)
    }
    get id(){
        return this._id;
    }
    set id(id:number){
        this._id=id;
    }
    get title(){
        return this._title;
    }
    set title(title:string){
        this._title=title;
    }
}

const album: Album = new Album(1,'Personal Pictures');
const picture:Picture= new Picture(1,'Camping', PhotoOrientation.Panorama);

picture.id=100;
picture.title='Not Camping'
console.log('picture.id', picture.id);

album.addPicture(picture);
console.log('album', album);