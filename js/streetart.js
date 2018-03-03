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


	$("#uploadphoto").change(function () {
		var uploadphoto = $('#uploadphoto').val();
		var backslash = uploadphoto.lastIndexOf("\\") + 1;
		var length = uploadphoto.length;
		var substr = uploadphoto.substring(backslash, length);
		$(".customiseduploadbut").text(substr);
	});


});



