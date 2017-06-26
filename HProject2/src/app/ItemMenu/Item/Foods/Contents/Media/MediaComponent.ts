/**
 * Created by zhuzihao on 2017/6/26.
 */


import { Component } from "@angular/core"
import {NavTopModel} from "../NavItem/NavTopItem";
import {MessageServer} from "../../../../../Command/MessageComponent";

@Component({
  selector:"media",
  templateUrl:"./media.html",
  styleUrls:["./media.css"]
})
export class MediaComponent{
  item:NavTopModel=new NavTopModel("100DU IN THE MEDIA","媒体声音")
  medias:string[] = [
    "日本最大的财经杂志 《砖石周刊》对100度享乐网的报道",
    "视频网站100度享乐网获取网络视听许可证",
    "互联网上的视频橱窗",
    "享乐主义的机会"
  ]
  constructor(private msgS:MessageServer){}
  selectItem(item:string){
    this.msgS.notifacation(item);
  }
}
