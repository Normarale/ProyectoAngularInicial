import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { LoginComponent } from './componentes/login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NabVarComponent } from './componentes/nab-var/nab-var.component';

import { CargarSkilService } from './servicios/cargar-skil.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaComponent,
    EstudiosComponent,
    ExperienciaComponent,
   ContactoComponent,
   LoginComponent,
   FooterComponent,
   NabVarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarSkilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
