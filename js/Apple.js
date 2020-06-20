
    //把nav里面的内容拷贝一份，即要模糊的内容
    let nav = $("nav").clone();
    //创建一个代码片段，存储nav的内容
    let conBlur = $("<div></div>");
    $(conBlur).append(nav);
    //给代码片段设置一个类"con-blur",并设置样式
    $(conBlur).addClass('con-blur');
    //给代码片段一个id：header，header需要设置样式
    $("#header").append(conBlur);
    let translation;
    //监听滚动事件
    $(window).bind("scroll", function(){
        let top = $(this).scrollTop(); // 当前窗口的滚动距离
        console.log(top);
        translation = 'translateY(' + (-top + 'px') + ')';
        //用获取到的滚动高度，在#header范围内，模糊nav的内容
        $(nav).css({"-webkit-transform":translation,"-moz-transform":translation,"transform":translation});
    });