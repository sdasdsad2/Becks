import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../_models/User";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private _user: User = new User();
  private _userSbj = new BehaviorSubject<User>(this._user);
  public user$ = this._userSbj.asObservable();

  constructor(private http: HttpService) {}

  public getData() {
    this.http.get(environment.serverUrl + environment.user.getData).subscribe(
      (response: any) => {
        if (response.status >= 200 && response.status < 300) {
          this._user = new User(response.body);
          this._userSbj.next(this._user);
        } else {
          this._userSbj.error({});
        }
      },
      (error) => {
        this._userSbj.error(error);
      }
    );
  }

  public patchPassword(newPassword: string) {
    this.http
      .patch(environment.serverUrl + environment.user.patchPassword, {
        password: newPassword,
      })
      .subscribe(
        (response: any) => {
          if (response.status >= 200 && response.status < 300) {
            this._user = new User(response.body);
            this._userSbj.next(this._user);
          } else {
            this._userSbj.error({});
          }
        },
        (error) => {
          this._userSbj.error({});
        }
      );
  }

  public patchData(user: User) {
    this.http
      .patch(
        environment.serverUrl + environment.user.patchPassword,
        user.toJSON()
      )
      .subscribe(
        (response: any) => {
          if (response.status >= 200 && response.status < 300) {
            this._user = new User(response.body);
            this._userSbj.next(this._user);
          } else {
            this._userSbj.error({});
          }
        },
        (error) => {
          this._userSbj.error({});
        }
      );
  }
}
