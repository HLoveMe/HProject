/**
 * Created by zhuzihao on 2017/6/24.
 */

import { Component } from "@angular/core"
import {FoodDataServer} from "../../FoodServe/FoodDataServer";

@Component({
  selector:"help",
  templateUrl:"./help.html",
  styleUrls:["./help.css"]

})

export class HelpComponent{
  constructor(private dataS:FoodDataServer){}
  data:any;
  ngOnInit(){
    this.dataS.getHelp().subscribe(data=>this.data=data);
  }
}
