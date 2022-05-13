import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Empleado } from './empleado/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoBDDService {

  private empleados:Empleado[]=[];
  
  constructor(private dataService:DataService) {     
  }

  ngOnInit():void{
  }

  setEmpleados(empleados:Empleado[]):void
  {
    this.empleados=empleados;
  }

  getEmpleados():Empleado[]{
    return this.empleados;
  }


  async readEmpleados(){

    this.empleados=<Empleado[]>(await this.dataService.readEmpleados());
    return this.empleados;
  }

  createEmpleado(empleado:Empleado):void{
    this.empleados.push(empleado);
    this.dataService.createEmpleado(this.empleados);
  }

  async updateEmpleado(id:number,empleado:Empleado){
    this.empleados[id]=empleado;
    this.dataService.updateEmpleado(id,empleado);
  }

  deleteEmpleado(id:number){
    this.empleados.splice(id,1);
    this.dataService.deleteEmpleado(id);
  }
}
