import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './Fruta/fruta.component';
import { EmpleadoComponent } from './Empleado/empleado.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './Home/home.component';
import { ContactoComponent } from './Contacto/contacto.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';
import { HttpClientModule } from '@angular/common/http';
import { PlntillasComponent } from './plantillas/plantillas.component';
@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlntillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
