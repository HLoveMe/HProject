/**
 * Created by zhuzihao on 2017/6/22.
 */

import { Component } from "@angular/core"
import {FoodDataServer} from "../../FoodServe/FoodDataServer";
import {MessageServer} from "../../../../../Command/MessageComponent";


@Component({
  selector:"what",
  templateUrl:"./WHAT.html",
  styleUrls:["./WHAT.css"]
})

export class WHATComponent{
  news:string[];
  constructor(private foodS:FoodDataServer,private msgS:MessageServer){}
  ngOnInit(){
    this.foodS.getVideoNews().subscribe(data=>this.news = data);
  }
  contentClick(content){
    this.msgS.notifacation(content)
  }
}
