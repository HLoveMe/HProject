/**
 * Created by zhuzihao on 2017/6/22.
 */


import { Injectable } from "@angular/core"
import {Observable, Subject} from "rxjs/Rx";
import {StoreModel} from "../Contents/HOT_SHOP/StoreModel";
import {RecommendModel} from "../Contents/RECOMMEND/RecommendModel";
import {BBSModel} from "../Contents/BBS/BBSModel";
import {ContentModle} from "../Contents/KNOW/ContentModle";
import {TicketModle} from "../Side/ticket/TicketModle";


@Injectable()
export class FoodDataServer{
  //获取搜索热门词条
  getHots():Observable<string[]>{
    return Observable.of(["金钱豹","大江南","香水蜘蛛","德玛楼","荷塘预防烤鱼坊"]).delay(200);
  }
  //Video 数据
  getVideoNews():Observable<string[]>{
    return Observable.of(["线程实录:杭州机场国航系统崩溃","网友自拍国航晚点后的遭遇","[拍客] 绝对最奢侈的航班 注意41秒"]).delay(200);
  }
  // SHOP 数据获取
  getShopMessage():Observable<any>{
      var datas = {
        "hots":[
          new StoreModel("宇宙和正啥啥考试啥","湖北",180,12321),
          new StoreModel("烤鱼","湖北/仙桃",180,12432),
          new StoreModel("不知道","背景",180,33321)
        ],
        "news":[
          new StoreModel("瞎搞","湖北",180,12321),
          new StoreModel("瞎搞","湖北/仙桃",180,12432),
          new StoreModel("瞎搞","背景",180,33321)
        ]
      };
    return Observable.create((sub:Subject<any>)=>{
      sub.next(datas);
      sub.complete()
    }).delay(100)
  }
//  精彩推荐
  getRecommend():Observable<RecommendModel[]>{
    var datas:RecommendModel[] = [
      new RecommendModel("老店换新颜,丰浙源田野重新亮相","08/07/12",1),
      new RecommendModel("老店换新颜,丰浙源田野重新亮相","08/07/12",2),
      new RecommendModel("老店换新颜,丰浙源田野重新亮相","08/07/12",1),
      new RecommendModel("老店换新颜,丰浙源田野重新亮相","08/07/12",2),
      new RecommendModel("老店换新颜,丰浙源田野重新亮相","08/07/12",1),
      new RecommendModel("老店换新颜,丰浙源田野重新亮相","08/07/12",2),
      new RecommendModel("老店换新颜,丰浙源田野重新亮相","08/07/12",2),
      new RecommendModel("老店换新颜,丰浙源田野重新亮相","08/07/12",1)
    ];
    return Observable.of(datas).delay(200)
  }
//  BBS数据
  getBBS():Observable<BBSModel[]>{
    return Observable.of([
      new BBSModel("保证你妹见过的餐厅","平安搭讪"),
      new BBSModel("保证你妹见过的餐厅","平安搭讪"),
      new BBSModel("保证你妹见过的餐厅","平安搭讪"),
      new BBSModel("保证你妹见过的餐厅","平安搭讪"),
      new BBSModel("保证你妹见过的餐厅","平安搭讪"),
      new BBSModel("保证你妹见过的餐厅","平安搭讪")
    ]).delay(200)
  }
  getKnow():Observable<any>{
    return Observable.of({
      problem:[
        new ContentModle("美食","撒开了睡觉奥了手机氨基酸是",1),
        new ContentModle("美食","撒开了睡觉奥了手机氨基酸是",2),
        new ContentModle("美食","撒开了睡觉奥了手机氨基酸是",1),
        new ContentModle("美食","撒开了睡觉奥了手机氨基酸是",1),
        new ContentModle("美食","撒开了睡觉奥了手机氨基酸是",2)
      ],
      resolute:["A","B","C"],
      question:["1","2","3"]
    }).delay(200)
  }

  //帮助
  getHelp():Observable<any>{
    var data={
      user:[
        "金币是什么",
        "怎么查看我的等级",
        "怎么赚取积分"
      ],
      store:[
        "如何成为明星商户",
        "邮件推广",
        "论坛推广方法"
      ]
    }
    return Observable.of(data).delay(300);
  }
//  券
  getTicket():Observable<any>{
    return Observable.of({
      popularity:[
        new TicketModle("老北京一座黄流","12%","ABCD"),
        new TicketModle("老北京一座黄流","12%","ABCD"),
        new TicketModle("老北京一座黄流","12%","ABCD"),
        new TicketModle("老北京一座黄流","12%","ABCD"),
        new TicketModle("老北京一座黄流","12%","ABCD")
      ],
      commend:[
        "朱子豪","iOS","HTML","Python","JS"
      ],
      last:[
        "ZZH","ZM","LS","LLS"
      ]
    }).delay(250);
  }
}
