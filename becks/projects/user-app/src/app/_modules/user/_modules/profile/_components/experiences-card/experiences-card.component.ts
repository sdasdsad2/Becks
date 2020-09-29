import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "user-experiences-card",
  templateUrl: "./experiences-card.component.html",
  styleUrls: ["./experiences-card.component.scss"],
})
export class ExperiencesCardComponent implements OnInit {
  @Input() urlImageExperience: string;
  @Input() nameExperience: string;
  @Input() type: string;

  public typeExp: string;
  public colorClass: string;
  constructor() {}

  ngOnInit() {
    if (this.type == "cancel") {
      this.typeExp = "Cancelada";
      this.colorClass = "red-color";
    } else if (this.type == "pending") {
      this.typeExp = "Pendiente";
      this.colorClass = "orange-color";
    } else {
      this.typeExp = "Completa";
      this.colorClass = "green-color";
    }
  }
}
