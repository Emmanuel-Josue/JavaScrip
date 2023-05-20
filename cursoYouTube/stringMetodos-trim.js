// Lo que hace el método .trim es quitar los espacios de una cadena, pero solo los que tiene al principio y al final .

let cadena = "       principio       en medio               y  final.        "
console.log(cadena);
console.log(cadena.trim());

// Es posible ejecutar varios métodos a la vez, hay que entender que el código se ejecuta de arriba a abajo y de izquierda 
// a derecha. 

let dosCadena = cadena.trim().toLocaleUpperCase();
// Lo que primero hizo la cadena de arriba fue quitar los espacios del principio y final de la cadean con el método
// .trim y luego cumbirtio a mayusculas el mensaje. 
console.log(dosCadena);

