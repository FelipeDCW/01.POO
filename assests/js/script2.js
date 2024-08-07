class Sala{

    constructor (numeroSala, estudiante ){

        this._numeroSala = numeroSala 
        this._estudiante = estudiante
    }

    get numeroSala(){
        return this._numeroSala
    }

    set numeroSala(numeroSala){
        this._numeroSala = numeroSala
    }

    get estudiante(){
        return this._estudiante
    }

    set estudiante(estudiante){
        this._estudiante = estudiante
    }
}

class Estudiante {
    constructor (id, rut, nombre){
        this._id = id
        this._rut = rut
        this._nombre = nombre
    }

    get id(){
        return this._id
    }
    set id(id){
        this._id = id
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
        this._nombre = nombre
    }
}

let estudianteuno = new Estudiante(`1`, `11111111-1`,`felipe`)
let estudiantedos = new Estudiante(`2`, `22222222-1`,`antonio`)
let estudiantetres = new Estudiante(`3`, `3333333-1`,`Del Campo`)

let estudiante = []
estudiante.push(estudianteuno, estudiantedos, estudiantetres)
let sala = new Sala(`1`, estudiante)

console.log(sala)
console.log(sala.estudiante)
