//consider defining an empty global variable, should you need it:
// var App = {};

//click `.itemSubmit` to run following code block
$('.itemSubmit').click(function() {
	//inputVal gets user-input value of `.itemInput`
	var inputVal = $('.itemInput').val()
	console.log(inputVal);
	$('.itemField').append('<div class="todoItem active">' + inputVal + '</div>');
		var item = $('.todoItem');

		item.click(function() {
			console.log('clicked')
			item.addClass('strikethrough')
			item.removeClass('active');
		});


});

$('h2').click(function(){
	console.log('clicked')
	$('h2').addClass('strikethrough');
});

