$(document).ready(function(){
	$('#add_more').click(function(){
		var currentCount = $('input[type="file"]').length;
		var nextCount = currentCount+1;
		$('#file_upload').prepend('<p><input type="file" name="file_'+nextCount+'"/></p>');
	});
});