/*
    --------------------------------------- Promesas ------------------------------------

    Una promesa es algo que estará atento con la respuesta que nos brinde el código que le delegamos al navegador 
    o a otra cosa, una vez obtenga la respuesta la promesa nos dira qué fue lo que paso, aún no me queda claro si 
    nos dira al momento en que javaScrip no tenga más tareas que hacer o lo podra hacer interrumpiendo lo que 
    javaScrip este haciendo. 
    Las promesas en javaScrip son una clase que tenemos que instanciar para poder utiolizar, recibe un parametro que es 
    una función en la cual debemos de colocar forzozamente dos parametro o arguementos que son funciones predeterminadas 
    que utilizara la clase, las cuales sirven para darnos avisarnos si la respuesta fue positiva o negativa.  
*/

const primerPromesa = new Promise((resolve, reject) => {
  //Cuerpo de la función a ejecutar-----------
  const num = Math.random();
  console.log(num);
  if (num < 0.5) {
    return resolve();
  }
  return reject();
});

// Lo que entiendo es que se le da una función a la clase en donde tomando esta función en su contracutor
// creara dos funciones las cuales le dara como parametro a la fución que la pasamos y ejecutara esta función.

// Podemos utilizar estos métodos para ejecutar algo en el resultado verdadero o falso que nos de el método constructor
/*
primerPromesa.then(() => {
    console.log("Verdadero");
  }).catch(() => {
    console.log("Falso");
  });
  */

// ------------------------------------ Comunmente las promesas se encuentran dentro de una función -----------------

function funcPromesa() {
  // Retornara un objeto de tipo Promise
  return new Promise((resolve, reject) => {
    // Con setTime simulamos el código que se le da al servidor
    setTimeout(() => {
      let num = Math.random();
      if (num > 0.9) {
        //Retornamos un resolver en caso de que la condición sea positiva
        return resolve();
      }
      return reject();
    }, 5000);
  });
}

//La función nos devuelve un objeto promesa con el cual podemos utilizar los métodos then y catch con una sintzxis 
//que aún no comprendo. 

/*
    *   Then se activa en caso de que se ejecute resolve resolve
    *   cath se activa en caso de que se ejecute reject
    *   Sus parametros en un método que van a ejecutar
*/
funcPromesa().then(() => {
    console.log(' True: El resultado fue menor a 0.5');
}).catch(() => {
    console.log(' False: El resultado fue mayor a 0.5');
});



// ----------------------------- Mapa de pensamiento sobre las promesas --------------------------------
/*
  ¿Qué es una promesa ?
  Una promesa es una clase que nos ayuda a manejar y controlar código que se delega a algo más para que lo 
  ejecute. 

  ¿De qué esta compuesta una la clase promesa ? 
  Principalmente se compone de 

  - Código que delegamos al navegador o servidor: se lo pasamos como método al cual le "colocamos dos parametros" que 
    tomarán dos métodos que se los asignara la clase promise, el código de este método es el que se ejecutara o tratara 
    de ejecutarse. 
  
  - resolve: Es un método que crea la clse promise y por defaul se lo asigna al método que recibe el constructor (Código 
    que nosotros le enviamos), este método resolve se ejecutara en caso de que la ejecución de nuestro método sea exitosa y 
    al ejecutarse internamente, no puedo ver el código de como sucede esto, le envia un objeto al método then, no tengo 
    claro qué es este objeto. 

  - rejec: Es un método que crea la clse promise y por defaul se lo asigna al método que recibe el constructor (Código 
    que nosotros le enviamos), este método resolve se ejecutara en caso de que la ejecución de nuestro método fracase y 
    al ejecutarse internamente, no puedo ver el código de como sucede esto, le envia un objeto al método catch, no tengo 
    claro qué es este objeto.  

  -then: Es una propiedad, método que tiene nuestra clase promise que recibe el objeto que envie el método resolve
  y con este objeto o sin el puede ejecutar las intrcciones que coloquemos en él. este método se ejecuta si el 
  código que delegamos fue exitoso.

  -catch: Es una propiedad, método que tiene nuestra clase promise que recibe el objeto que envie el método rejec
  y con este objeto o sin él puede ejecutar las intrcciones que coloquemos en él, este método se ejecuta si el 
  código que delagamos fracaso en ejecutarse o sucedio un error. 

  ¿Que hace una pormesa ? 

  Espera el resultado de la ejecución, si fue exitosa o no y ejecuta las acciones que le indiquemos en base a al 
  resultado que le brindamos. 

  ¿Qué es el código asincrono ?
  Es código que se ejectura en otro lado diferente a donde se ejecuta el resto de nuestro código. 

  ¿Para qué se utiliza las promesas ? 
  Para seguir ciertas acciones dependiendo de la ejecución exitosa o negativa del código que delegamos. 

  
    ¿Qué es el objeto que le envian los métodos sesolve y reject a then y catch ? 
      Puede ser el dato que se obtuvo de la ejecución exitosa del código, o un objeto con 
      el tipo de error que ocaciono el fracaso del código.

*/

//--------------------------------- Promesas (resumen) ----------------------------------------------

/*
    En JavaScrip podemos utilizar código asincrono que basicamente es delegar una parte de código a algo más para 
    que lo ejecute, mientras esto sucede el resto de código que tenemos se podra seguir utilizando hasta que el 
    código que delegamos se termine de ejecutar y nos brinde una respuesta, para poder manejar este proceso existe 
    una clase llamada Promese (Promesas) que nos ayuda a llevar el contro del código que se ha delegado, lo que hace
    es esperar el resultado de la ejecución de dicho código y en base a este resultado ejecuta las acciones que le 
    indiquemos.

    La escructura base de la clase promesa es la siguiente, al crearla le enviaremos el código que queremos delegar
    en forma de función, la clase promesa internamente le asignara dos funciones a la función que le dimos llamadas
    resolve y reject, resolve se ejecutara si el código se ejecuto sin problemas y reject si el código fracaso, es-
    tos dos métodos estan de alguna manera conectados con otros dos métodos llamados then y catch, resolve con then 
    y reject con catch, then y cath son llamados externamente desde una instancia de la clase, en ellos colocaremos 
    el código a ejecutar segun la respuesta de ejecución del código asincrono, en then colocaremos lo que se ara 
    si el códgio fue exitoso y en catch lo que se ara si no lo fue, tanto resolve y reject pueden enviarle un objeto 
    al método al que estan conectados, este objeoto es un dato que se pudo obtener de la ejecución exitosa del código
    o un objeto que indique el error del porque el código fracaso, para que este al momento de ser utilizado pueda 
    utlizar el objeto.  
*/

