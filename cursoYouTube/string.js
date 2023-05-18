/* Maneras de expresar cadenas para mostrar mesajes  */

// Formas de concatenar. 
console.log("Hola");
console.log(` hola "toño"`);
let cadena_1 = "hola";
let cadena_2 = "toño";
let espacio = "";

console.log(cadena_1, espacio, cadena_2);
console.log(cadena_1 + espacio + cadena_2);
// Como esta dentro de un String al ejecutar la linea respeta los espacios que se han colocado. 
console.log(`hola ${cadena_2} ${cadena_1}`); // Se recomienda esta manera ya que cuando te acostumbras es más facil leer el mensaje de esta forma. 