/* Este método nos ayuda a cortar partes de un String, puede recibir uno o  dos parametros, si solo se manda un 
parametro, este parametro indica la posición en donde va a empezar a cortar, se cortara desde era posición, si se 
mandan dos parametros el primero indica en que posición se empezara a cortar y el segundo en donde se detendra pero 
se dejara de cortar una posición antes de la que se ha indicado, en el segundo parametro se pueden enviar números 
negativos los cuales indican que letras se deben de omitir, es decir, las que no se considerarán en el recorte ha-
ciendo el contero de derecha a izquierda. 
*/

// E l e f a n t e
// 0 1 2 3 4 5 6 7

let cadena = 'Elefante';

let corte = cadena.slice(2);

console.log(corte);

corte = cadena.slice(2, 6);

console.log(corte);

corte = cadena.slice(2, -1);

console.log(corte);

// Para hacer casting (conversión de un tipo de dato a otro) podemos colocar la palabra Number o colocar el simbolo
//  + en lugar de la palabra. 