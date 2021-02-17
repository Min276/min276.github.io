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
