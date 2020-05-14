//orientacion para fotografías

enum PhotoOrientation{
    Landscape = 0, // podemos darle valor de manera explicita
    Portrait,   // 1
    Square,     // 2
    Panorama    // 3
};

const landscape: PhotoOrientation=PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[landscape]);

enum PictureOrientation{
    Landscape = 10, // podemos darle valor de manera explicita
    Portrait,   // 11
    Square,     // 12
    Panorama    // 13
};
console.log('protrait', PictureOrientation.Portrait);


enum Country {
    Peru = 'per',
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    España = 'esp'
}
const country: Country = Country.Peru;
console.log('country : ', country); // --> per