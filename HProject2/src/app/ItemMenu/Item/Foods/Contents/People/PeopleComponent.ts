/**
 * Created by zhuzihao on 2017/6/24.
 */
import { Component }  from "@angular/core"
import {NavTopModel} from "../NavItem/NavTopItem";


@Component({
  selector:"people",
  templateUrl:"./people.html",
  styleUrls:["./people.css"]
})

export class  PeopleComponent{
  item:NavTopModel = new NavTopModel("HOT","红人骚客");

  constructor(){}
  goMore(){
  }
  setBGImage(index){
    return "url('/assets/images/people/people_"+index+".png')"
  }
}
