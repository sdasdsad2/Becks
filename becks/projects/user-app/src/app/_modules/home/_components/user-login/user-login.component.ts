import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UiService } from "src/app/_services/ui.service";
import { environment } from "src/environments/environment";
import { HttpService } from "src/app/_services/http.service";
import { AuthService } from "src/app/_services/auth.service";
import { UserService } from "src/app/_services/user.service";

@Component({
  selector: "user-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"],
})
export class UserLoginComponent implements OnInit {
  public userLoginForm: FormGroup;
  public httpError: string;
  public captchaStatus: boolean;
  public restartCaptcha: boolean;
  public hide: boolean;
  public password: string;

  constructor(
    private formBuilder: FormBuilder,
    private ui: UiService,
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router,
    private userSvc: UserService
  ) {}

  ngOnInit() {
    this.initforms();
    this.redirect();
    this.ui.dismissLoading();
  }

  redirect() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(["user/exp"], {
        queryParamsHandling: "preserve",
      });
    }
  }

  initforms() {
    this.userLoginForm = this.formBuilder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.maxLength(40),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  loginUser(): void {
    if (this.userLoginForm.valid && this.captchaStatus) {
      this.userSvc.logout();
      const formData = new FormData();
      try {
        this.restartCaptcha = true;
        this.setCaptchaStatus(!this.restartCaptcha);
        formData.append("username", this.userLoginForm.controls.email.value);
        formData.append("password", this.userLoginForm.controls.password.value);
        formData.append("grant_type", environment.rest.grant_type);
        formData.append("client_id", environment.rest.client_id);
        formData.append("client_secret", environment.rest.client_secret);
        formData.append("scope", environment.rest.scope);
      } catch (error) {
        return;
      }
      this.ui.showLoading();
      this.httpService
        .postFormData(
          environment.serverUrl + environment.login.resource,
          formData
        )
        .subscribe(
          (response: any) => {
            this.ui.dismissLoading();
            if (response.status == 200) {
              this.userLoginForm.reset();
              this.authService.setAuthenticated(
                "Bearer " + response.body.access_token
              );
              this.redirect();
            } else {
              this.httpError = "Usuario y/o contraseña incorrecta";
            }
          },
          (e) => {
            this.ui.dismissLoading();
            this.httpError = "Usuario y/o contraseña incorrecta";
          }
        );
    }
  }

  public getClassInput(item: any): string {
    let classreturn = "input-becks";
    if (item.valid) {
      classreturn = "input-becks-ok";
    } else if (item.touched) {
      classreturn = "input-becks-error";
    }
    return classreturn;
  }

  public getMessageform(
    item: any,
    name: string,
  ): string {
    if (item.hasError("email")) {
      return "Ingrese una dirección de correo electrónico válida";
    }
  }
  public setCaptchaStatus(status) {
    setTimeout( ()=>{
      this.captchaStatus = status;
      this.restartCaptcha = false;
    }, 500);
  }
}
