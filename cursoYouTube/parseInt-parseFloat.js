let cadena1 = "28", // ambos lo convertirán en un núero
    cadena2 = "22.3264585",// parseInt solo convertira el número 22
    cadena3 = "1 caballo",// en este tipo de String ambos métodos funcionaran porque si el primer caracter es número sí lo toman e ignoral el resto.
    cadena4 = "Caballo No. 1",// Al ser el primer caracter una letra no funcionarán ambos métodos
    cadena5 = "2 ** 3",// Los métodos no reconocen esto como una operación aritmetica sino como un sting y solo tomarán el primer número
    cadena6 = "$50";// Igual que el caso anterior no funcionara a menos de que utilicemos algún método que elimine el primer caracter. 

    let resultado = parseInt(cadena2);
    console.log(resultado);

    let resultado2 = parseFloat(cadena2);
    console.log(resultado2);