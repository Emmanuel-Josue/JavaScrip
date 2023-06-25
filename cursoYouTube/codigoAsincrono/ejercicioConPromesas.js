function funcPromesa(rutaABuscar) {
    // Retornara un objeto de tipo Promise
    return new Promise((resolve, reject) => {
      // Con setTime simulamos el código que se le da al servidor
      setTimeout(() => {
        // Creamos un objeto 
        const objeto  = {
            //Creamos las llaves del objeto utilizando la forna de stings 
            '/pat' : 'rutaUno',
            '/usuario' : {
                user : 'Emmanuel',
                edad : 25
            }            
        }
        //Accedemos a la llave utilizanod un strig entre parentesis, no el nombre en sí, si la llave 
        //existe se le asignara a la variable datoExiste si no es así la variable se inicializara con 
        // undefine
        let datoExiste = objeto[rutaABuscar];
        if (datoExiste) {
            resolve({status: 'Se encontro'});
        }
        else{
            reject({status: 'Ruta no encontrada, 404'});
        }
      }, 1000);
    });
  }
  
  
  funcPromesa('usuario').then((objeto) => {
      console.log(objeto.status);
      
  }).catch((objeto) => {
    console.log(objeto.error);
    
  });