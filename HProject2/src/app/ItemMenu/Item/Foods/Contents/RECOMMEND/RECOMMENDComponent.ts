/**
 * Created by zhuzihao on 2017/6/23.
 */

import {Component, Input, ViewChild, Renderer2} from "@angular/core"
import {FoodDataServer} from "../../FoodServe/FoodDataServer";
import {RecommendModel} from "./RecommendModel";
import {MessageServer} from "../../../../../Command/MessageComponent";

@Component({
  selector:"recommend",
  templateUrl:"recommend.html",
  styleUrls:["recommend.css"]
})

export class RECOMMENDComponent{
  list:string[] = ["AA","BB","CC"];
  index:number=0;
  select:string=this.list[0];
  @ViewChild("Image") imageE;

  news:RecommendModel[];
  constructor(private render:Renderer2,private foodS:FoodDataServer,private msg:MessageServer){}
  ngOnInit(){
    this.selectItem(0,this.select);
    this.foodS.getRecommend().subscribe(data=>this.news=data);
  }

  selectItem(index:number,item:string){
    this.select = item;
    this.index = index;
    var color;
    if(index==0){
      color="red";
    }else if(index==1){
      color="orange"
    }else{
      color="green"
    }
    this.render.setStyle(this.imageE.nativeElement,"background",color)
  }
  selectMsg(item){
    this.msg.notifacation(item.name)
  }
}
