$(window).scroll(function() {
if ($(document).scrollTop() >351) {
$('nav').addClass('navbar-fixed-top');
} else {
$('nav').removeClass('navbar-fixed-top');
}
});
$(window).scroll(function() {
if ($(document).scrollTop() >351) {
$('nav').addClass('navbar-deco');
} else {
$('nav').removeClass('navbar-deco');
}
});
/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});
