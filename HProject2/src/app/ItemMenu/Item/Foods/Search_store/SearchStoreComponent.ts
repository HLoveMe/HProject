/**
 * Created by zhuzihao on 2017/6/21.
 */
import { Component } from "@angular/core"
import {FoodDataServer} from "../FoodServe/FoodDataServer";


@Component({
  templateUrl:"./SearchStore.html",
  styleUrls:["./SearchStore.css"]
})
export class SearchStoreComponent{
  hots:string[];
  constructor(private foodS:FoodDataServer){

  }
  ngOnInit(){
    this.foodS.getHots().subscribe(data=>this.hots=data);
  }
}

