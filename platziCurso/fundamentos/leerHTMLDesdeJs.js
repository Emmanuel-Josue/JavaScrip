
// Para poder interactuar con el documento HTML podemos utilizar el objeto document que tiene diferentes funciones 
//para poder interactuar con el HTML, estas funciones u objetos son brindados por el navegador. 


//Variables que representaran a cada elemento

// Esta función sirve para seleccionar un elemento de HTML, se lo indicamos atravez de un string
const h1 = document.querySelector('h1');

//Podemos indicar a que elemento debe tomar como si estuvieramos haciendo un selector. 
const cp = document.querySelector('.cParrafo'); 

// Lo que sucede al colocar las llaves es que el console.log interpeta las variables como objetos e imprime todas las 
//propiedades que existen en los objetos. 
console.log(    
    {
        h1,
        cp
    }
)

// De esta forma nos muestra el contenido que tiene la etiqueta
console.log(h1);

// A travez del h1 podemos acceder a las propiedades de este elemento, podemos saber cuando le dan click o 
// cuando pasan el mause por él, también las clsases que tiene o los id con los que cuenta. 

console.log(h1.className);// Con esta función podemos acceder al nombre de la clase que tiene, ósea, titulo-Principal,
// esto lo podemos guardar en una variable para hacer algo. 

// Para cambiar el texto a un elemento h1 podemos utilizar. Con esta fución  podemos escribir 
// codigo HTML 

h1.innerHTML = 'Empezando a entender las funciones <br> del objeto que brinda el navegador '

// Al colocar la propiedad anterior se corre el riesgo de que alguien externo pueda modificar nuestro 
// archivo, lo que podemos hacer es utilizar la propiedad innerTex, este solo traduce texto al HTML

h1.innerText = 'Hola';

// Nos ayuda a leer atributos de nuestros elementos 
let atributo = h1.getAttribute('class');

console.log(atributo);

// Con set podemos modificar la clase de atributo que tiene 

h1.setAttribute('class', 'pan');

atributo = h1.getAttribute('class');

console.log(atributo);

//La siguiente función funciona especificamente con las clases

//le agregamos una clase
h1.classList.add('mesa');

//Para eliminar alguna clase que tenga 

h1.classList.remove('pan');

//Para crear un elemento nuevo 

const imagen = document.createElement('img');

// ahora tiene las propiedades de un elemento img

imagen.setAttribute('src', 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=600');


console.log(imagen);

//colocamos el elemento en el elemento

cp.append(imagen);



