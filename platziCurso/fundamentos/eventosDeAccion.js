// Definiendo las variables con los elementos de HTML 
const INPUT = document.querySelector('#entrada');
const INPUTDOS = document.querySelector('#entradaDos');
const p = document.querySelector('#a');

//Variables a utilizar para la operación 
let a,
    b,
    resultado,
    texto;
    
//  Inicializmas las variables 

function btOnClick(){
    resultado = a + b;
    console.log(resultado);    
    texto = String(resultado);
    console.log(typeof texto);
    console.log(INPUT);
    console.log(p);
    p.innerText = texto;

}

function inpUno()
{
     // Con el .value obtenemos el valor que hay en el input 
    a = Number(INPUT.value);    
}
function inpDos()
{
    b = Number(INPUTDOS.value);  
}




