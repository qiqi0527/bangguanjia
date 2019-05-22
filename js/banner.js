$(function () {
    var index = 0;
    // 公用函数
    function wer(){  
        // 控制bg的left值
        $('.bg').stop(true).animate({'left':-index*$('.bg li').width()},1000);
        $('i').eq(index).addClass('on').siblings().removeClass('on');
    }
    // 下一张
    function fun(){
        index++;
        if (index == $('.bg li').length) {
            index = 0;
        };
        wer();	
    }
    console.log($('.bg li').length)
    $('.next').click(fun)
    // 上一张
    $('.prew').click(function(){
        index--;
        if (index < 0) {
            index = $('.bg li').length - 1;
        };
        wer();
    })
    var time = setInterval(fun,1500);

    $('i').mouseenter(function(){
        $index = $(this).index();//获取对应的索引值
        //设置导航按钮样式
        $(this).addClass('on').siblings().removeClass('on');
        //设置图片移动动画
        $('.bg').stop(true).animate({'left':-$index * $('.bg li').width()},1000);
    })

    // 划上清除定时器 划出启动
    $('section').hover(
        function(){
            clearInterval(time);
            $('section span').fadeIn();
        },
        function(){
            time = setInterval(fun,1500);
            $('section span').fadeOut();
        }
    );
})