var current_page = 0;
var pages = ['#me', '#projects', '#skills'];

$(document).ready(function() {
	current_page = 0;
	$('html, body').animate({scrollTop: $(pages[current_page]).offset().top}, 600);
});



var goNext = function() {
	current_page = (current_page + 1) % pages.length;
	console.log(current_page);
	$('html, body').animate({scrollTop: $(pages[current_page]).offset().top}, 600)
	if(current_page == pages.length-1) {
		console.log('up');
		$('.scroll').removeClass('down');
		$('.scroll').addClass('up');
	} else {
		console.log('down');
		$('.scroll').removeClass('up');
		$('.scroll').addClass('down');
	}
}