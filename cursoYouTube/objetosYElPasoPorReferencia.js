/*
    Cuando creamos un objeto o un array estos apuntan a un lugar(dirección) especifico de memoria no a un valor especifico, este 
    lugar nunca va a cambiar es por eso que casi siempre se crean utilizando const 

    Aremos un ejemplo en donde se comparan las posiciones en memoria y al hacer esto hay que entender 
    que se estan comparando los apuntadores(las direcciones que tienen) no los valores que tienen
*/

const primerObjeto = {  // 2541
    uno: '1',
    dos: '2'
}
const tercerObjeto = {
    uno: '1',
    dos: '2'
}
const segundoObjeto = primerObjeto;// ambos apuntan al lugar 2541

if (segundoObjeto === primerObjeto) {
    console.log('Tienen la misma posición ');    
}
else{
    console.log('No tienen la misma posición');
}


/*
    Realice un pequeño experimento en donde declaro a dos objetos con const y les asigno una dirección, luego de hacer 
    esto quiero volver a asignarles otra dirección, pero esto marca error, esto se resuelve si los declaro o los creo con 
    let, creo que esto lo puedo utilizar para de alguna manra manipular algo en sierta situación. 
    Lo mismo pasa con los arrays. 
*/

