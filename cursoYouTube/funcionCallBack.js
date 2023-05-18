/* 
    Son funciones que tienen como parametro otra u otras funciones las cuales utilizaran en su interior.
    Me ha surgido una duda y es que en java una función podia llamar a otra función en su interior sin necesidad 
    de que se le pasara como parametro dicha función, pero también recuerdo que existieron clases en donde como 
    parametro se le enviaba una función. Realizaré algunos experimentos     
 */

    function unoImprimir(texto)
    {
        console.log(texto);
    }
    function dosSuma(unoNumero, dosNumero,)
    {
        let resultado;
        return resultado = unoNumero + dosNumero;
    }

    function tres(funcionParametroUno, funcionParametroDos)
    {
        let resultadoSuma = funcionParametroDos(8, 2);
        funcionParametroUno(resultadoSuma);        
    }

    tres(unoImprimir, dosSuma);

    //--------------------- Experimento dos   -------------------------------------

    function cuatroImprimir(texto)
    {
        console.log(texto);
    }
    function cincoSuma(unoNumero, dosNumero,)
    {
        let resultado;
        return resultado = unoNumero + dosNumero;
    }

    // -------------------- Experimento tres --------------------------------------
    function seis()
    {
        let resuladoSumaDos = cincoSuma(6, 6);
        cuatroImprimir(resuladoSumaDos);
    }

    seis();

    cuatroImprimir(dosSuma(9, 9));


    /*
        Preguntas que me han surgido 
        
        1.- ¿ En qué situación se tendrian que utilizar las funciones de callBack ?
    */

    /*
        Lo que realice 

        Realice tres experimentos; en el primero realice lo que vi en el video que es darle a una función como
        argumentos otras funciones y que en su interior las utilizara.
        En el segundo experimento lo que realice fue que en el interior de una función llamara a otras funcuones, las 
        utilizar sin darselas como parametros. 
        En el tercer experimento lo que hice fue que en el parametro de una función utilice o envie como argumento otra 
        función que retornava un valor entonces lo que envie como argumento fue en realidad el resultado o el retorno 
        de valor de una función. 

        *   Callback significa o se traduce como "llamar de vuelta. "
        *   El tipo de funciones que utilizamos en estos experimentos tienen hoisting 
    */