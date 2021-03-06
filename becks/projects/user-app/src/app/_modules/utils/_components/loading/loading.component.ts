import { Component, OnInit } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"],
})
export class LoadingComponent implements OnInit {
  options: AnimationOptions = {
    path: "../../../../../assets/animations/logo_script.json",
  };
  constructor() {}

  ngOnInit() {}

  styles: Partial<CSSStyleDeclaration> = {
    backgroundColor: "#000",
  };
}
