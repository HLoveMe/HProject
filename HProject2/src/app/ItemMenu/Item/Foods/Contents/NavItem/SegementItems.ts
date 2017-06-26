/**
 * Created by zhuzihao on 2017/6/24.
 */


import {Component, Input, Output, EventEmitter, AfterViewInit} from "@angular/core"

//   height 32px
@Component({
  selector:"segement",
  template:
`
<div class="box">
  <ul>
    <li *ngFor="let item of items;index as i" [style.left]="leftMargin(i)" tappable (click)="selectItem(i,item)" [class.active]="item==select" [class.gradient]="item != select">
        <a >{{item}}</a>
        <div [ngClass]="{arrorw_red_down:item==select,arrow_gary_down:item!=select}"></div>
    </li>
  </ul>
  <div class="line"></div>
</div>
`,
  styles:
[
`
.box{
  margin: 0px 15px 0px;
  height: 32px;
  position: relative;
}
.box ul{
  height: 26px;
  width: 100%;
  position: absolute;
  z-index: 2;
  padding: 0px 10px;
  bottom: 0px;
  display: inline-flex;
  display: flex;  
}
.box li{
  position: relative;
  overflow: hidden;
  flex: 1;
  float:left;
  border: 1px solid #dadada;
  border-radius: 6px 6px 0 0;
}

.box li a{
  font-size: 12px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  display: block;
  width: 100%;
}
.box li>div{
  right:12px;
  top:10px;
  
}
.box .line{
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 1px;
  width: 100%;
  background-color: #dadada;
}
.active{
  border-bottom: none !important;
  background-color: white; !important;
  
}

`
]
})

export class SegementItems implements AfterViewInit{
  @Input() items:string[];
  @Output() changeItem:EventEmitter<number>=new EventEmitter();
  select:string;
  constructor(){}
  ngAfterViewInit(){
    this.select = this.items[0];
  }
  leftMargin(index){
    return -(index) + "px";
  }
  selectItem(index:number,item:string){
    this.select = item;
    this.changeItem.emit(index);

  }
}
