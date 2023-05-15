export class Empleado{
    #nombre;
    #dni;
    #salario;

    constructor(nombre, dni, salario){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
    }

    verBonificación(){
        return this.#salario;
    }

    _verBonificación(bono){
        return this.#salario + this.#salario*bono/100;
    }
}