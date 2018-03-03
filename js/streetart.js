// * Author: Lisa Bergin

// * Assignment: Minor Project – Web Application Build

// * Student ID: STU-00001445

// * Date: 2018/03/03


// enables bootstrap tooltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){

// hover on username to affect both profile pic and username
	$('.headerright').mouseover(function () {
		$('.username').css('text-decoration', 'underline');
	})
	.mouseout(function () {
		$('.username').css('text-decoration', 'none');
	});

// changes photo upload section to say name of file once file is added
	$("#uploadphoto").change(function () {
		var uploadphoto = $('#uploadphoto').val();
		var backslash = uploadphoto.lastIndexOf("\\") + 1;
		var length = uploadphoto.length;
		var substr = uploadphoto.substring(backslash, length);
		$(".customiseduploadbut").text(substr);
	});


});



