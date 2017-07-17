/**
 * Created by xiaobxia on 2017/7/10.
 */
var af = new AlloyFinger(document.getElementById('one'), {
    touchStart: function (evt) {
        console.log(evt);
    },
    touchMove: function (evt) {
        console.log(evt);
    },
    touchEnd:  function (evt) {
        console.log(evt);
    },
    touchCancel: function (evt) {
        console.log(evt);
    },
    //多点开始
    multipointStart: function (evt) {
        console.log(evt);
    },
    //多点结束
    multipointEnd: function (evt) {
        console.log(evt);
    },
    //单击
    tap: function (evt) {
        console.log(evt);
    },
    //双击
    doubleTap: function (evt) {
        console.log(evt);
    },
    //长按
    longTap: function (evt) {
        console.log(evt);
    },
    //单击
    singleTap: function (evt) {
        console.log(evt);
    },
    //旋转
    rotate: function (evt) {
        console.log(evt.angle);
    },
    //捏
    pinch: function (evt) {
        console.log(evt.zoom);
    },
    //按着动
    pressMove: function (evt) {
        console.log(evt.deltaX);
        console.log(evt.deltaY);
    },
    //滑动
    swipe: function (evt) {
        console.log("swipe" + evt.direction);
    }
});

// 动态修改绑定
// var onTap = function() {};
//
// af.on('tap', onTap);
// af.on('touchStart', function() {});
//
// af.off('tap', onTap);
// 销毁
// af = af.destroy();