/**
 * Created by zhuzihao on 2017/6/5.
 */

$(function () {

    //导航
    $("#nav ul .active").css("backgroundPosition", "0px -70px");
    $("#nav ul li a").click(function () {
        var x = $(this).css("backgroundPositionX");
        var y = "-70px";
        // 移除旧的
        var old = $("#nav ul .active");
        old.removeClass("active");
        old.css("backgroundPosition", old.css("backgroundPositionX") + " 0px");

        //增加新的
        $(this).css("backgroundPosition", x + " " + y);
        console.log(x,y)
        $(this).addClass("active")
    })


    //select 切换   店铺

    $("#content .main .store li").click(function () {
        if ($(this).hasClass("active")) {
            return;
        }
        $("#content .main .store li").filter(".active").removeClass("active");
        $(this).addClass("active");
    });


    //抢卷儿
    $("#content .side .ticket .part_bottom ul").load('./COUPONS/COUPONS1.html')
    $("#content .side .ticket .know_tabs li").click(function () {
        if ($(this).hasClass("active")) {
            return;
        }
        $("#content .side .ticket .know_tabs li").removeClass("active")
        $(this).addClass("active")
        var index = "./COUPONS/COUPONS" + (1 + $(this).index()) + ".html";
        var target = $("#content .side .ticket .part_bottom ul");
        target.html("");
        target.load(index);
    });

    //每日活动
    var today = new Date();
    console.log(today)
    var year = today.getFullYear();
    var mouth = today.getMonth() + 1;
    var ri = today.getDate();

    $("#content .activity .head .time_today").text(year + "." + mouth)
    $("#content .activity .introduction .time_mouth").text(mouth)
    $("#content .activity .introduction .time_today").text(ri)


    // 日历
    $("#datepicker").datepicker({firstDay: 1});
    $("#datepicker .ui-state-active").css("background", "url('./img/content/today1.gif') no-repeat")
    //解除默认事件
    $("#datepicker .ui-state-default ").parent().unbind();
    //增加自己事件
    var as = $("#datepicker .ui-state-default").get();
    var activityJSoan = null;
    //获取数据
    function getActivityData(func) {
        $.get({
            url: "./josn/oneday.json",
            dataType: "json",
            success: func
        })
    }

    getActivityData(function (data) {
        activityJSoan = data["message"];
    });

    $.each(as, function (index, item) {
        item.onclick = function (ev) {
            var _item = $(item);
            var target = $("#message");
            target.css("display", "block");
            target.css("left", (_item.outerWidth(true) + _item.offset().left + 15) + "px")
            target.css("top", (_item.offset().top - target.height() / 2 + _item.innerWidth() / 2) + "px");
            if (activityJSoan == null) {
                getActivityData(function (data) {
                    activityJSoan = data["message"];
                    var index = Math.floor(Math.random() * activityJSoan.length);
                    var mess = activityJSoan[index];
                    $("#message .content .desc span:nth-of-type(2)").text(mess["title"])
                    $("#message .content .desc .descript").text(mess["descript"])
                })
            } else {
                var index = Math.floor(Math.random() * activityJSoan.length);
                var mess = activityJSoan[index];
                $("#message .content .desc span:nth-of-type(2)").text(mess["title"])
                $("#message .content .desc .descript").text(mess["descript"])
            }
            ev.stopPropagation();
            ev.preventDefault();
            return false;
        }
    })
    //隐藏日历点击视图
    $(document).bind("click scroll", function (event) {
        $("#message").css("display", "none");
    })


    //精彩推荐
    var interavl = null;

    function autoShow() {
        interavl = setInterval(function () {
            var active = $(".box .marvellous .img_show .sideShow div").filter(".active");
            var index = active.index();
            index += 1;
            if (index == 3) {
                index = 0;
            }
            $(".box .marvellous .img_show .sideShow div").eq(index).trigger("click");
        }, 3000);
    }

    autoShow();
    $(".box .marvellous .img_show .sideShow div").click(function (event) {
        if ($(this).hasClass("active")) {
            return;
        }
        ;
        if (interavl) {
            clearInterval(interavl);
            autoShow();
        }
        $(".box .marvellous .img_show .sideShow div").removeClass("active");
        $(this).addClass("active");
        var color = null;
        var index = $(this).index();
        if (index == 0) {
            color = "red";
        }
        else if (index == 1) {
            color = "yellow";
        }
        else {
            color = "orange"
        }
        $(".box .marvellous .img_show .imgShow").css("backgroundColor", color);
        return false;
    })


    $.get("./josn/Marvellous_message.json", function (data) {
        var datas = data["msgs"];
        var lis = "";
        $.each(datas, function (index, item) {
            if (item["type"] == 1) {
                lis += "<li type='1'><a href=" + item["href"] + ">" + item["title"] + "</a><span>" + item["time"] + "</span></li>"
            } else {
                lis += "<li type='2'><a href=" + item["href"] + ">" + item["title"] + "</a><span>" + item["time"] + "</span></li>"
            }

        })
        $(".box .marvellous .msgs_show ul").html(lis);
    })


//   交通
    function jiaotongModulechange(index) {
        var target = $("#content .box  .traffic .con");
        if (index == 0) {
            target.load("./COUPONS/jiaotong/jiaotong.html", function () {
                $("#content .box  .traffic .con .buttons a").click(function (event) {
                    event.preventDefault();
                    if ($(this).hasClass("active")) {
                        return;
                    }
                    $("#content .box  .traffic .con .buttons a").removeClass("active");
                    $(this).addClass("active");

                })
            })
        }else {
            target.html("不给你看");
        }
    }
    jiaotongModulechange(0);
    $("#content .box .traffic .tabs li").click(function () {
        if ($(this).hasClass("active")) {
            return;
        }
        var target = $("#content .box .traffic .tabs li").not(".active");
        var source = $("#content .box .traffic .tabs li")
        source.removeClass("active");
        source.addClass("gradient");
        target.addClass("active");
        target.removeClass("gradient");
        jiaotongModulechange($(this).index());
    })


//    知道
    function changeKnowContent(index) {
        var url = "./COUPONS/know/know_"+index+".html";
        $("#content .box .question .question_content").load(url);
    }
    changeKnowContent(0);
    $("#content .box  .question .know_tabs li").click(function () {
        if($(this).hasClass("active")){return;}
        $("#content .box  .question .know_tabs li").removeClass("active")
        $(this).addClass("active")

        var target = $("#content .box  .question .know_tabs li div").filter(".red_down");
        target.removeClass("red_down");
        target.addClass("gray_down");

        var arrow =  $(this).children("div.arrow");
        arrow.removeClass("gray_down");
        arrow.addClass("red_down");

        changeKnowContent($(this).index());
    })

//    hot people 代码生成
    var target =  $("#content .box .people .content");
    var html = "";
    for(var i =0 ;i<11;i++){
       html += "<div><a href='#'><ul><li></li><li></li></ul></a></div>";
    }
    target.html(html);
    for(var j =0 ;j<11;j++){
        var selector = "#content .box .people .content div:nth-of-type("+(j+1)+")";
        var url =  "url(./images/people/people_"+j+".png) no-repeat";
        $(selector).css("background",url);
    }

    //登入

    $("#content .side .login .loginFrom li label").click(function () {
        var radio = $(this).prev()
        var checked = radio.attr("checked")
        if(checked){
            radio.removeAttr("checked");
        }else{
            radio.attr("checked","checked")
        }
    })

});