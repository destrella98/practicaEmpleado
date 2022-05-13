import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const rutas:Routes=[
  {path:"",component:EmpleadoComponent},
  {path:"Proyectos/:id",component:ProyectosComponent},
  {path:"QuienesSomos",component:QuienesComponent},
  {path:"Contacto",component:ContactoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(rutas,{onSameUrlNavigation: "reload"}),HttpClientModule
  ],
  exports:[AppComponent,EmpleadoComponent, ProyectosComponent,QuienesComponent,ContactoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
