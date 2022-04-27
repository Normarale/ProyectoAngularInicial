import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HeaderComponent } from './componentes/header/header.component';



const routes: Routes = [
  {path:'', component:HeaderComponent},
  {path:'acerca', component:AcercaComponent},
  {path:'estudios', component:EstudiosComponent},
  {path:'experiencia', component:ExperienciaComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'proyectos', component:ProyectoComponent},
  {path:'**' , redirectTo:'', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
