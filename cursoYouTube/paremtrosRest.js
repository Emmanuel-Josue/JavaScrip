
/*
    ---------------------------------------------------- Rest ---------------------------

    Es una forma de poder capturar los argumentos que nos den, aspi sea los que hemos establecido o no, es una 
    forma de evitar utilizar el objeto arguments ya que esto nos da más rapido un array con los argumentos como 
    elementos. Una ventaja de hacer rest es que se puede realizar en todo tipo de funciones, frecha, expresisvas, 
    declarativas y anonimas 
*/

function suma(...rest){
    let total = rest.reduce(function(resultado, argumentoActual){
        return resultado + argumentoActual;
    });
    return total;
}

console.log(suma(2, 5, 3));

