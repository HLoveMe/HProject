/**
 * Created by zhuzihao on 2017/6/21.
 */


import { Component } from "@angular/core"
import {Router,ActivatedRoute} from "@angular/router";



@Component({
  selector:"",
  template:`
<div >Page Not Found {{url}}</div>
`
})

export class PageNotFound{
  url:string;
  constructor(private router:Router,private route:ActivatedRoute){}
  ngOnInit(){
    this.url = this.router.url;
  }
}
