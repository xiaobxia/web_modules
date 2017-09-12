/**
 * Created by xiaobxia on 2017/7/17.
 */
var editor = new Simditor({
    //挂载的元素
    textarea: $('#editor'),
    placeholder: '',
    defaultImage: 'images/image.png',
    params: {},
    upload: {
        url: '',
        params: null,
        fileKey: 'upload_file',
        connectionCount: 3,
      //  leaveConfirm: 'Uploading is in progress, are you sure to leave this page?'
    },
    tabIndent: true,
    //工具条
    toolbar: [
        'title',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'fontScale',
        'color',
        'ol',
        'ul',
        'blockquote',
        'code',
        'table',
        'link',
        'image',
        'hr',
        'indent',
        'outdent',
        'alignment'
    ],
    toolbarFloat: true,
    toolbarFloatOffset: 0,
    toolbarHidden: false,
    pasteImage: false,
    cleanPaste: false,
    //null
    allowedTags: ['br', 'span', 'a', 'img', 'b', 'strong', 'i', 'strike', 'u', 'font', 'p', 'ul', 'ol', 'li', 'blockquote', 'pre', 'code', 'h1', 'h2', 'h3', 'h4', 'hr'],
    //null
    allowedAttributes: {
        img: ['src', 'alt', 'width', 'height', 'data-non-image'],
        a: ['href', 'target'],
        font: ['color'],
        code: ['class']
    },
    //null
    allowedStyles: {
        span: ['color', 'font-size'],
        b: ['color'],
        i: ['color'],
        strong: ['color'],
        strike: ['color'],
        u: ['color'],
        p: ['margin-left', 'text-align'],
        h1: ['margin-left', 'text-align'],
        h2: ['margin-left', 'text-align'],
        h3: ['margin-left', 'text-align'],
        h4: ['margin-left', 'text-align']
    },
    //null
    codeLanguages: [
        {name: 'Bash', value: 'bash'},
        {name: 'C++', value: 'c++'},
        {name: 'C#', value: 'cs'},
        {name: 'CSS', value: 'css'},
        {name: 'Erlang', value: 'erlang'},
        {name: 'Less', value: 'less'},
        {name: 'Sass', value: 'sass'},
        {name: 'Diff', value: 'diff'},
        {name: 'CoffeeScript', value: 'coffeescript'},
        {name: 'HTML,XML', value: 'html'},
        {name: 'JSON', value: 'json'},
        {name: 'Java', value: 'java'},
        {name: 'JavaScript', value: 'js'},
        {name: 'Markdown', value: 'markdown'},
        {name: 'Objective C', value: 'oc'},
        {name: 'PHP', value: 'php'},
        {name: 'Perl', value: 'parl'},
        {name: 'Python', value: 'python'},
        {name: 'Ruby', value: 'ruby'},
        {name: 'SQL', value: 'sql'}
    ]
});
setTimeout(function () {
    editor.setValue('aaa');
},100);
setTimeout(function () {
    console.log(editor.getValue());
},200);
//方法
// editor.setValue();
// editor.getValue();
// editor.sync();
// editor.focus();
// editor.blur();
// editor.hidePopover();
// editor.destroy();

//事件
editor.on('valuechanged',function (e) {
    console.log('value change');
    console.log(e);
});
editor.on('selectionchanged',function () {
});
editor.on('decorate',function (e,$el) {
});
editor.on('undecrate',function () {
});
editor.on('pasting',function () {
});
//focus,blur,destroy


