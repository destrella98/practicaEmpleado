import { Injectable } from '@angular/core';
import { Empleado } from './empleado/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoBDDService {

  private empleados:Empleado[]=[
    new Empleado("Juan","Pérez","Presidente",3500),
    new Empleado("María","López","Directora",2300),
    new Empleado("Andrés","Rodríguez","Gerente",1800),
    new Empleado("Fulano","Detal","Administrativo",1000),
    new Empleado("Fulana","Decual","Secretaria",800)
  ];
  
  constructor() { }

  readEmpleados():Empleado[]{
    return this.empleados;
  }

  createEmpleado(empleado:Empleado):void{
    this.empleados.push(new Empleado(empleado.nombre,empleado.apellido,empleado.cargo,empleado.salario));
  }
}
