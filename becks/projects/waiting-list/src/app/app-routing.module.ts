import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'age-gate',
    pathMatch: 'full'
  },
  {
    path: 'confirm-register',
    loadChildren: () => import('./pages/confirm-register/confirm-register.module').then( m => m.ConfirmRegisterPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal-page/principal-page.module').then( m => m.PrincipalPagePageModule)
  },
  {
    path: 'age-gate',
    loadChildren: () => import('./pages/age-gate/age-gate.module').then( m => m.AgeGatePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./pages/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  }


];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  onSameUrlNavigation: 'reload',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 150]
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
