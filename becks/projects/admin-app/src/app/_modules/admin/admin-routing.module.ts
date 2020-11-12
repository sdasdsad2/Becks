import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'activation',
    pathMatch: 'full'
  },
  {
    path: 'activation',
    loadChildren: () => import('./_modules/activation/activation.module').then(m => m.ActivationPageModule),
  },
  {
    path: 'exp',
    loadChildren: () => import('./_modules/experiences/experiences.module').then(m => m.ExperiencesPageModule),
  },
  // {
  //   path: 'edit/:id',
  //   loadChildren: () => import('./_modules/edition/edition.module').then( m => m.EditionPageModule)
  // },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
