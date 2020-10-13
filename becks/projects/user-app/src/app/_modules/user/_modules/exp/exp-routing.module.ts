import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './_components/schedule/schedule.component';
import { HomeExpPage } from './_pages/home-exp/home-exp.page';

const routes: Routes = [
  {
    path: "",
    component: HomeExpPage
  },
  {
    path: "calendar",
    component: ScheduleComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpRoutingModule { }
