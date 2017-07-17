/**
 * Created by xiaobxia on 2017/7/10.
 */
/**
 * 默认情况下，不需要add，就会有tap，doubletap，press，pinch，rotate，pan，swipe
 */
var myElement = document.getElementById('one');
var hammertime = new Hammer(myElement);
hammertime.on('pan', function (ev) {
    console.log(ev);
});
//通过get，然后对其set进行修改设置
hammertime.get('pinch').set({enable: true});
hammertime.get('rotate').set({enable: true});

hammertime.get('pan').set({direction: Hammer.DIRECTION_ALL});
hammertime.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL});

//也可以通过add进行设置，在manager对象下
var mc = new Hammer.Manager(myElement);

mc.add(new Hammer.Pan({direction: Hammer.DIRECTION_ALL, threshold: 0}));
mc.add(new Hammer.Tap({event: 'quadrupletap', taps: 4}));

mc.on("pan", handlePan);
mc.on("quadrupletap", handleTaps);

//方向的控制
direction = {
    DIRECTION_NONE: 1,
    DIRECTION_LEFT: 2,
    DIRECTION_RIGHT: 4,
    DIRECTION_UP: 8,
    DIRECTION_DOWN: 16,
    DIRECTION_HORIZONTAL: 6,
    DIRECTION_VERTICAL: 24,
    DIRECTION_ALL: 30
};
