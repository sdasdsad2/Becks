import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExpRoutingModule } from "./exp-routing.module";
import { HomeExpPage } from "./_pages/home-exp/home-exp.page";
import { SliderExpComponent } from "./_components/slider-exp/slider-exp.component";
import { UtilsModule } from "src/app/_modules/utils/utils.module";
import { MatCarouselModule } from "@ngmodule/material-carousel";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { AnnouncerDaysComponent } from '../../_components/announcer-days/announcer-days.component';
import { CircleProgressComponent } from '../profile/_components/circle-progress/circle-progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    SliderExpComponent,
    HomeExpPage,
    AnnouncerDaysComponent,
    CircleProgressComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ExpRoutingModule,
    UtilsModule,
    MatCarouselModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "es-ES" }],
})
export class ExpModule {}
