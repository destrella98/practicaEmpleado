import { Component, OnInit } from '@angular/core';
import { EmpleadoBDDService } from '../empleado-bdd.service';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  tbNombre:string="";
  tbApellido:string="";
  tbCargo:string="";
  tbSalario:number=0;
  empleados:Empleado[]=[];

  constructor(private empleadoService:EmpleadoBDDService) { 
    this.empleados=empleadoService.readEmpleados();
  }

  agregar():void
  {
    this.empleadoService.createEmpleado(new Empleado(this.tbNombre,this.tbApellido,this.tbCargo,this.tbSalario));
    this.tbNombre="";
    this.tbApellido="";
    this.tbCargo="";
    this.tbSalario=0;
  }

  ngOnInit(): void {
  }

}
