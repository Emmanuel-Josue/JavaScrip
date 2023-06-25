
// ------------------------------------ Comunmente las promesas se encuentran dentro de una función -----------------

function funcPromesa() {
  // Retornara un objeto de tipo Promise
  return new Promise((resolve, reject) => {
    // Con setTime simulamos el código que se le da al servidor
    setTimeout(() => {
      let num = Math.random();
      if (num < 0.9) {
        //Retornamos un resolver en caso de que la condición sea positiva
        return resolve({status: 'Se realizo exitosamente'});
      }
      // Cuando se ejecuta resolve o reject internamente le pueden pasar un objeto a los métodos then o catch 
      // los cuales utilizaran este objeto para saber el tipo de cosa que paso. 
      return reject({ error: 404 });
    }, 1000);
  });
}


funcPromesa().then((objeto) => {
    console.log(objeto.status);
    
}).catch((objeto) => {
  console.log(objeto.error);
  
});


