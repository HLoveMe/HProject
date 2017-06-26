/**
 * Created by zhuzihao on 2017/6/23.
 */

import { Component } from "@angular/core"
import {StoreModel} from "../StoreModel";
import {MessageServer} from "../../../../../../Command/MessageComponent";


@Component({
  selector:"hot-shop",
  template:`
<ul class="box">
  <ng-container *ngFor="let item of shops;last as _last">
    <li class="item" [style.marginBottom]="_last == item ? '0px' : '6px' " (click)="selectShop(item)">
      <a>
        <div class="icon fl"></div>
        <div class="content fl">
          <div class="name">{{item?.name}}</div>
          <ul class="desc">
              <li>区域:{{item?.address}}</li>
              <li>人均:{{item?.money}}</li>
              <li>人气:{{item?.hots}}</li>
          </ul>
        </div>
      </a>
    </li>
  </ng-container>    
  <div class="more"></div>
</ul>
`,
  styles:[`
.box{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 16px 15px 33px;
}
.box .item{
  
}
.item a{
  display: block;
  width: 100%;
  height: 108px;
  background:url("/assets/img/hot_list_li_bg.gif");
}
.item a .icon{
    height: 84px;
    width: 104px;
    margin:12px 0;
    background:url("/assets/img/content/hot_list_pic1.gif");
}
.item a .content{
    padding-top: 12px;
    padding-left: 20px;
    width: 180px;
    height:100%
}
.item a .content .name{
  height: 24px;
  line-height: 24px;
  color: red;
}
.box .desc li{
  color: #6e6e6e;
}

.box .more{
  position: absolute;
   width: 37px;
   height: 13px;
   right: 15px;
   bottom: 10px;
   background:url("/assets/img/more.gif");
}
`
  ]
})

export class HOTSHOPComponent{
  shops:StoreModel[];
  constructor(private msgS:MessageServer){}
  ngOnInit(){
    console.log(this.shops)
  }
  selectShop(item:StoreModel){
    console.log(item);
    this.msgS.notifacation("点击:"+item.name)
  }
}
