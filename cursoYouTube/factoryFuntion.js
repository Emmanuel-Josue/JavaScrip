/*
 ------------------- Factory Funtion (Fabrica de funciones) -----------------------------------

 Es el predecesor de las clases, se utiliza apara asignarle operaciones a un objeto, antiguamente cuando no existian 
 las clases se utilizaban estas funciones 
    * Es una función que devuelve un objeto 
*/

function fabrica(a, b){
    // Creamos un objeto 
    const objeto  =  {};

    objeto.a = a;
    objeto.b = b;

    objeto.suma = function(a,b){
        return a + b;
    }

    return objeto;
}

const objeto01 = fabrica(5, 2);

console.log(objeto01.a);
console.log(objeto01.b);
console.log(objeto01.suma);