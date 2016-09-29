$(window).ready(function(e) {
 	inforresize();   
});

$(window).resize(function(e) {
    inforresize();
});
var inforresize=function()
{
	if($('.infor_detail').width()/2<$('.infor_basic').height())
	{
		$('.infor_basic').css('width','100%');
		$('.infor_avator').css('width','100%');
		$('.infor_avator img').height('100%');
	}
	else
	{
		$('.infor_basic').css('width','50%');
		$('.infor_avator').css('width','50%');
		$('.infor_avator img').height($('.infor_basic').height());
	}
}