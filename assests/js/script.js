class Persona {
    constructor(rut, nombre, edad,altura, direccion) {
        this._rut = rut
        this._nombre = nombre
        this._edad = edad
        this._altura = altura
        this._direccion = direccion
    }

    caminar(){
        console.log(`Caminando`);
    }

    get rut(){
        return this._rut
    }
    set rut(rut){
        this._rut = rut
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        let regex = new RegExp(`^[a-zA-Z ]+$`)
        if(regex.test(nombre)){
            console.log(`seteado correctamente`)
            this._nombre = nombre
        }
        else{
            console.log(`esto no corresponde`)
        }
        
    }

    get altura(){
        return this._altura
    }
    set altura(altura){
        this._altura = altura
    }
    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad
    }
    get direccion(){
        return this._direccion
    }
    set direccion(direccion){
        this._direccion = direccion
    }
}

let personauno = new Persona();
let personados = new Persona();
let personatres = new Persona();

console.log(personauno,personados,personatres)
personauno.caminar()
console.log(personauno.rut)
personauno.nombre=`felipe `
