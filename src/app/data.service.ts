import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Empleado } from './empleado/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  //????
  findById(id:number){
    let url:string = "https://empleadosbdd-default-rtdb.firebaseio.com/empleados/"+ id + ".json";
    return this.httpClient.get(url);
  }

  readEmpleados(){
    let url='https://empleadosbdd-default-rtdb.firebaseio.com/empleados.json';
    return lastValueFrom(this.httpClient.get(url));
  }

  createEmpleado(empleados:Empleado[]):void{
    let url='https://empleadosbdd-default-rtdb.firebaseio.com/empleados.json';
    this.httpClient.put(url,empleados).subscribe();
  }

  updateEmpleado(id:number,empleado:Empleado):void{

    let url:string = "https://empleadosbdd-default-rtdb.firebaseio.com/empleados/"+id+".json";
    this.httpClient.put(url,empleado).subscribe();
  }

  deleteEmpleado(id:number):void{
    let url:string = "https://empleadosbdd-default-rtdb.firebaseio.com/empleados/"+id+".json";
    this.httpClient.delete(url).subscribe();
  }
}
