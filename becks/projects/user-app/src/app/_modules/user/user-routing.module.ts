import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AnnouncerAccessForbiddenComponent } from "./_components/announcer-access-forbidden/announcer-access-forbidden.component";
import { InteractionConfirmComponent } from "./_components/interaction-confirm/interaction-confirm.component";
import { InteractionViewComponent } from "./_components/interaction-view/interaction-view.component";
import { ScheduleComponent } from "./_components/schedule/schedule.component";
import { ActivationPage } from "./_modules/profile/_pages/activation/activation.page";
import { MGMPage } from "./_modules/profile/_pages/mgm/mgm.page";

const routes: Routes = [
  {
    path: "profile",
    loadChildren: () =>
      import("./_modules/profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "exp/:id",
    loadChildren: () =>
      import("./_modules/exp/exp.module").then((m) => m.ExpModule),
  },
  {
    path: "exp",
    loadChildren: () =>
      import("./_modules/exp/exp.module").then((m) => m.ExpModule),
  },
  {
    path: "calendar",
    component: ScheduleComponent,
  },
  {
    path: "confirm-interaction",
    component: InteractionConfirmComponent,
  },
  {
    path: "access-forbidden/:id",
    component: AnnouncerAccessForbiddenComponent,
  },
  {
    path: "interaction/:id",
    component: InteractionViewComponent,
  },
  {
    path: "activation",
    component: ActivationPage,
  },
  {
    path: "mgm",
    component: MGMPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
