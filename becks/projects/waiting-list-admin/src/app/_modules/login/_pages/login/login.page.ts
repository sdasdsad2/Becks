import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'waiting-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {

  public userLoginForm: FormGroup;
  public captchaStatus: boolean;
  public restartCaptcha: boolean;
  public httpError: string;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initforms();
  }

  initforms() {
    this.userLoginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(40)])
    });
  }

  loginUser(): void {
    this.restartCaptcha = true;
    this.setCaptchaStatus(!this.restartCaptcha);
  }

  public getClassInput(item: any): string {
    let classreturn = 'input-becks';
    if (item.valid) {
      classreturn = 'input-becks-ok';
    }
    else if (item.touched) {
      classreturn = 'input-becks-error';
    }
    return classreturn;
  }


  public getClassInputSelect(item: any): string {
    let classreturn = 'select-becks';
    if (item.valid) {
      classreturn = 'select-becks-ok';
    }
    else if (item.touched) {
      classreturn = 'select-becks-error';
    }
    return classreturn;
  }

  public getMessageform(item: any, name: string, min?: number, max?: number): string {
    if (item.hasError('email') || (item.hasError('pattern') && name === 'email')) {
      return 'Ingrese una dirección de correo electrónico válida';
    }
  }

  public setCaptchaStatus(status) {
    this.captchaStatus = status;
  }

}
