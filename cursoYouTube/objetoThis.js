/*
    ------------------------------------------ This --------------------------------

    Primer acercamiento sobre qué es lo que entiendo por this :

    Desde la palabra en el título " objeto " podemos entender que es un objeto o contenedor el cual cuenta 
    con propiedades y métodos yo puedo intuir que este objeto solo es válido dentro del bloque de código en
    donde se invoca, y hace referencia a las cosas que existen dentro de él, ósea, atributos 

    Resumen luego de ver el video 

    Bibliografia: https://youtu.be/TUqz2PPtx_k?list=PLpJ0pHgIwPoHeOw6_yRERfEF5pXjyAIcK

    El objeto this es una palabra reservada de js que hace referencia al objeto, this debe de estar dentro de un objeto 
    para cuando se invoque en su interior haga referencia a este objeto, el objeto en el que existe es su contexto, 
    se puede decir que this funcion en el contexto (objeto) en el que se encuentre. Al utilizarce en funciones 
    this ara referencia al objeto en donde se encuentre esta función. 

    Existe un objeto global llamado window el cual se puede decir que cotiene a la mayoria de cosas que creamos 
    en código, este objeto es especial ya que no hay necesidad de colocar el nomnbre de dicho objeto, funciones y 
    propiedades se pueden utilizar con tan solo colocar el nombre de dichas funciones o propiedades, hay algunas 
    excepciones que no forman parte de este objeto global como " let " y " const ".

    Al crear un objeto y utilizar this dentro de este, this ara referencia al contexto en el que fue creado, ósea, al
    objeto en el que recide, si se utiliza fuera de un objeto this ara referencia al objeto global, ósea, window. 

    Notas proporcinadas en el video

    This en un objeot especial en js que hace referencia al contexto en el que se ejecuta la función.

    Objeto -----> método ------> this referencia al Objeto
    función ----> this referencia al objeto global (window en navegadores y global en node)

    -------- PREGUNTAS NO RESUELTAS --------------
    ¿ Qué es node ? 
*/

// objeto global
// Hay que ejecutar la siguiente linea en el navergador para que funcione.

//console.log(window);

let objeto = {
  uno: 1,
  dos: 2,
  tres: 3,

  primera() {
    console.log("la variable vale : " + this.uno);
  },
};

objeto.primera();

/*
// Experimento en donde creamos una función dentro de un objeto y la llamamos de forma externa 
objetoDos = {
    primeraFuncion(x, y){
        return function (nombreProfesor) {
            console.log(this);
            return 'El profesor ' + nombreProfesor + ' saluda a los alumnos ' + x + ' y ' + y;
        }
    }
}

const funcionCreada = objetoDos.primeraFuncion('Alex', 'Julian');



console.log(funcionCreada('Antonio'));
funcionCreada('lopez');

*/

