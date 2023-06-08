
/*
    ------------------------- Parametros por defecto -----------------------------------

    Notas para hacer resumen:

    *   NO hay manera de solo pasar un argumento especifico, el que se de siempre sera el que se envie al primer parametro 
    *   NaN : Nota nomber 
    
    Los parametros predeterminados los asignamos nosotron para los casos en los que los usuarios no manden el 
    argumento que se necesita, existen dos formas de establecer datos predeterminados, el primero que realizare 
    es como se hacia antiguamente, algo que ya no se hace pero con lo que nos podemos encontrar, la segunda forma 
    es la más actual y más facil de realizar. 
    
    Algo importante a tener en cuenta es que los argumentos que se mandan se van asignando a los parametros de 
    izquierda a derecha sin tener la opción de saltarnos aguno es por esto que el valor predeterminado lo tomara 
    solo el parametro que no recibio valor tomando en cuenta que  los valores que llegaron se asignaron de izquierda a derecha, esto 
    sucede con ambas formas de establecer valores predeterminados. 

    Para entenderlo mejor, no se puede hacer esto 
    arignarIdentidad( , 'Hernandez', 22 );

    o solo mandar dos argumentos esperando a que se asignen a los parametros adecuados 
    arignarIdentidad('Hernandez', 22 ); el apellido se le asignaria a nombre y el 22  se le asignaria a apellido. 
*/

function asignarIdentidad(nombre, apellido, edad){
    //Utilizaremos el operador ternario que es una forma de la condicional if, la sintaxis es 
    // condicional(devolvera un booleano) ? acción a realizar si es verdad : acción a realizar si es falso

    undefined == nombre ? nombre = 'carlos' : nombre = nombre;
    undefined == apellido ? apellido = 'Herrera' : apellido = apellido;
    undefined == edad ? edad = '22' : edad = edad;

    console.log(nombre + ' ' + apellido);
}

asignarIdentidad('Rodrigo', 22);


// La segunda forma y la más acual es la siguiente 

function suma(x = 1, y =1){
    return x + y;
}

//NO se le asigno argumentos y aun así devuelve una respuesta. 
console.log(suma());


//El método typeof nos regresa un String 
