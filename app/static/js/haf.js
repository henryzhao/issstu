$('.rpcode img').hover(function(){
	$('.rpcode i').animate({opacity:"100"},300)
},function(){
	$('.rpcode i').animate({opacity:"0"},300)
});
$(window).ready(function(e) {
 	setFooter ();
});
$(window).resize(function(){
	setFooter ();
});
function setFooter () {
    var windowheight = $(window).height();
    var documentheight = $('html').height();
    if(documentheight>(windowheight+1)){
        $('.footer').css('position', 'static');
        return 0;
    };
    if (documentheight<=(windowheight+1)) {
        $('.footer').css('position', 'fixed');
        return 0;
    };
};


