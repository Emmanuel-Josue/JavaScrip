// La estructura de un objeto es la siguiente 
// Un objeto se coloca entre llaves.
// Manera literal 
const lapiz = 
{
    //Los atributos o propiedades en javaScrip se llaman llaves también 
    nombre: 'lapizUno',
    punta: 'medianan',
    tamanio: 13.2,
    color: 'amarillo',
    // No se recomienda que los nombres de las propiedades comiencen con un número sino porque 
    // es confuso acceder a ellas, para hacerlo hay que utilizar parentesis y enviarle la llave 
    // como un string porque en realidad todas las llaves son strings para javascri. 
    45: 'cuarenta y cinto',
    "variable con espacio": 'si'
}
console.log(lapiz.color);
console.log(lapiz['45']);
console.log(lapiz["variable con espacio"])// para acceder a una llave con espacio hay que hacerlo de esta manera;

// Un objeto se puede crear tanto con let como con const porque van hacer una referencia a una posición de memoria en 
// esta nunca va a cambiar, esta referencia nunca va a cambiar es por eso que se pueden crear con const 

// Para cambiar el valor de alguna llave podemos invocar la llave e inicalizarla con el valor que queramos 
lapiz.nombre = 'Goyo';
console.log(lapiz.nombre);// En javaScrip tenemos la libertad de poder cambiar el tipo de dato también. 

// Se pueden agregar llaves nuevas desde afuera 

lapiz.ancho = 5;
console.log(lapiz.ancho);
lapiz["apodo"] = 'lap';
console.log(lapiz['apodo']);


/* -------------------- Objetos anidados ------------------------------------*/

/* 
    Para empezar hay que entender que podemos acceder a estos objetos anidados atravez de 
    la sintaxis de los puntos, es decir con un primer punto entramos a la propiedad de un 
    objeto que puede ser otro y con otro punto podemos acceder a alguna propiedad de este 
    segundo objeto y así sucesivamente, si po el contrario tuvieramos un array que contiene 
    objetos simplemente tendriamos que acceder a ellos por medio de la sintaxis de un array 
    osea con indices y al obtener al objeto deseado podemos acceder a las propiedades de estos 
    con la sintaxis de los puntos. 
*/

let objeto = {
    propiedadUno: 'amarillo',
    segundaPropiedad: {
        aPropiedad: 'a',
        bPropiedad: 'b',
        cPropiedad: 'c'
    },
    terceraPropiedad:'Rojo'
}

console.log(objeto.segundaPropiedad.cPropiedad);












