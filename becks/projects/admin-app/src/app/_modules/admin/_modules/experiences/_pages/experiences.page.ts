import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from 'src/app/_modules/utils/_components/sidebar/sidebar.component';

@Component({
  selector: 'waiting-experiences',
  templateUrl: './experiences.page.html',
  styleUrls: ['./experiences.page.scss'],
})
export class ExperiencesPage implements OnInit {
  @ViewChild(SidebarComponent) sidebar: SidebarComponent;
  public heigthTosidebar:number;
  constructor() { }

  ngOnInit() {
  }
  setHgt(val) {
    console.log(val);
    this.heigthTosidebar = val;
  }
  ngAfterViewInit(): void {
    this.sidebar.hgtSide = this.heigthTosidebar;
    
  }

}
