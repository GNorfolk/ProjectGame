$(function() {
	
	var instrButton = $('#instructions button')
	instrButton.on('click', function(event) {
		console.log('button working');
		$(this).closest('#instructions').addClass('mainHidden');
		$(this).closest('#mainDiv').children('#unitSelect').removeClass('mainHidden');
	});

});