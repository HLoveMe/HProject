/**
 * Created by zhuzihao on 2017/6/21.
 */

import { NgModule } from "@angular/core"
import {ItemMenuRouter} from "./ItemMenuRouter";
import {ItemMenuComponent} from "./ItemMenuComponent";
import {Item} from "./Item/Item";
import {CommonModule} from "@angular/common";
import {FoodItemComponent} from "./Item/Foods/FoodItemComponent";
import {RouterModule} from "@angular/router";
import {NightclubComponent} from "./Item/Nightclub/NightclubComponent";
import {SearchStoreComponent} from "./Item/Foods/Search_store/SearchStoreComponent";
import {SearchAddressComponent} from "./Item/Foods/Search_address/SearchAddressComponent";
import {WHATComponent} from "./Item/Foods/Contents/What/WHATComponent";
import {NavItems} from "./Item/Foods/Contents/NavItem/NavItems";
import {SHOPComponent} from "./Item/Foods/Contents/HOT_SHOP/SHOPComponent";
import {ComponentDynamic} from "./Item/DynamicServer/ComponentDynamic";
import {NEWSHOPComponent} from "./Item/Foods/Contents/HOT_SHOP/new_store/NEWSHOPComponent";
import {HOTSHOPComponent} from "./Item/Foods/Contents/HOT_SHOP/store/STOREComponent";
import {LUCKDAYComponent} from "./Item/Foods/Contents/Luck_Day/LUCKDAYComponent";
import {RECOMMENDComponent} from "./Item/Foods/Contents/RECOMMEND/RECOMMENDComponent";
import {SubwayComponent} from "./Item/Foods/Contents/Subway/SubwayComponent";
import {MetroComponent} from "./Item/Foods/Contents/Subway/metro/MetroComponent";
import {LifeComponent} from "./Item/Foods/Contents/Subway/Lifecircle/LifeComponent";
import {NavTopItem} from "./Item/Foods/Contents/NavItem/NavTopItem";
import {BBSComponent} from "./Item/Foods/Contents/BBS/BBSComponent";
import {KnowComponent} from "./Item/Foods/Contents/KNOW/KnowComponent";
import {SegementItems} from "./Item/Foods/Contents/NavItem/SegementItems";
import {HasProblem} from "./Item/Foods/Contents/KNOW/HasProblem/HasProblem";
import {HasResolution} from "./Item/Foods/Contents/KNOW/HasResolution/HasResolution";
import {HotQuestion} from "./Item/Foods/Contents/KNOW/HotQuestion/HotQuestion";
import {PeopleComponent} from "./Item/Foods/Contents/People/PeopleComponent";
import {HelpComponent} from "./Item/Foods/Contents/HELP/HelpComponent";
import {MediaComponent} from "./Item/Foods/Contents/Media/MediaComponent";
import {LoginComponent} from "./Item/Foods/Side/Login/LoginComponent";
import {FormsModule} from "@angular/forms";
import {turntableComponent} from "./Item/Foods/Side/Ads/turntableComponent";
import {ADTwoComponet} from "./Item/Foods/Side/Ads/ADTwoComponet";
import {TicketComponent} from "./Item/Foods/Side/ticket/TicketComponent";
import {PopularityComponet} from "./Item/Foods/Side/ticket/popularity/PopularityComponet";
import {commendComponent} from "./Item/Foods/Side/ticket/commend/commendComponent";
import {LastComponent} from "./Item/Foods/Side/ticket/last/LastComponent";


@NgModule({
  declarations:[
    ItemMenuComponent,Item,
    FoodItemComponent,
    NightclubComponent,
    SearchStoreComponent,
    SearchAddressComponent,
    NavItems,
    NavTopItem,
    SegementItems,

    WHATComponent,
    SHOPComponent,
    NEWSHOPComponent,
    HOTSHOPComponent,

    LUCKDAYComponent,  //每日活动
    RECOMMENDComponent, //精彩推荐

    SubwayComponent,   //交通
    MetroComponent,   //地铁
    LifeComponent,     //生活


    BBSComponent,

    KnowComponent,
    HasProblem,
    HasResolution,
    HotQuestion,

    PeopleComponent,
    HelpComponent,
    MediaComponent,


  //  side
    LoginComponent,
    turntableComponent,
    ADTwoComponet,

    TicketComponent,
    PopularityComponet,
    commendComponent,
    LastComponent

  ],
  imports:[
    FormsModule,
    RouterModule,
    ItemMenuRouter,
    CommonModule,
  ],
  exports:[
    ItemMenuComponent
  ],
  providers:[
    ComponentDynamic
  ],
  entryComponents:[
    NEWSHOPComponent,HOTSHOPComponent,

    MetroComponent,LifeComponent,

    HasProblem,HasResolution,HotQuestion,


    PopularityComponet, commendComponent,LastComponent
  ]
})

export class ItemMenuModule{}
