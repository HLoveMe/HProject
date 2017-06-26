/**
 * Created by zhuzihao on 2017/6/24.
 */

import { Component } from "@angular/core"
import {ContentModle} from "../ContentModle";
import {MessageServer} from "../../../../../../Command/MessageComponent";


@Component({
  templateUrl:'problem.html',
  styleUrls:["./problem.css"]
})
export class HasProblem{
  data:ContentModle[];
  constructor(private msg:MessageServer){}
  goSearch(text:string){
    this.msg.notifacation(text);
  }
}
