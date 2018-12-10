//banner
(function(){
//获取所有图片的总数
var $innerGroup = $(".banner_container>.inner li");
//获取左箭头按钮
var $leftArrow = $(".banner_container>.left-arrow");
//获取右箭头按钮
var $rightArrow = $(".banner_container>.right-arrow");
// 获取所有页码的集合
var $liGroup = $(".banner_container>ul.pagination>li");
// 页码默认激活项为第一个
var li_index = 0;
// 设置定时器名称为timer
var timer = null;
// 设置定时器timer间隔一秒移动方式
function move(index){
        //检查是否到最后一张
    if (li_index == $innerGroup.length) {
        //如果为true,激活项下标为0;
        li_index=0;
        index=0;
    }
    //获取当前页码的激活项下标，添加active,其他兄弟移除激活项
    $liGroup.eq(index)
            .addClass("active").siblings()
            .removeClass("active");
    // 每隔一秒走动单张图片的宽度；
    $innerGroup.eq(index)
               .addClass("active")
               .siblings()
               .removeClass("active");
    //console.log(index)
}
//为了定时器每隔一段时间下标加1；
function go(){
    li_index++;
    move(li_index);
}
//建立定时器
timer=setInterval(go, 2000);
//鼠标移入移出
$(".banner_container").hover(
    //鼠标移入清除定时器
    function() {
        clearInterval(timer);
    },
    //鼠标移出启动定时器
    function() {
        timer = setInterval(go, 2000);
    }
);
//右箭头
$rightArrow.on("click", function() {
    //点击箭头时，清除定时器
    clearInterval(timer);
    //页码加1
    li_index++;
    //执行移动函数
    move(li_index);
})
//左箭头
$leftArrow.on("click", function() {
    //点击箭头时，清除定时器
    clearInterval(timer);
    //判断如果页码下标为0;页面下标=图片总数-1;到达倒数第二张图片下标位置
    if (li_index == 0) {
        li_index = $innerGroup.length - 1;
        $innerGroup.eq(li_index)
                    .addClass("active")
                    .siblings()
                    .removeClass("active");
    }else{
        //否则只减一；
        li_index--;
    } 
    //执行移动函数
    move(li_index);
})
//页码切换  冒泡原理
$(".banner_container>ul.pagination").on("click","li",function() {
    //导航切换
    li_index = $(this).index();
    //console.log(li_index);
    move(li_index);
})

})()