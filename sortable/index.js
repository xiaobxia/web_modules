/**
 * Created by xiaobxia on 2017/6/19.
 */
/**
 * 更多的使用方法：https://github.com/RubaXa/Sortable
 */

(function () {
    var simpleList = document.getElementById('simpleList');
    var simpleList2 = document.getElementById('simpleList2');
    var simpleListTwo = Sortable.create(simpleList2, { group: 'shared'});

    var simpleListOne = Sortable.create(simpleList, {
        //如果有两个列表，他们的group的值相同，就可以相互拖动
        group: 'shared',

        //如果false，就不可以进行拖动排序
        sort: false,
        //状态，可以通过save方法得到状态，初始化时给一个状态也可以
        store: {
            /**
             * Get the order of elements. Called once during initialization.
             * @param   {Sortable}  sortable
             * @returns {Array}
             */
            get: function (sortable) {
                var order = localStorage.getItem(sortable.options.group.name);
                return order ? order.split('|') : [];
            },

            /**
             * Save the order of elements. Called onEnd (when the item is dropped).
             * @param {Sortable}  sortable
             */
            set: function (sortable) {
                var order = sortable.toArray();
                localStorage.setItem(sortable.options.group.name, order.join('|'));
            }
        },
        //拖动项配置
        //不会拖动的项
        filter: ".ignore-elements",
        //设置draggable可以让特定的元素可拖动，但是没办法放下来
       // draggable: ".item",
        //选出可拖动的子元素，其他子元素无法拖动
       //handle: ".my-handle",


        //css配置
        ghostClass: "sortable-ghost",
        //设置被选中的项的class
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        dataIdAttr: 'data-id',

        /**
         ******  回调部分
         */
        onEnd: function (/**Event*/evt) {
            console.log('end-old-index', evt.oldIndex)
            console.log('end-new-index', evt.newIndex)
        },
        onStart: function (/**Event*/evt) {
            console.log(evt);
            console.log('start-old-index', evt.oldIndex)
        },
        onChoose: function (/**Event*/evt) {
            console.log('choose-old-index', evt.oldIndex)
        },
        //拖动产生克隆时
        onClone: function (/**Event*/evt) {
            console.log('clone-origin', evt.item)
            console.log('clone-clone', evt.clone)
        }
    });

    //方法
    //动态设定
    simpleListTwo.option('group','shared');
    //在html中设置data-id(dataIdAttr),返回顺序
    var order = simpleListOne.toArray();
    console.log('order',order);
    //sort方法进行再排列
    simpleListOne.sort(order.reverse());
})();