import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
//componentes
import { EmpleadoComponent } from "./Empleado/empleado.component";
import { FrutaComponent } from "./Fruta/fruta.component";
import { HomeComponent } from "./Home/home.component";
import { ContactoComponent } from "./Contacto/contacto.component";
import { CochesComponent } from "./coches/coches.component";
import { PlntillasComponent } from "./plantillas/plantillas.component";
const appRoutes:Routes=[
      //ruta principal, rutas componentes, ruta en caso de error
      {path:'',component:HomeComponent},
      {path:'empleado',component:EmpleadoComponent},
      {path:'fruta',component:FrutaComponent},
      {path:'contacto', component:ContactoComponent},
      {path:'contacto/:page', component:ContactoComponent},
      {path:'coches', component:CochesComponent},
      {path:'plantillas',component:PlntillasComponent},
      {path:'pagina-principal',component:HomeComponent},
      {path:'*',component:HomeComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders <any>= RouterModule.forRoot(appRoutes);