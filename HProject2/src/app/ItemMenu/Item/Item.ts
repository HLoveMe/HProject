/**
 * Created by zhuzihao on 2017/6/21.
 */

import {Component, Input, Renderer2, ViewChild, ViewContainerRef, TemplateRef} from "@angular/core"

@Component({
  selector:"item",
  template:`
    <div class="box">
      <a #icon [class.active]="select"></a >
      <div>
      {{model?.name}}
      </div>
    </div>
`,styles:[`
  .box{
    padding-top: 10px;
    height: 100px;
  }
  .box a{
    height: 46px;
    display: block;
    background: url("../../../assets/img/nav_bg.png");
  }
  .box div{
    text-align: center;    
    font-size: 12px;
  }
  .active{
    background-position-y: -70px !important;
  }
`
  ]
})
export class Item{
  @Input() model:ItemModel;
  @Input() select:boolean;
  @Input() index:number;
  @ViewChild("icon") icon;
  constructor(private render:Renderer2){
  }
  ngOnInit(){
    if(this.index>=6){
      this.index=this.index-1;
    }
    console.log(this.icon)
    this.render.setStyle(this.icon.nativeElement,"backgroundPositionX",0 - this.index * 66 +"px");
  }

}


export class ItemModel{
  constructor(
    public name:string,
    public url:string,
    public img?:string[]
  ){}
}
