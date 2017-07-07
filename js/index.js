$.ajax({
    url: " http://139.199.192.48:9091/api/getlunbo",
    type: "get",
    success: function (data) {
        console.log(data);
        var str = template("Car_tmp", { list: data });
        // console.log(str);
        $(".carousel-inner").html(str);
        $($(".carousel-inner .item")[0]).addClass("active")
    }
});




$.ajax({
    url: "http://139.199.192.48:9091/api/gethometab/1",
    type: "get",
    success: function (data) {
        var Tabstr = template("tab_Htpl", { lib: data });
        // console.log(Tabstr);
        $("#home ul").html(Tabstr);

    }
});

$(function () {
    var dom;
    var lis = document.querySelectorAll("#lis-index li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            var x = this.index + 1;
            $.ajax({
                url: "http://139.199.192.48:9091/api/gethometab/" + x,
                type: "get",
                success: function (data) {
                    var Tabstr = template("tab_Htpl", { lib: data });
                    if (x == 1) {
                        dom = $("#home ul");
                    } else if (x == 2) {
                        dom = $("#profile ul");
                    } else if (x == 3) {
                        dom = $("#messages ul");
                    } else {
                        dom = $("#settings ul");
                    }
                    dom.html(Tabstr);
                }
            });
        }
    }
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });


    // 点击 左上角的 按钮显示侧边栏
    $(".left-meun")
    $(".meun").on("click", function () {
        $(".left-meun").css("display", "block");
        $(".zhez").css("display", "block");
        $(".bingbox").css("transform", "translateX(200px)");
    });
     $(".zhez").on("click",function(){
         $(".left-meun").css("display", "none");
        $(".zhez").css("display", "none");
        $(".bingbox").css("transform", "translateX(0px)");
     })

    
})


 