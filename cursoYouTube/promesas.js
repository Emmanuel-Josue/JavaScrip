/*
    --------------------------------------- Promesas ------------------------------------

    Una promesa es algo que estará atento con la respuesta que nos brinde el código que le delegamos al navegador 
    o a otra cosa, una vez objenga la respuesta la promesa nos dira qué fue lo que paso, aún no me queda claro si 
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
if (num < 0.5 ){
    return resolve();
}
return reject();
});

// Lo que entiendo es que se le da una función a la clase en donde tomando esta función en su contracutor 
// creara dos funciones las cuales le dara como parametro a la fución que la pasamos y ejecutara esta función. 


// Podemos utilizar estos métodos para ejecutar algo en el resultado verdadero o falso que nos de el método constructor
primerPromesa.then(() => {
    console.log('Verdadero');
}).catch(() => {
    console.log('Falso');
})