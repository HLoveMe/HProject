/**
 * Created by zhuzihao on 2017/6/22.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";


@Component({
  selector:"nav-items",
  template:
`
  <ul class="items clearfix" #itemC>
    <li class="item" *ngFor="let item of items;index as i;last as _last" (click)="selectItem(i,item)" [class.marginRight]="!_last" [class.active]="item==select" [class.gradient]="item!=select" [style.width]="oneWidth">
      <div>{{item?.name}}&nbsp;<span>{{item?.desc}}</span> </div>
      <div  class="arrow" [class.arrow_gary_down]="item!=select" [class.arrorw_red_down]="item==select"></div>
    </li>
  </ul>
`,
  styles:[
`
  .items{
      position: absolute;
      z-index: 2;
  }
  .items .item{
      height: 34px;
      line-height: 34px;
      text-align: center;
      color: red;
      float: left;
      border-radius: 6px 6px 0 0;
      border: 1px solid #e5e5e5;
      position: relative;
  }
  .marginRight{
    margin-right: 2px;
  }
  .active{
    background-color: white;
    border-bottom: none !important;
  }
  .items .item  span{
      color: black;
  }
  .items .item .arrow{
    position: absolute;
    right: 10px;
    top:16px;
  }
`
  ]
})

export class NavItems{
  oneWidth:string;
  select:NavItem;

  @Input() items:NavItem[];
  @Input() width:number;
  @Output() activeAction:EventEmitter<number> = new EventEmitter()
  constructor(){}
  ngAfterViewInit(){
    this.select = this.items[0];
    this.oneWidth = (this.width - (this.items.length-1)*2) / this.items.length  +"px";
  }
  selectItem(i,item){
    this.select = item;
    this.activeAction.emit(i);
  }
}

export class NavItem{
  constructor(private name:string,private desc:string){}
}
