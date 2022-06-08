import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoradoresComponent } from './moradores/moradores.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';

const routes : Routes = [
  { path: 'moradores', component: MoradoresComponent},
  { path: 'medicamentos', component: MedicamentosComponent},
  { path: '', redirectTo: '/materials', pathMatch: 'full' }
];

export const links = [
  { 'link': '/moradores', 'label' : 'Moradores'},
  { 'link': '/medicamentos', 'label' : 'Medicamentos'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
