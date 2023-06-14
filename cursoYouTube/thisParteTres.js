/*
    ---------------------------------------- This parte tres -----------------------------------------------

    Notas:
    *   AL pasar una referencia de un método a una constante global y llamar a la función desde la 
        constante hace a la función parte del objeto globla. 
    *   Las funciones flecha funcionan diferente con el objeto this.  
    *   Lo común es que dentro de los objetos utilicemos funciones declarativas y dentro de ellas podermos 
        utilizar funciones flecha. 
    *   Las funciones flecha heredan el objeto this de funciones declarativas o expresivas, si no las hay o si 
        estas funciones flecha no estan dentro de un tipo de estas funciones entonces heredan el objeto que las 
        contienen que suele ser el objeto global o uno objeto especial que deriva de este como document o alert. 
*/


const objetoA = {
    primeraFuncion : () => {
        imprimir =() => {
            console.log(this);
        }
        imprimir();
    },
    segundaFuncion(){
        imprimir = () =>{
            console.log(this);
        }
        imprimir();
    },
    funcionExpresiva : funcionExpresiva = function() {
        imprimir = () =>{
            console.log(this);
        }
        imprimir();
    }
}

objetoA.primeraFuncion();
objetoA.segundaFuncion();
objetoA.funcionExpresiva();
