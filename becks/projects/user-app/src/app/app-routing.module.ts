import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AgeGuardService } from "./_services/age-guard.service";
import { AuthGuardService } from "./_services/auth-guard.service";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./_modules/home/home.module").then((m) => m.HomeModule),
    canActivate: [AgeGuardService],
  },
  {
    path: "user",
    loadChildren: () =>
      import("./_modules/user/user.module").then((m) => m.UserModule),
    canActivate: [AuthGuardService],
  },

  {
    path: "age-gate",
    loadChildren: () =>
      import("./_modules/age-gate/age-gate.module").then(
        (m) => m.AgeGateModule
      ),
  },
  {
    path: "age-gate-v2",
    loadChildren: () =>
      import("./_modules/age-gate-v2/age-gate-v2.module").then(
        (m) => m.AgeGateV2Module
      ),
  },
  {
    path: "",
    redirectTo: "age-gate",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
