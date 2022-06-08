import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoradoresComponent } from './moradores/moradores.component';


const routes : Routes = [
  { path: 'moradores', component: MoradoresComponent},
  { path: '', redirectTo: '/materials', pathMatch: 'full' }
];

export const links = [
  { 'link': '/moradores', 'label' : 'Moradores'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
