
if($(".header_menu").length > 0){
	$(window).scroll(function () {
		var e = $(window).scrollTop();
		if (e > 120) {
			$(".header_menu").css({'position':'fixed','top':'0','left':'0','right':'0','background':'#ffffffe6'})
		} else {
			$(".header_menu").css({'position':'unset'})
		}
	});
}

$(".btn-fa-bars").click(function (e) {
    $(".mobile_header").css('left', '0');
    e.stopPropagation();
});
$(".btn-fa-close").click(function (e) {
    $(".mobile_header").css('left', '-100%');
    e.stopPropagation();
});

$(".btn-fa-search").click(function (e) {
    $(".mobile_search").css('right', '0');
    e.stopPropagation();
});
$(".mobile_search").click(function (e) {
    $(".mobile_search").css('right', '0');
    e.stopPropagation();
});


$(document).click(function () {
    $(".mobile_header").css('left', '-100%');
    $(".mobile_search").css('right', '-100%');
});


// $.ajax({
//         method: 'GET',
//         url: 'http://127.0.0.1:8001/api/blog/posts',
//         // data: {
//         //     k : value
//         // },
//         // beforeSend: function(){
//         //     $(".form-control").stop().addClass('loading');
//         // },
//         success: function (response) {
// 						console.log(response)
//         }
//     });
