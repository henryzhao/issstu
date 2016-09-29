$(document).ready(function(){
	$('#slider').flicker({
		arrows: true,
        	arrows_constraint: false,
        	auto_flick: true,
        	auto_flick_delay: 6,
        	block_text: true,
        	dot_navigation: true,
        	dot_alignment: 'right',
        	flick_animation: 'jquery-slide',
        	flick_position: 1,
        	inner_width: false,
        	theme: 'light'
		});
        $(window).resize(function() {
                if ($(window).width()<=500) {
                        $('.display').css({'width':'100%','float':'none'});
                 }
                else{
                        $('.display').css({'width':'33.3%','float':'left'})
                }
        });
        $('.display').on('mouseover',function(){
                if($(window).width()>=500){
                        var winwidth=$(window).width();
                        var display=$('.display');
                        var thisclass=$(this).attr('class');
                        if (winwidth>768) {
                                $(this).find('.left,.right').css({'width':'47%'})
                        };
                        $(this).css({'width':'45%','height':'220px'});
                        $(this).find('.hidecontent,.left').show();
                        $('.mid-display').find('.display[class!="'+thisclass+'"]').css({'width':'27.5%'});
                        $('.mid-display').find('.display[class!="'+thisclass+'"]'+' .hidecontent').hide();
                }
        });
        $('.display').on('mouseout',function(){
                if($(window).width()>=500){
                        $('.hidecontent,.display .left').hide();
                        $('.display .right').css('width', '100%');
                        $('.display').css({'width':'33.3%','height':'180px'});
                }
        });
                     
});