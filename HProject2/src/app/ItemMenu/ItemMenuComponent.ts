/**
 * Created by zhuzihao on 2017/6/21.
 */

import { Component } from "@angular/core"
import {ItemModel, Item} from "./Item/Item";
import {Router,ActivatedRoute} from "@angular/router";
import {MessageServer} from "../Command/MessageComponent";


@Component({
  selector:"item-menu",
  templateUrl:"./ItemMenu.html",
  styleUrls:["./ItemMenu.css"]
})

export class ItemMenuComponent{
  current:ItemModel;
  items:any[];
  constructor(private router:Router,private route:ActivatedRoute,private msgSer:MessageServer){

    this.items = [
      new ItemModel("美食","food",["",""]),
      new ItemModel("夜店","Nightclub",["",""]),
      new ItemModel("购物","shopping",["",""]),
      new ItemModel("文化","civilization",["",""]),
      new ItemModel("休闲","relaxation",["",""]),
      "AA",
      new ItemModel("美食1","",["",""]),
      new ItemModel("美食2","",["",""]),
      new ItemModel("美食3","",["",""]),
      new ItemModel("美食4","",["",""]),
      new ItemModel("美食5","",["",""])
    ]
    this.current = this.items[0];
  }
  goItem(item:ItemModel){
    this.current = item;
    this.router.navigate([item.url])
    this.msgSer.notifacation(item.name)
  }
}
