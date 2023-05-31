

// ----------------------------------    Lexical Scope - Funciones anidadas  -------------------------

/*
    Es algo similar a lo que pasa con las variables, las funciones que estan dentro de otras funciones pueden tener
    acceso a las variables de sus padres, pero sus padres no pueden tener acceso a las variables de sus hijos, de igual
    forma las fucniones hijas pueden ser invocadas por las funciones padres, pero solo las de su primer nivel, 
    aré un ejemplo en donde existen tres niveles, el primer nivel solo puede acceder a las funciones que hay en él y no 
    a las funciones que existen dentro de la función del segundo nivel. Las funciones hijas pueden acceder a todas las 
    variables de su decendencia, si existen variables con el mismo nombre accederá a la que esta más cerca de ella,
    es decir si existe una variable con el mismo nombre en el primer y segundo nivel, la funcion del tercer nivel 
    primero utilizara la variable que esta en el segundo nivel porque es la que es más cercana a ella. 
*/

function primerNivel(){
    let a =1;
    function segundoNivel(){
        let b = 2;
        console.log('Estoy en el segundo nivel.');
        function tercerNivel(){
            let c = 3;

            console.log('Estoy en el tercer nivel.');
        }
    }
    segundoNivel();

}

primerNivel();