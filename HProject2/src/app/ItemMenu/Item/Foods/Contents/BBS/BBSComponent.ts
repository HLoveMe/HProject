/**
 * Created by zhuzihao on 2017/6/24.
 */


import { Component } from "@angular/core"
import {NavTopModel} from "../NavItem/NavTopItem";
import {FoodDataServer} from "../../FoodServe/FoodDataServer";
import {BBSModel} from "./BBSModel";
import {MessageServer} from "../../../../../Command/MessageComponent";

@Component({
  selector:"bbs",
  templateUrl:"./bbs.html",
  styleUrls:["./bbs.css"]
})

export class BBSComponent{
  item:NavTopModel=new NavTopModel("BBS","论坛");
  news:BBSModel[];
  constructor(private foodS:FoodDataServer,private msg:MessageServer){}
  ngOnInit(){
    this.foodS.getBBS().subscribe(data=>this.news=data);
  }
  goMore(){
    console.log("go more")
  }
  selectItem(item:BBSModel){
    this.msg.notifacation(item.name);
  }
}
