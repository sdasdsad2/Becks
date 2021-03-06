import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';
import { AuthService } from 'src/app/_services/auth.service';
import { HttpService } from 'src/app/_services/http.service';
import { UiService } from 'src/app/_services/ui.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  constructor(  private authService: AuthService,
                private httpService: HttpService,
                private uiService: UiService,
                private router: Router,
                private adminSvc: AdminService ) { }

  ngOnInit() {}

  logout() {
    this.uiService.showLoading();
    this.httpService.get( environment.serverUrl + environment.logout.resource ).subscribe(
      (r) => { this.uiService.dismissLoading(); this.router.navigate(['login']); },
      (e) => { this.uiService.dismissLoading(); this.router.navigate(['login']); },
    );
    this.authService.setAuthenticated('');
    this.adminSvc.logout();
    
  }

}
