/*
    ----------------------------------- Delegar procesos al nevegador -------------------------------
    
    Bibliografia: https://youtu.be/Y6U-gkbeZGk?list=PLpJ0pHgIwPoHeOw6_yRERfEF5pXjyAIcK

    ¿Qué es una promesa ?

    ¿Qué es el código asincrono ? 
    Es cuando se ejecutan dos códigos al mismo tiempo, lo qué no entiendo es que si se ejecutan en distintas partes 
    o se ejutan en el mismo procesador turnandocelo. 

    ¿Qué código delega javaScrip ? 

    ¿Qué criterios utiliza para elegir el código que delegara ? 


    Lo que hentendí del video es que javaScrip ejecuta el código que tiene, pero existe código que puede tardar mucho en 
    ejecutarse, en estos casos javaScrip le da este código al navegador para que lo ejecute y mientras se esta 
    ejecutando javaScrip continua ejecutando el código que tiene, cuando se ejecuta o se objtien una respuesta del 
    código que se delego se manda a otra area en donde se espera que javaScrip tenga tiempo y pueda ejecutar la respuesta. 


    Notas del video:

    Normalmente las peticiones a servidores son las que delega al navegador, le dice que espere la respuesta y cuando 
    javaScrip termine de ejecutar lo que tenga que hacer, recibe la respuesta del navegador 


*/

console.log(1);
setTimeout(function(){
    console.log('Me ejecute en otro lado y por eso estoy al ultimo');
}, 1);
console.log(2);