/*
    --------------------------------------------- Objeto arguments --------------------------------------

    Es un objeto especial del lenguaje, es un objeto iterable, lo que hace este objeto es tomar todos los 
    argumentos que se le dan a una función así esta función solo cuente con dos parametros si se le han dado
    más de dos el objeto arguments los tomara y los guardara en su interior como "propiedades". Para poder utilizarlo 
    primero hay que hacer un spread (convertirlo en un array) ya que por si solo no podemos utilizarlo, hasta donde 
    entiendo, convertirlo en un array con spread sera posible ya que es un objeto iterable.
    El objeto arguments no funciona con funciones anonimas, tipo flecha o expresivas. 
*/

    let funcionExpresiva = function () {
       let array = [...arguments] ;
       return array;
    }

    let arrayA = funcionExpresiva(1, 2, 3, 4);

    console.log(arrayA);

    function declarativa() {
        let array = [...arguments] ;
        return array;
    }

    let arrayExtraidoDeFuncionDeclarativa = declarativa('a', 'b', true);
    console.log(arrayExtraidoDeFuncionDeclarativa);

    // Con la funcion flecha esto no sirve. 
    let flecha = () => {
        let array = [...arguments] ;
        return array;
    }

    let arrayFlecha = flecha(55, 88, 99, 44);

    console.log(arrayFlecha);