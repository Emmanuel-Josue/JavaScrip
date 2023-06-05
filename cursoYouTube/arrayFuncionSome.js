/*
    --------------------------------------  FUNCIÓN SOME --------------------------------------------

    Esta funsión devuelve true o false y para que haga esto se le debe de dar una función anonima que aplicara a 
    cada elemento, si encuentra que uno de estos elementos cumple con la evaluación regresara un true de 
    lo contraio dara un false.

    En lo que se diferencia este metodo a filter y fine es que, fine devuelve un elemento, filter un nuevo array y lo
    que devuelve some es un booleano. 

    Comparar y contrastar 

    ¿En qué se parecen ?
    - Todos reciben como argumento una función 
    -Todos aplican la función que se les da a cada elemento de su array 

    ¿En qué se diferencian ?
    - Todos retornan un valor o dato diferente. 

*/

let lista = ['uno', 'dos', 'tres', 'trece', 'tren', 'tortuga', 'ave', 'dado'];

let existe = lista.some((n) => {
    return n[0] === 'a';
});

console.log(existe);