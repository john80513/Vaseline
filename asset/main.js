$(function() {

    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:7000
    });

    // header
    
    $(document).on('click', '#header .btn-down',function(){
        var $li = $(this).closest('.nav-item');
        // $li.toggleClass('active');
        $li.find('.nav-item-div').slideToggle(250);
        
    });

    $(window).on('resize',function(){
        menu_rezsize()
        rwd_img()
    })
    menu_rezsize()
    function menu_rezsize(){
        var w = $(window).innerWidth();
        var $nav = $('#header nav');
        if(w>991){
            $nav.addClass('menu-hd');
            $('.nav-item-div').show(0);
        }else{
            if($nav.hasClass('menu-hd')){
                $nav.removeClass('menu-hd');
                $('.nav-item-div').hide(0);
            }
        }
    }
    rwd_img()
    function rwd_img(){
        var w = $(window).innerWidth();
        if(w>767){
            $('.rwd-img').each(function(){
                if(!$(this).hasClass('web')){
                    var ws = $(this).attr('data-w-img');
                    $(this).attr('src', ws);
                    $($(this)).removeClass('mobile').addClass('web')
                }
            })
        }else{
            $('.rwd-img').each(function(){
                if($(this).hasClass('web')){
                    var ms = $(this).attr('data-m-img');
                    $(this).attr('src', ms);
                    $($(this)).removeClass('web').addClass('mobile')
                }
            })
        }
    }
    

});