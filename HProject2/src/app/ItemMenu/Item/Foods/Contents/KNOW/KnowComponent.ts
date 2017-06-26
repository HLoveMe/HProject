/**
 * Created by zhuzihao on 2017/6/24.
 */
import {Component, ViewChild, ViewContainerRef} from "@angular/core"
import {NavTopModel} from "../NavItem/NavTopItem";
import {ComponentDynamic} from "../../../DynamicServer/ComponentDynamic";
import {HasProblem} from "./HasProblem/HasProblem";
import {HasResolution} from "./HasResolution/HasResolution";
import {HotQuestion} from "./HotQuestion/HotQuestion";
import {FoodDataServer} from "../../FoodServe/FoodDataServer";
import {Observable, Subject} from "rxjs/Rx";

@Component({
  selector:"know",
  templateUrl:"./know.html"
})
export class KnowComponent{
  item:NavTopModel=new NavTopModel("LIFESTYLE ADVICE","知道分子");
  hots:string[]=["有人在问","有人知道","热门话题"];
  @ViewChild("content",{read:ViewContainerRef}) content;

  componentSub:Subject<[string,Component]>=new Subject();
  datasObj:Observable<any>;
  constructor(private dynac:ComponentDynamic,private dataS:FoodDataServer){}
  ngOnInit(){
    this.datasObj = this.dataS.getKnow();
    Observable.combineLatest(this.datasObj,this.componentSub).subscribe((data)=>{
      var name = data[1][0];
      var com =  data[1][1];
      com["instance"]["data"]=data[0][name];
    })
  }
  ngAfterViewInit(){
    this.selectItem(0);
  }
  selectItem(event){
    var component:any;
    var name:string;
    if(event == 0){
      component = HasProblem;
      name="problem"
    }else if(event == 1 ){
      component = HasResolution;
      name="resolute";
    }else{
      component = HotQuestion;
      name="question";
    }
    this.componentSub.next([name,this.dynac.dynamic(this.content,component)])
  }
  goMore(){
    console.log(111)
  }
}
