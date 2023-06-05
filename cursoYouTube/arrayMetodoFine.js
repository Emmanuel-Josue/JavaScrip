/*
    --------------------- Función find ---------------------------------------

    Esta función debe de recibir como parametro una función que nosotros crearemos la cual utilizara 
    una condicional que tiene que regresar un true o false, de preferencia pude ser una funcion anonima, tambien puede ser una 
    función flecha, que se le de como argumento. El metodo find tomara la función que le demos y la aplicara a 
    cada uno de los elementos del arreglo de manera secuencial empezanod en el indice 0, cuando nuestra función 
    retorne verdadero, la función find nos devolvera el objeto o elemento del array que ha coincidido, es importante
    recordad que solo devolvera el primer elemeto que ha coincidido si existen elementos que tambien complan con la 
    condicional no se podra llegar a ellos. 
*/

let primerArray = ['uno', 'dos', 'tres', 'cuatro'];

let dos = primerArray.find(function(elementoQueBrindaraFind) {
    if(elementoQueBrindaraFind === 'dos'){
        return true;
    }
    return false;
});

console.log(dos);


// ** Debo de replicar el método fine
// ¿Qué otros parametros puedo utilizar con la función 