$(function(){

    abrirModalLogin();
    abrirModalRegister();
    verificarCliqueFechar();

    function abrirModalLogin(){
        $('nav.menu-desktop button,nav.menu-mobile button').click(function(e){
            e.stopPropagation();
            $('.modal').fadeIn();
            $('html,body').css('overflow','hidden');
        })
    }

    function abrirModalRegister(){
        $('section.sobre .parte2 button').click(function(e){
            e.stopPropagation();
            $('.modal-2').fadeIn();
            $('html,body').css('overflow','hidden');
        })
    }

    function verificarCliqueFechar(){
        
        var el = $('body,.closeBtn');

        el.click(function(){
            $('.modal,.modal-2').fadeOut();
            $('html,body').css('overflow','auto');
        })

        $('form').click(function(e){
            e.stopPropagation();
        })
    }
})