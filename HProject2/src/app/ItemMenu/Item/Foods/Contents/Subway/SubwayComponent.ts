/**
 * Created by zhuzihao on 2017/6/24.
 */

import {Component, ViewChild, ViewContainerRef} from "@angular/core";
import {NavItem} from "../NavItem/NavItems";
import {ComponentDynamic} from "../../../DynamicServer/ComponentDynamic";
import {MetroComponent} from "./metro/MetroComponent";
import {LifeComponent} from "./Lifecircle/LifeComponent";

@Component({
  selector:"subway",
  templateUrl:"./subway.html",
  styleUrls:["./subway.css"]
})

export  class SubwayComponent{
  items:NavItem[];
  @ViewChild("host",{read:ViewContainerRef}) container;
  constructor(private dynamic:ComponentDynamic){
    this.items=[
      new NavItem("SUBWAY","地铁交通"),
      new NavItem("MAP","生活圈"),
    ]
  }
  ngAfterViewInit(){
    this.selectItem(0);
  }
  selectItem(index){
    var compoent:any = index ==0 ? MetroComponent : LifeComponent;
    this.dynamic.dynamic(this.container,compoent);
  }
}
