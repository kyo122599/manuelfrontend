import { Routes } from '@angular/router';

import { BienvenidoComponent } from '../app/components/bienvenido/bienvenido.component';
import { ContenidoComponent } from '../app/components/contenido/contenido.component';
export const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'contenido', component: ContenidoComponent },
  
];
