

$(function(){
    $(window).scroll(function(){
        var scrollY=$(window).scrollTop();
        if(scrollY>186){
            $('.nav-box').addClass('nav-box-fixed')
        }else{
            $('.nav-box').removeClass('nav-box-fixed')
        }


    })
})
