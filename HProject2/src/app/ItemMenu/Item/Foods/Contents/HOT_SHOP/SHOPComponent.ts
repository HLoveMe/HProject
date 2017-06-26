/**
 * Created by zhuzihao on 2017/6/22.
 */

import {Component, ViewChild, ViewContainerRef} from "@angular/core";
import {NavItem} from "../NavItem/NavItems";
import {ComponentDynamic} from "../../../DynamicServer/ComponentDynamic";
import {NEWSHOPComponent} from "./new_store/NEWSHOPComponent";
import {HOTSHOPComponent} from "./store/STOREComponent";
import {FoodDataServer} from "../../FoodServe/FoodDataServer";
import {StoreModel} from "./StoreModel";

@Component({
  selector:"shop",
  templateUrl:"./shop.html",
  styleUrls:["./shop.css"]
})

export class SHOPComponent{
  @ViewChild("host",{read:ViewContainerRef}) container;
  items:NavItem[];
  hots:StoreModel[];
  news:StoreModel[];
  constructor(private dyna:ComponentDynamic,private ser:FoodDataServer){
    this.items=[
      new NavItem("HOT SHOP","红店铺"),
      new NavItem("EW SHOP","新开张"),
    ]
  }
  ngOnInit(){
      this.ser.getShopMessage().subscribe(datas=>{
        this.hots = datas["hots"];
        this.news = datas["news"];
        let comRef = this.dyna.dynamic(this.container,HOTSHOPComponent).instance;
        comRef.shops =  this.hots;
      })
  }
  selectItem(event){
    let component= event==0 ? HOTSHOPComponent : NEWSHOPComponent;
    let comRef = this.dyna.dynamic(this.container,component).instance;
    comRef.shops =  event==0 ? this.hots : this.news;
  }
}
