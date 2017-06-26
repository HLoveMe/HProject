/**
 * Angular 2 decorators and services
 */
import {Component,ContentChild} from '@angular/core';
import {Router} from "@angular/router";
import {MessageServer, MessageComponent} from "./Command/MessageComponent";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl:"./app.component.html"
})
export class AppComponent{
  time:any;
  constructor(private router:Router,private msgS:MessageServer){}
  ngOnInit(){


    this.msgS.addNotifacation().subscribe(content=>{
      if(this.time){
        clearTimeout(this.time);
      }
      this.router.navigate([{outlets:{message:["message"]}}],{queryParams:{con:content}})
      this.time=setTimeout(()=>{
        this.router.navigate([{outlets:{message:null}}]);
      },5000);
    })
  }
}
