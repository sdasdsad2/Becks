import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { HttpService } from "src/app/_services/http.service";

@Component({
  selector: "waiting-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public userLoginForm: FormGroup;
  public captchaStatus: boolean;
  public restartCaptcha: boolean;
  public httpError: string;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.initforms();
  }

  initforms() {
    this.userLoginForm = this.formBuilder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  loginUser(): void {
    this.restartCaptcha = true;
    this.setCaptchaStatus(!this.restartCaptcha);
    const formData = new FormData();
    formData.append("username", this.userLoginForm.controls.email.value);
    formData.append("password", this.userLoginForm.controls.password.value);
    formData.append("grant_type", "password");
    formData.append("client_id", "c7a551b7-f850-4839-90c5-3d78f03c2031");
    formData.append("client_secret", "WebAppConsumer");
    formData.append("scope", "administrator web_app");

    this.httpService
      .postFormData(
        "http://becks.flexitco.co/becks-back/oauth/token?_format=json",
        formData
      )
      .subscribe((resonse) => console.log(resonse));
  }

  // showPassword = () => {
  //   const pass: HTMLElement = document.getElementById("password");
  //   if (pass.getAttribute("type") == "password") {
  //     pass.setAttribute("type", "text");
  //   } else {
  //     pass.setAttribute("type", "password");
  //   }
  // };

  public getClassInput(item: any): string {
    let classreturn = "input-becks";
    if (item.valid) {
      classreturn = "input-becks-ok";
    } else if (item.touched) {
      classreturn = "input-becks-error";
    }
    return classreturn;
  }

  public getClassInputSelect(item: any): string {
    let classreturn = "select-becks";
    if (item.valid) {
      classreturn = "select-becks-ok";
    } else if (item.touched) {
      classreturn = "select-becks-error";
    }
    return classreturn;
  }

  public getMessageform(
    item: any,
    name: string,
    min?: number,
    max?: number
  ): string {
    if (item.hasError("email") && name === "email") {
      return "Ingrese una dirección de correo electrónico válida";
    }
    if (item.hasError("password")) {
      return "Contraseña inválida";
    }
  }

  public setCaptchaStatus(status) {
    this.captchaStatus = status;
  }
}
