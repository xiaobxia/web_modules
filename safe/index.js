/**
 * Created by xiaobxia on 2017/9/12.
 */
//TODO 使用了npm包中的xss包
/**
 * 解决问题的思想在于，忽略不该有的标签和属性，对有威胁的属性进行转移(如src)
 */

var xss = filterXSS;

var imgSource = '<img src="" onerror="javascript: alert(\'bad\')" alt="">';

var source = '<div a="1" b="2" data-a="3" data-b="4">hello</div>';
var html = xss(source, {
    //只允许a标签的几个属性
    whiteList: {
        a: ['href', 'title', 'target']
    },

    //去掉不在白名单上的标签，但是会留下content
    //stripIgnoreTag: true,

    //连着标签的content一起去除
    //true 所有
    //[tag] 不在白名单中并且是div的
    stripIgnoreTagBody: ['div'],

    //是否允许备注
    allowCommentTag: true,

    //配到标签时的钩子
    onTag: function (tag, html, options) {
        // tag是当前的标签名称，比如<a>标签，则tag的值是'a'
        // html是该标签的HTML，比如<a>标签，则html的值是'<a>'
        // options是一些附加的信息，具体如下：
        //   isWhite    boolean类型，表示该标签是否在白名单上
        //   isClosing  boolean类型，表示该标签是否为闭合标签，比如</a>时为true
        //   position        integer类型，表示当前标签在输出的结果中的起始位置
        //   sourcePosition  integer类型，表示当前标签在原HTML中的起始位置
        // 如果返回一个字符串，则当前标签将被替换为该字符串
        // 如果不返回任何值，则使用默认的处理方法：
        //   在白名单上：  通过onTagAttr来过滤属性，详见下文
        //   不在白名单上：通过onIgnoreTag指定，详见下文
    },

    //匹配到属性时的钩子
    onTagAttr: function (tag, name, value, isWhiteAttr) {
        // tag是当前的标签名称，比如<a>标签，则tag的值是'a'
        // name是当前属性的名称，比如href="#"，则name的值是'href'
        // value是当前属性的值，比如href="#"，则value的值是'#'
        // isWhiteAttr是否为白名单上的属性
        // 如果返回一个字符串，则当前属性值将被替换为该字符串
        // 如果不返回任何值，则使用默认的处理方法
        //   在白名单上：  调用safeAttrValue来过滤属性值，并输出该属性，详见下文
        //   不在白名单上：通过onIgnoreTagAttr指定，详见下文
    },
    //匹配到不在白名单中的标签的钩子
    onIgnoreTag: function (tag, html, options) {
        // 参数说明与onTag相同
        // 如果返回一个字符串，则当前标签将被替换为该字符串
        // 如果不返回任何值，则使用默认的处理方法（通过escape指定，详见下文）
    },
    //匹配不在白名单中的属性的钩子
    onIgnoreTagAttr: function (tag, name, value, isWhiteAttr) {
        console.log(tag);
        console.log(name);
        console.log(value);
        console.log(isWhiteAttr);
        //如果属性是data-属性，就返回其他的不返回
        if (name.substr(0, 5) === 'data-') {
            // 通过内置的escapeAttrValue函数来对属性值进行转义
            //safeAttrValue
            return name + '="' + xss.escapeAttrValue(value) + '"';
        }
    },

    //转移函数，不建议修改
    escapeHtml: function (html) {
        return html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
});
console.log('%s\nconvert to:\n%s', source, html);
/*
 运行结果：
 <div a="1" b="2" data-a="3" data-b="4">hello</div>
 convert to:
 <div data-a="3" data-b="4">hello</div>
 */

//TODO 图片攻击
var div = document.getElementById('div');
div.innerHTML = xss(imgSource, {
    onTagAttr: function (tag, name, value, isWhiteAttr) {
        console.log('in')
        //friendlyAttrValue
        //escapeAttrValue
        //safeAttrValue
        return name + '="' +xss.safeAttrValue(value)+'"';
    }
});

/**
 * API
 * exports.whiteList = getDefaultWhiteList();
 exports.getDefaultWhiteList = getDefaultWhiteList;
 exports.onTag = onTag;
 exports.onIgnoreTag = onIgnoreTag;
 exports.onTagAttr = onTagAttr;
 exports.onIgnoreTagAttr = onIgnoreTagAttr;
 exports.safeAttrValue = safeAttrValue;
 exports.escapeHtml = escapeHtml;
 exports.escapeQuote = escapeQuote;
 exports.unescapeQuote = unescapeQuote;
 exports.escapeHtmlEntities = escapeHtmlEntities;
 exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
 exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
 exports.friendlyAttrValue = friendlyAttrValue;
 exports.escapeAttrValue = escapeAttrValue;
 exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
 exports.StripTagBody = StripTagBody;
 exports.stripCommentTag = stripCommentTag;
 exports.stripBlankChar = stripBlankChar;
 exports.cssFilter = defaultCSSFilter;
 exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
 */
