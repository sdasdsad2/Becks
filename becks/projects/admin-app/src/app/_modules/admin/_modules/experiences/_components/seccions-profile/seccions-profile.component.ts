import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { UiService } from "src/app/_services/ui.service";

@Component({
  selector: "user-seccions-profile",
  templateUrl: "./seccions-profile.component.html",
  styleUrls: ["./seccions-profile.component.scss"],
})
export class SeccionsProfileComponent implements OnInit, OnDestroy {
  public size: string;
  @Input() isActive: boolean;
  @Output() hidetoSide = new EventEmitter();
  public create: boolean = false;
  public onEdit: boolean = false;
  public Func1: any;
  public Func2: any;
  public Edit: any;
  // public contentExperiences=[];
  // private expSubs: Subscription;

  constructor(
    private platform: Platform,
    private ui: UiService,
    private router: Router
  ) {
    platform.ready().then(() => {
      this.platform.resize.subscribe(() => {
        this.size = this.ui.getSizeType(platform.width());
      });
      this.size = this.ui.getSizeType(platform.width());
    });
  }

  ngOnInit() {
    this.Func1 = this.hideTabs.bind(this);
    this.Func2 = this.hideEdit.bind(this);
    this.Edit = this.editExp.bind(this);
    // this.getExperiences();
  }

  ngOnDestroy() {
    // this.expSubs.unsubscribe();
  }

  hideTabs() {
    this.create = !this.create;
    this.hidetoSide.emit(800);
  }
  hideEdit() {
    this.onEdit = !this.onEdit;
  }
  editExp() {
    this.onEdit = !this.onEdit;
  }
}
