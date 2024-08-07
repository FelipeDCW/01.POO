class Consultorio {
    constructor(nombre, paciente){
        this._nombre = nombre
        this._paciente = paciente
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }

    get paciente(){
        return this._paciente
    }

    set paciente(paciente){
        this._paciente = paciente

    }

}

class Paciente{
    constructor(nombre, edad, rut, diagnostico){
        this._nombre = nombre
        this._edad = edad
        this._rut = rut
        this._diagnostico = diagnostico
    }

    get nombre(){
        return this.nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }

    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad
    }

    get rut(){
        return this.rut
    }
    set rut(rut){
        this._rut = rut
    }
    get diagnostico(){
        return this._diagnostico
    }
    set diagnostico(diagnostico){
        this._diagnostico = diagnostico
    }

}
let paciente = new Paciente(`Felipe`, `46`,`1111111-1`,`Colesterol`)
console.log(paciente)

let consultorio = new Consultorio(`Cerro Navia`,Paciente)
console.log(consultorio)