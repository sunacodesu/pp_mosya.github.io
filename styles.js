

jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['https://github.com/sunacodesu/sunaco_portfolio.github.io/blob/master/IMG_0424.JPG?raw=true','https://github.com/sunacodesu/sunaco_portfolio.github.io/blob/master/IMG_0423.JPG?raw=true','https://github.com/sunacodesu/sunaco_portfolio.github.io/blob/master/IMG_0425.JPG?raw=true',] // 切り替える背景画像を指定
    });


    $('.back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, "swing");
		return false;
	});

	$(".dropDown").hide();
	$(".btn-more").click(function(){
	$(".trigger").prev().slideToggle();
	$(this).toggleClass("close");
	});

});
