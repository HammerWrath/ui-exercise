// JavaScript Document
(function ($) {

$('#sideBarDisplay').on('click', function clickHandler(e) {
	e.preventDefault();
	$('#sideBar').slideToggle();
});

})(jQuery);