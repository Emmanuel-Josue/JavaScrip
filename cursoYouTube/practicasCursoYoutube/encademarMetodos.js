class Persona{
    constructor(nombre = 'No se coloco el nombre'){
        this._nombre = nombre;
    }

    correr() {
        console.log('Correr');
    }

    saltar(){
        console.log('Saltar');        
    }
    caminar(){
        console.log('caminar');
    }

}

const personaUno = new Persona('Emmanuel');

//personaUno.caminar().saltar();