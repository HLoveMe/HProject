
import { Component } from "@angular/core"


@Component({
  selector:"navigation",
  templateUrl:'./navigation.html',
  styleUrls:["./navigation.css"]
})

export class NavigationBarComponent{
  left_list:string[]= ["北京","福州","广州","青岛"];
  current:string=this.left_list[0];
  constructor(){}
  selectAddress(item){
    this.current = item;
  }
}

