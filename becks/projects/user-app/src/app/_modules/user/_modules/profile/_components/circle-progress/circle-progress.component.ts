import { Component, Input, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { HttpService } from 'src/app/_services/http.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: "user-circle-progress",
  templateUrl: "./circle-progress.component.html",
  styleUrls: ["./circle-progress.component.scss"],
})
export class CircleProgressComponent implements OnInit {
  public httpError: string;
  public remaining_days: any;
  public colorProgress: string;
  public colorProgressBar: string;
  public progress: number;
  public subtitle: string = "Días";
  public daysR:any;
  
  constructor(
    public httpService: HttpService,private router: Router,private userSvc: UserService,
  ) {}

  ngOnInit() {
    this.getDays();
  }

  
 getDays(): void {
    this.httpService.get(environment.serverUrl + environment.user.getCodes).subscribe(
      (res: any) => {
        if (res.status == 200 && res.body.length >0) {
        this.userSvc.setActivate(true);
        let date_til = moment(new Date(res.body[0].valid_until * 1000));
        let used_date = moment(new Date(res.body[0].used* 1000));
        this.daysR =  date_til.diff(used_date, 'days');
        this.progress = this.daysR * (10 / 3);
        this.remaining_days = Math.ceil(this.progress * (30 / 100));
       if (this.progress <= 25) {
          this.colorProgress = "#FF7A00";
          this.colorProgressBar =
            "linear-gradient(180deg, #E66E48 0%, #FF7A00 100%)";
        } else if (this.progress > 25 && this.progress <= 50) {
          this.colorProgress = "#FF7A00";
          this.colorProgressBar =
            "linear-gradient(180deg, #E66E48 0%, #FF7A00 100%)";
        } else if (this.progress > 50 && this.progress <= 75) {
          this.colorProgress = "#00B379";
          this.colorProgressBar =
            "linear-gradient(180deg, #038259 0%, #00B379 100%)";
        } else if (this.progress > 75) {
          this.colorProgress = "#038259";
          this.colorProgressBar =
            "linear-gradient(180deg, #038259 0%, #00B379 100%)";
        }
        if (this.progress < 0) {
          this.progress = 0;
        }
        if (res.status == 200 && res.body.length >0) {
          this.httpError=" ";
          return this.daysR;
        }
      }
      else {
        this.progress = 0 * (10 / 3);
        this.remaining_days = Math.ceil(this.progress * (30 / 100));
        console.log(this.daysR);
        if(this.progress == 0) {
          this.colorProgress = "#DB4843";
          this.colorProgressBar = "#1E1E1E";
        }
      }
      },
      (err) => {
        this.httpError = "Usuario inactivo";
      }
    );

  }

  redirectSales() {
    this.router.navigate(["user/profile"], {
      queryParamsHandling: "preserve",
    });
  }
}
