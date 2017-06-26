/**
 * Created by zhuzihao on 2017/6/23.
 */

import {Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentRef} from "@angular/core"


@Injectable()
export class ComponentDynamic{
  constructor(private fac:ComponentFactoryResolver){}
  dynamic(container:ViewContainerRef,com:any):ComponentRef<any>{
    var factory = this.fac.resolveComponentFactory(com);
    container.clear();
    return container.createComponent(factory);
  }
}
