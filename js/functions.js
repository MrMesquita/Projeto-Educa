$(function(){
    var largura = $(window).width();
    if( largura <= 1024){
        $('section.sobre > .container > .parte2 h2 > br').hide();
        $('footer .chamada-footer .whatsapp span br').hide();
    }
})
