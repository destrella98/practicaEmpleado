import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoBDDService } from '../empleado-bdd.service';
import { Empleado } from '../empleado/empleado.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  id:number=0;
  token:string="";
  empleados: Empleado[]=[];
  tbNombre:string="";
  tbApellido:string="";
  tbCargo:string="";
  tbSalario:number=0;

  constructor(private empleadoService:EmpleadoBDDService ,private route:ActivatedRoute, private router:Router) {

    this.id=parseInt(this.route.snapshot.params['id']);
    this.empleados=empleadoService.getEmpleados();
    this.tbNombre=this.empleados[this.id].nombre,
    this.tbApellido=this.empleados[this.id].apellido,
    this.tbCargo=this.empleados[this.id].cargo,
    this.tbSalario=this.empleados[this.id].salario;
    
  }

  update():void{
    this.empleadoService.updateEmpleado(this.id,new Empleado(this.tbNombre,this.tbApellido,this.tbCargo,this.tbSalario));
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
