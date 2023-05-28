
// Con él podemos romper cualquier tipo de bucle en javaScrip 


let array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
    console.log('Posición: '+ i);    
    if(i == 1) break;
}

/*
for (let i = 0; 1 < 5; i++) {
    if(i === 3) break;
    console.log('posición: ' + i);
}
*/


// El break basicamente es para cortar el bucle y usualmente se utiliza con los bucles indeterminados, en los ejemplos del 
// video se utilizo esta palabra resebada en combinación con un if, pero me pregunto si se puede utilizar con otro tipo 
// de condicional. 