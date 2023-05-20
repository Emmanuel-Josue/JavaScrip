/* 
   Este método reemplaza el String que le indiquemos por otro, recibe dos parametros el primero es la palabra que 
   queremos reemplazar y el segundo la palabra que queremos colocar en vez de la que queremos reemplazar. 
*/

let cadena = 'Oso mañoso'

let reemplazo = cadena.replace('mañoso', 'enojado');

console.log(reemplazo);

// Hay que tener en cuenta que el primer argumento(lo que se quiere reemplazar) no esta bien escrito el método
// no podra encontrar ese string y por tanto no podra reemplazarlo. 

// NOTA: El método solo reemplazará la primera coincidencia que encuentre no todas las que existan. 