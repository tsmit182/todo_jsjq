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
			if ($(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).addClass('strikethrough');

			// } else if ($(this).hasClass('strikethrough')){
			// 	console.log('strikethrough click!');
			// 	$(this).removeClass('strikethrough');
			// 	$(this).addClass('active');
				
			// } else
			} else {
				console.log('hello')
				$(this).removeClass('strikethrough');
								$(this).addClass('active');
			}
		});


});

$('h2').click(function(){
	console.log('clicked')
	$('h2').addClass('strikethrough');
});

