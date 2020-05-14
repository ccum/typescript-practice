import { PhotoOrientation } from "./photo-orientation";
import {User} from "./user";
import { Album } from "./album";
import { Picture } from "./picture";

const user = new User(1,'cecum','cesar',true);
const album = new Album(10,'My live');
const picture = new Picture(12,'On my House','2014-01-01',PhotoOrientation.Landscape);

//creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log(user);