const votos = ['si','no','no','si'];

const conteos = votos.reduce(function(conteo, votoActual){
    if (conteo[votoActual]) {//Se pregunta si existe el atributo, si existe le suma una unidad
        conteo[votoActual]++;// Se obtiene el valor que tiene el atributo y se le suma una unidad
    }
    else{
        conteo[votoActual] = 1;// Se crea el atributo y se le asigna el valor de uno porque es el primer voto
    }
    return conteo;// Al no estar esta linea por qué me marca erro de no podeer leer la segunda posición del arreglo?
}, {});// El dato con el que se inicializa es un objeto

console.log(conteos);

/*
    El principal bug al realizar este ejercicio fue uno que mandaba el siguiete mensaje "Cannot read property 'no' of undefined "
    el mensaje quiere expresar que no se puede acceder a una propiedad de un objeto que no ha sido definido y esto es 
    así porque no coloque un retorno de valor en mi función callbak, esto se arreglo colocando dicho retorno pero 
    no pude interpretar el mensaje de manera adecuada, localice el bug con ayuda de la IA.

    Una cosa que quiero hacer notar en este ejercicio es que se le esta asignando o creando un atributo por medio 
    de una forma que no es muy común, hablo de formas de crear atributos, nomalmente estoy a costumbrado a crear 
    atributos de la siguiente manera 

    {
        atributoUno: 'oso';
        atributoDos: 2;
    }

    objeto.atributoNuevo = 25;

    En javaScrip podemos crear atributos con espacios y crear atributos utilizando corchetes en los cuales colocaresmo 
    el atributo que quetamos crear entre comillas 

    objeto['nuevoAtributo'];
    objeto['nuevo atributo'];

    Ruta en donde se vio el tema de maneras de crear atributos:

    /home/emmanuelub/Programacion/javaScrip/cursoYouTube/objetos.js
    
*/

// Forma reducida de replicar la función de la misma función +

