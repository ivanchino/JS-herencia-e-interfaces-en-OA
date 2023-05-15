/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaNomina } from './Cuentas/CuentaNonima.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez', '12345', 10000);
const gerente = new Gerente('Pedro Rivas', '234233', 12000);
const director = new Director('Elena Moreno', '131445', 15000);

console.log(empleado.verBonificación());
console.log(gerente.verBonificación());
console.log(director.verBonificación());










/*Referente a cuentas
const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, '9985', '001',0);

const CuentaNominaLeonardo = new CuentaNomina(cliente,'9854', '001',100)

CuentaNominaLeonardo.depositoEnCuenta(150);
console.log(CuentaNominaLeonardo.verSaldo());

CuentaNominaLeonardo.retirarDeCuenta(50);
console.log(CuentaNominaLeonardo.verSaldo());
*/