/**
 * Created by zhuzihao on 2017/6/22.
 */
/**
 * Created by zhuzihao on 2017/6/21.
 */

import { Component , Injectable} from "@angular/core"
import {Subject, Observable} from "rxjs/Rx";
import {Router,ActivatedRoute} from "@angular/router";



@Component({
  selector:"",
  template:
`
   <div class="box">
      <div class="message">{{ message | async }}</div>
      <ul class="">
        <li class=""><a class="myButton">取消</a></li>
        <li class=""><a class="myButton">确定</a></li>
      </ul>
   </div>
`,
  styles:[`
    .box{
      width: 202px;
      height: 110px;
      bottom: 3px;
      right: 3px;
      position: fixed;
      z-index:999;
      border-radius: 8px;
      border: 1px solid #e5e5e5;
      background-color: white;
      box-shadow: 0px 0px 1px red;
    }
    .box .message{
        height: 60px;
        padding: 10px;
        text-align: center;
    }
    .box li{
      height: 35px;
      float: left;
      width: 100px;
      position: relative;
    }
    .box li a{
        position: absolute;
        left: 0px;
        right: 0px;
        margin: 0px auto;
    }
  .myButton {
  width: 58px;
  height: 35px;
  line-height: 35px;
  text-align: center;
	background-color:#44c767;
	-moz-border-radius:10px;
	-webkit-border-radius:10px;
	border-radius:10px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:18px;

	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
}
.myButton:hover {
	background-color:#5cbf2a;
}
.myButton:active {
	position:relative;
	top:1px;
}

`]
})

export class MessageComponent{
  message:Observable<string>
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.message = this.route.queryParams.map(pars=>pars["con"])
  }
}

@Injectable()
export class MessageServer{
  private subject:Subject<string> = new Subject<string>();
  addNotifacation():Observable<string>{
    return this.subject.asObservable()
  }
  notifacation(content:string){
    this.subject.next(content);
  }
}
