/**
 * Created by zhuzihao on 2017/6/26.
 */
import {Component, ViewChild, ViewContainerRef} from "@angular/core"
import {NavTopModel} from "../../Contents/NavItem/NavTopItem";
import {TicketModle} from "./TicketModle";
import {FoodDataServer} from "../../FoodServe/FoodDataServer";
import {PopularityComponet} from "./popularity/PopularityComponet";
import {commendComponent} from "./commend/commendComponent";
import {ComponentDynamic} from "../../../DynamicServer/ComponentDynamic";
import {Observable, Subject} from "rxjs/Rx";
import {LastComponent} from "./last/LastComponent";



@Component({
  selector:'ticket',
  templateUrl:"./ticket.html",
  styleUrls:["./ticket.css"]
})
export class TicketComponent{
  item:NavTopModel = new NavTopModel("COUPONS","卷圈儿")
  titles:string[] = ["人气","最新","推荐"]
  @ViewChild("container",{read:ViewContainerRef}) container;
  dataObs:Observable<any>;
  comObs:Subject<any> = new Subject();
  constructor(private ser:FoodDataServer,private dynac:ComponentDynamic){}
  ngOnInit(){
    this.dataObs =  this.ser.getTicket();
    Observable.combineLatest(this.dataObs,this.comObs).subscribe(data=>{
      var com = data[1][0];
      var name = data[1][1];
      com.instance.data=data[0][name];
    })
  }
  ngAfterViewInit(){
      this.selectSegement(0);
  }
  selectSegement(index:number){
    var com:Component;
    var name:string;
    if(index==0){
      com = PopularityComponet;
      name="popularity";
    }else if(index==1){
      com = commendComponent;
      name="commend";
    }else{
      com = LastComponent;
      name="last";
    }
    this.comObs.next([this.dynac.dynamic(this.container,com),name])
  }
}
