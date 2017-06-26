/**
 * Created by zhuzihao on 2017/6/26.
 */

import { Component } from "@angular/core"


@Component({
  selector:"commend",
  template:`<h2 style="margin-left: 20px">data</h2><div>{{data|json}}</div>`
})

export class LastComponent{
  data:any;
}
