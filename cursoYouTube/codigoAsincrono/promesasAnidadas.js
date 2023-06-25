function funcPromesa(rutaABuscar) {
  // Retornara un objeto de tipo Promise
  return new Promise((resolve, reject) => {
    // Con setTime simulamos el código que se le da al servidor
    setTimeout(() => {
      // Creamos un objeto 
      const objeto = {
        //Creamos las llaves del objeto utilizando la forna de stings 
        'users': [
          { id: 1, nombre: 'Patricio' },
          { id: 2, nombre: 'Carmelo' }
        ],
        'users/1': {
          user: 'Emmanuel',
          edad: 25,
          ultimaNota: 1234
        },
        'users/1234': {
          id: 1234,
          titulo: 'Solución exitosa !!'
        }
      }
      let dato = objeto[rutaABuscar];
      if (Array.isArray(dato)) {
        resolve(dato[0]);
      }
      else if (typeof (dato) == 'object') {
        resolve(dato);
      }
      else {
        reject({ status: 'No se encontro la ruta' });
      }
    }, 1000);
  });
}

/* -------------------------------------------
 
funcPromesa('users').then((objeto) => {
      // Objetenemos el valor de la llave id y lo converimos a stirng
      console.log(objeto);
      
      let restoDeCadena = objeto.id.toString;
      let rutaABuscar = 'users/' + restoDeCadena;
      console.log(rutaABuscar);
      
    funcPromesa(rutaABuscar).then((objeto) => {
      console.log(objeto.ultimaNota);
      
    }).catch((objetoError) => {
      console.log(objetoError.status);
      
    });
    
}).catch((objeto) => {
  console.log(objeto.status);
  
});

-------------------------------------------------------------------------------------------------------- 
*/

// ------------- Una manera de simplificar las acciones then anidadas es la siguiente -------------------

funcPromesa('/user').
  then((objeto) => {
    // Objetenemos el valor de la llave id y lo converimos a stirng
    console.log(objeto);
    let restoDeCadena = objeto.id.toString;
    let rutaABuscar = 'users/' + restoDeCadena;
    console.log(rutaABuscar);
    return funcPromesa(rutaABuscar);// Retorna una promesa que utilizara un then
  }).then((objeto) => {
    console.log(objeto.ultimaNota);
  }).catch((objeto) => {
    console.log(objeto.status);

  });