/**
 * Created by zhuzihao on 2017/6/21.
 */


import { Component } from "@angular/core"
import {Router,ActivatedRoute} from "@angular/router";
import {FoodDataServer} from "./FoodServe/FoodDataServer";
class SearchItem{
  constructor(public name:string,public url:string){}
}

@Component({
  templateUrl:"FoodContent.html",
  styleUrls:["./FoodContent.css"],
  providers:[
    FoodDataServer
  ]
})
export class FoodItemComponent{
  items:SearchItem[];
  select:SearchItem;
  constructor(private router:Router,private route:ActivatedRoute){
    this.items = [
      new SearchItem("搜店","store"),
      new SearchItem("地址","address"),
      new SearchItem("优惠券","store"),
      new SearchItem("全文","store"),
      new SearchItem("视频","store"),
    ]
    this.select = this.items[0];
  }
  selectItem(item:SearchItem){
    this.select = item;
    this.router.navigate([item.url],{relativeTo:this.route})
  }
}

