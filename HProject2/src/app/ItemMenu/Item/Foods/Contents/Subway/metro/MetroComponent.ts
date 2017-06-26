/**
 * Created by zhuzihao on 2017/6/24.
 */
import {Component, ViewChild, Renderer2} from "@angular/core";


@Component({
  selector:"metro",
  templateUrl:"./metro.html",
  styleUrls:["./metro.css"]
})

export class MetroComponent{
  subs:any[]=[
    {name:"1",color:"red"},
    {name:"2",color:"orange"},
    {name:"13",color:"yellow"},
    {name:"8",color:"green"},
    {name:"6",color:"#903077"},
  ];
  select:any=this.subs[0];
  @ViewChild("conent") content;
  constructor(private  render:Renderer2){}
  borderColor(item){
    return "1px solid "+ item["color"]
  }
  selectItem(index,item){
    if(item==this.select){return;}
    this.select = item;
    index == 0 ? this.render.addClass(this.content.nativeElement,"bg"):this.render.removeClass(this.content.nativeElement,"bg")
  }
}
