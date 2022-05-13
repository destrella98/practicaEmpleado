import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router, private empleadoService:EmpleadoBDDService) { 
    //.then(response=>{this.empleados=Object.values(response),console.log(this.empleados)});
    //this.empleados=this.empleadoService.getEmpleados();
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false
    
  }

  agregar():void
  {
    //this.empleadoService.createEmpleado(new Empleado(this.tbNombre,this.tbApellido,this.tbCargo,this.tbSalario));
    this.empleadoService.createEmpleado(new Empleado(this.tbNombre,this.tbApellido,this.tbCargo,this.tbSalario));
    this.tbNombre="";
    this.tbApellido="";
    this.tbCargo="";
    this.tbSalario=0;
    /*this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['']);
    });*/
  } 

  editar(id:number,empleado:Empleado):void{
    //this.empleados[id]=empleado;
    this.router.navigate(['Proyectos',id]);
  }

  eliminar(id:number):void{
    this.empleadoService.deleteEmpleado(id);

  }

  ngOnInit(): void { 
    if(this.empleadoService.getEmpleados().length==0)
    {
    this.empleadoService.readEmpleados().then(response=>{
      this.empleadoService.setEmpleados(Object.values(response)),
      this.empleados=this.empleadoService.getEmpleados();
    });
    }
    else
    {
      this.empleados=this.empleadoService.getEmpleados();
    }
  }
}
