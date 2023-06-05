

// ---------------------------------------- FUNCIÓN FILTER --------------------------------------------------

/*
    Lo que hace este método es tomar un arrar y aplicarle a cada elemento la función que le brindemos la cual va 
    realizar una evalcuación y retornara verdadero o falso, cada elemento que cumpla la evaluación se guardara en 
    un array diferente y al ultimo este método nos entregara dicho array. 

    ¿Existe alguna forma en que se pueda realizar una busqueda sin vero todos los datos, sin recorrer cada uno ?
        - Para lograr esto me imagino algo asi como organizar bien los datos y por ejemplo, en una sección agurpar 
        todos los datos que empiecen con la a y luego la b y así sucesivamente, cuando el programa busque algo con la 
        z ya no se detendra en la a sino que simplemente ira a la sección de la z. 

*/

let arrayUno = [1, 2, 3, 13, 12, 14, 22, 33];

let arrayFiltrado = arrayUno.filter((objetoBrindadoPorFilter) => {
    return objetoBrindadoPorFilter < 5;
});

console.log(arrayFiltrado);