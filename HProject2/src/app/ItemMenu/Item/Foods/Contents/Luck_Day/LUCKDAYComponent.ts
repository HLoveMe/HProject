/**
 * Created by zhuzihao on 2017/6/23.
 */

import { Component } from "@angular/core"

@Component({
  selector:"luck-day",
  templateUrl:"./luck-day.html",
  styleUrls:["./luck-day.css"]
})

export class LUCKDAYComponent{
  constructor(){}
  ngOnInit(){
    jQuery("#datepicker").datepicker({firstDay: 1});
    jQuery("#datepicker .ui-state-active").css("background", "url('/assets/img/content/today1.gif') no-repeat")
    //解除默认事件
    jQuery("#datepicker .ui-state-default ").parent().unbind();
    var aS = jQuery("#datepicker .ui-state-default").get();
    jQuery.each(aS,(index,value)=>{
      var item = jQuery(value);
      item.click((event)=>{
        var target = jQuery("#message");
        target.css("display", "block");
        target.css("left", (item.outerWidth(true) + item.offset().left + 15) + "px")
        target.css("top", (item.offset().top - target.height() / 2 + item.innerWidth() / 2) + "px");
        event.preventDefault();
        return false;
      })
    })
    jQuery("#datepicker .ui-datepicker-calendar tr").addClass("gradient");
    jQuery(document).bind("scroll click",()=>{
      jQuery("#message").css("display", "none");
    })
  }
}
