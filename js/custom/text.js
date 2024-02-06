var a_idx = 0;
$(document).ready(function() {
    $("body").click(function(e) {
        var a = new Array("好好吃饭", "好好喝水", "好好睡觉", "好好生活", "好好要好好");
        var $i = $("<span/>").text(a[a_idx]);
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 28,
            "left": x - a[a_idx].length * 8,
            "position": "absolute",
            "color": "#ff7a45"
        });
        $("body").append($i);
        // 停止当前正在运行的动画，并立即完成动画效果
        $i.stop(true, true);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function() {
            $i.remove();
        });
        a_idx = (a_idx + 1) % a.length;
    });
});
