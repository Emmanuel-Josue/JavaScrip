
/*
    Se utiliza para ahorrar código 
*/

class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

// Un empleado es una persona, pero no todas las personas son empleados 

class Empleado extends Persona{
    constructor(nombre, apellido, id){
        super(nombre, apellido);
        this._id = id;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
}

class Gerente extends Empleado{
    constructor(nombre, apellido, id, claveAbsoluta){
        super(nombre, apellido, id);
        this._claveAbsoluta = claveAbsoluta;
    }
    get claveAbsoluta(){
        return this._claveAbsoluta;
    }
    set claveAbsoluta(claveAbsoluta){
        this._claveAbsoluta = claveAbsoluta;
    }
}

let primerGerente = new Gerente('Emmanuel', 'Hernandez',4321, 55555);

console.log(primerGerente.nombre);

/*
    ------------------- ARGUMENTOS DEL CONSTRUCTOR --------------------

    Si no colocamos los argumentos que requiere el constructor a la hora de crear un objeto los inicializara 
    con el valor de undefine o los valores preestablecidos que le indiquemos. 
    El orden en como se crean los parametros es como se deben de pasar los argumentos, debe de respetarse el orden. 
*/