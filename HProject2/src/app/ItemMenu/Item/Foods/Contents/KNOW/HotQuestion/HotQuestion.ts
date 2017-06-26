/**
 * Created by zhuzihao on 2017/6/24.
 */

import { Component } from "@angular/core"


@Component({
  template:"{{ data | json}}"
})
export class HotQuestion{
  data:any;
}
