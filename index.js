/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {CuentaAhorro} from './CuentaAhorro.js';
import { Cuenta } from './Cuenta.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, '9985', '001',0);

const cuentaSimple = new Cuenta(cliente ,'098', '001', 100);

console.log(cuentaSimple);


