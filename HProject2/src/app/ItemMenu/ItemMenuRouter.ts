/**
 * Created by zhuzihao on 2017/6/21.
 */

import { NgModule } from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {FoodItemComponent} from "./Item/Foods/FoodItemComponent";
import {NightclubComponent} from "./Item/Nightclub/NightclubComponent";
import {SearchStoreComponent} from "./Item/Foods/Search_store/SearchStoreComponent";
import {SearchAddressComponent} from "./Item/Foods/Search_address/SearchAddressComponent";
import {PageNotFound} from "../Command/PageNotFound";

const routers:Routes = [
  {
    path:"food",
    component:FoodItemComponent,
    children:[
      {
        path:"",
        component:SearchStoreComponent
      },
      {
        path:"store",
        component:SearchStoreComponent
      },{
        path:"address",
        component:SearchAddressComponent
      }
    ]
  },
  {
    path:"Nightclub",
    component:NightclubComponent
  },
  {
    path:"shopping",
    component:PageNotFound
  },
  {
    path:"civilization",
    component:PageNotFound
  }

]

@NgModule({
  imports:[
    RouterModule.forChild(routers)
  ]
})
export class ItemMenuRouter{}
