import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "user-profile-picture",
  templateUrl: "./profile-picture.component.html",
  styleUrls: ["./profile-picture.component.scss"],
})
export class ProfilePictureComponent implements OnInit {
  @Input() urlImage: string;
  @Input() profile_name: string;

  constructor() {}

  ngOnInit() {}
}