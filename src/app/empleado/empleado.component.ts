import { Component, OnInit } from '@angular/core';
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

  empleados:Empleado[]=[
    new Empleado("Juan","Pérez","Presidente",3500),
    new Empleado("María","López","Directora",2300),
    new Empleado("Andrés","Rodríguez","Gerente",1800),
    new Empleado("Fulano","Detal","Administrativo",1000),
    new Empleado("Fulana","Decual","Secretaria",800)
  ];

  agregar():void
  {
    this.empleados.push(new Empleado(this.tbNombre,this.tbApellido,this.tbCargo,this.tbSalario))
    this.tbNombre="";
    this.tbApellido="";
    this.tbCargo="";
    this.tbSalario=0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
