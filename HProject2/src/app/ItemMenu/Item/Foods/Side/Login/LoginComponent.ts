/**
 * Created by zhuzihao on 2017/6/26.
 */

import {Component, ViewChild, Renderer2} from "@angular/core"
import {NavTopModel} from "../../Contents/NavItem/NavTopItem";
import {USerModel} from "./USerModel";

@Component({
  selector:"login",
  templateUrl:"./login.html",
  styleUrls:["./login.css"]
})
export class LoginComponent{
  item:NavTopModel = new NavTopModel("LOAD","登入");
  @ViewChild("remember") remember;
  user:USerModel;
  constructor(private render:Renderer2){
    this.user = new USerModel("爱上无名氏","",true);
  }
  ngAfterViewInit(){
    console.log(this.remember)
  }
  OnSubmit(){

  }
  register(){}
  noPsw(){}
}
