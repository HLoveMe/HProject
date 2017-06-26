/**
 * Created by zhuzihao on 2017/6/21.
 */
import { NgModule }              from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFound} from "./Command/PageNotFound";
import {MessageComponent} from "./Command/MessageComponent";

const routers:Routes = [
  {
    //第二路由
    path:"message",
    component:MessageComponent,
    outlet:"message"
  },
  {
    path:"",
    redirectTo:"food",
    pathMatch:"full"
  },
  {
    path:"**",
    component:PageNotFound
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routers)
  ]
})

export  class AppRouter{}
