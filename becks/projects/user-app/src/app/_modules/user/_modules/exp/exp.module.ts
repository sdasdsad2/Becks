import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExpRoutingModule } from "./exp-routing.module";
import { HomeExpPage } from "./_pages/home-exp/home-exp.page";
import { SliderExpComponent } from "./_components/slider-exp/slider-exp.component";
import { VerticalCalendarComponent } from "./_components/vertical-calendar/vertical-calendar.component";
import { UtilsModule } from "src/app/_modules/utils/utils.module";

@NgModule({
  declarations: [SliderExpComponent, HomeExpPage, VerticalCalendarComponent],
  imports: [CommonModule, ExpRoutingModule, UtilsModule],
})
export class ExpModule {}
