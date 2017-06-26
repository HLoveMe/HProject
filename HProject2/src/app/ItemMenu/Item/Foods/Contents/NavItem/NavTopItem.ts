/**
 * Created by zhuzihao on 2017/6/24.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core"


@Component({
  selector:"nav-top",
  template:
`
<div class="box" [style.width]="width +'px'" [class.gradient]="gradient">
     {{item?.name}} <span>{{item?.desc}}</span>
     <div class="more" (click)="goMore()" [hidden]="hidden"></div>
</div>
`,
  styles:[
`
.box{
  height: 34px  ;
  padding: 5px 15px 0px;
  line-height: 29px;
  color: red;
  position: relative;
}
.box span{
  color: black;
}
.box .more{
  position: absolute;
  top:0px;
  bottom: 0px;
  right: 15px;
  margin: auto;
  width:37px;
  height: 13px;
  background: url("/assets/img/more.gif");
  
}

`
  ]
})

export  class NavTopItem{
  height:number=34;
  @Input() gradient:boolean=false;
  @Input() hidden:boolean=false;
  @Input() width:number;
  @Input() item:NavTopModel;
  @Output() gomore:EventEmitter<any> = new EventEmitter();
  constructor(){}
  goMore(){
    this.gomore.emit(null);
  }
}

export class NavTopModel{
  constructor(public name:string,public desc:string){}
}