/*
    --------------------------------------- Relación partes - todo -------------------------------

    Aplicando la escalera de la metacognición antes de aplicar la destreza

    1.- Identificar la destreza a utiliza: relación de las partes con el todo 
        *   Busque el mapa de pensamiento 
    2.- Describir lo que uno hace 
        *   Voy a ir por cada video (clase) tomado y colocaré las partes que identifique, luego de esto al tener 
            todas las partes voy a describirlas, desarrollarlas para que al final pueda hacer una redacción.
    
    3.- Me he tardado mucho en empezar el proceso, si soy expicito he empezado desde las 9 a pensar en como aplicar 
        la destreza lo que me llevo a recordar la escalera de la métacognición. 
    4.- La proxima vez ya  sé en donde puedo consultar el mapa de pensamiento de la destreza y que debo aplicar la 
        escalera de la metacognición. 

        PARTES DEL OBJETO THIS ---- NO estoy seguro de que esta destreza se utilice con este tema 

    *   Lo que puede hacer 
        * Hace referencia al objeto según en el contexto en que este, por contexto podemos pensar que es el bloque 
          en el que recide. 
        * Creo que el contexto es el scope en donde radica this. 
        * El objeto al que esta ligado depende de donde y en que contexto se llame a this.  
        * No es común que en los objetos se utilicen las funciones flecha
        * AL pasar una referencia de un método a una constante global y llamar a la función desde la 
          constante hace a la función parte del objeto globla. 
        * Las funciones flecha funcionan diferente con el objeto this.  
        * Lo común es que dentro de los objetos utilicemos funciones declarativas y dentro de ellas podermos 
          utilizar funciones flecha. 
        * Las funciones flecha heredan el objeto this de funciones declarativas o expresivas, si no las hay o si 
          estas funciones flecha no estan dentro de un tipo de estas funciones entonces heredan el objeto que las 
          contienen que suele ser el objeto global o uno objeto especial que deriva de este como document o alert. 
        *   This siempre se utiliza dentro de un objeto, el contexto seria ese objeto. 
        * Para entender mejor el comportamiento de this en las funciones flecha debo de comprender como se utilizan 
          en el interior de funciones como addListener. 

          Mapa de pensamiento nuevo 

          ----------- ¿ Cómo funciona ? -----------------------

          ¿Qué puede hacer ?
          Es como un pronombre, puede realizar las mismas acciones de un objeto, es como si se nombrara o referenciara 
          a un objeto con un nombre especifico pero se puede utilizar a this como un pronombre en donde esta palabra 
          reemplazara al nombre especifico que se le asigno al objeto.

          ¿Para qué sirve ?
            Se utiliza para no tener que escribir exactamente el nombre del objeto y para que en cierto contexto nos 
            podamos referir al mismo objeto en donde estamos. 

          ¿Cómo lo hace ? 
            No sé. Pero para hacer referencia a un objeto deben de cumplirse ciertos criterios

          ¿ En qué situaciones cambia ?
            Existen distintas situaciones con criterios diferentes, el primero es cuando nos encontramos en el 
            scope global, si creamos una función en este y llamamos a dicha función desde este mismo lugar 
            el this de esta función es el objeto global, si creamos una función expresiva y la variable pertenece 
            al scope global entonces la variable pertenece a el objeto global por tanto this ara referencia al objeto 
            global. 
            La segunda situación es cuando utilizamos this dentro de un objeto o en el scope de un objeto que 
            seria el escope local de dicho objeto, podemos utilizar this para hacer referencia a los atributos 
            de este objeto y a las funciones y esto sucedera así siempre que se llame a la función desde el objeto y 
            que sea una función declarativa o expresiva. 

            Existe una tercera situación que es con las funciones flecha, this ara referencia al objeto al cual perte-
            nezca el scope en donde la función flecha se esta ejecutando. 

            ¿ En qué situaciones podemos utilizar a this ? 
            * Estando en el scope global 
            * En el scope local de un objeto 
            * En el scope local de una funcion 
        

            ----------------- Crear una redacción  -----------------------------


            This es una forma de hacer referncia en el interior de un objeto al mismo objeto, a qué objeto referencie 
            this o punte depende del contexto en el que este, sí debe de estar dentro de un objeto, pero debemos poder 
            identidicar en qué interior esta, pueden presetnarse distintas situaciones, la primera es cuando nos encon
            tramos en el scope global, podemos utilizar this para llamar a atributos o métodos pertenecientes al 
            objeto global, la segunda es cuando nos encontramos en el scope local de un objeto, de igual forma podemos 
            utilizar this para llamar a atributos o métodos pertenecientes a este objeto. Hay que entender que this de 
            alguna manera actua como un pronombre ya que reemplaza al nombre otiginal del objeto, dependiendo del contexto
            this sabe a qué objeto se dirifira, y utiliza todo lo perteneciente a dicho objeto. Existe una excepción sobre 
            el comportamiento de this segun su contexto y es en las funciones flecha, cuanto utilizamos alguna, en su 
            interiro al utizar this este eredara el this del scope donde se ejecuta es por esta razon que normalmente en 
            objetos no crearemos este tipo de funciones, pero sí es comun que adentro de las funciones expresivas o declara-
            tivas pertenecientes a un objeto es común utilizar funciones flecha para que estas hereden el this del objeto 
            en donde reciden los métodos. 

            Hacer una segunda iteración de la redacción. 
            
            */
