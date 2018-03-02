$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){

	$('.headerright').mouseover(function () {
		$('.username').css('text-decoration', 'underline');
	})
	.mouseout(function () {
		$('.username').css('text-decoration', 'none');
	});


});