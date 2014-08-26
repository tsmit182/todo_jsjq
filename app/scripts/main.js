//consider defining an empty global variable, should you need it:
// var App = {};

//click `.itemSubmit` to run following code block
$('.itemSubmit').click(function() {
	//inputVal gets user-input value of `.itemInput`
	var inputVal = $('.itemInput').val()
	console.log(inputVal);
	$('.itemField').append('<div class="todoCont"><div class="todoItem">' + inputVal + '</div></div>');
		


	$('.todoItem').click(function() {
		$(this).toggleClass('strikethrough');
		$(this).remove();
	});

// var item = $('.todoItem');
		// item.click(function() {
		// 	if ($(item).hasClass('active')){
		// 		$(this).removeClass('active');
		// 		$(this).addClass('strikethrough');

		// 	} else if ($(this).hasClass('strikethrough')){
		// 		console.log('strikethrough click!');
		// 		$(this).removeClass('strikethrough');
		// 		$(this).addClass('active');
				
		// 	// } else
		// 	} else {
		// 		console.log('hello')
		// 		$(this).removeClass('strikethrough');
		// 		$(this).addClass('active');
		// 	}
		// });



		// item.on('click', function(e) {
		// 	// $(this).toggleClass('active strikethrough');
		// 	$(this).setAttribute('todoItem', 'strikethrough');
		// });



	// $('.active').click(function(){
	// 	console.log('active targeted');
	// })
	// $('.strikethrough').click(function(){
	// 	console.log(this+'targeted');
	// })





		// $('.todoItem.active').click(function(){
		// 	console.log('active targeted');
		// 	$(this).addClass('strikethrough').removeClass('active');
		// 	$('.todoItem.strikethrough').click(function(){
		// 	console.log('strikethrough targeted')
		// 	$(this).addClass('active').removeClass('strikethrough');
		// });});


		// $('.todoItem').click(function(){
		// 	if ($(this).hasClass('active')){
		// 		$(this).addClass('strikethrough');
		// 	} else if ($(this).hasClass('strikethrough')) {
		// 		$(this).removeClass('strikethrough');
		// 	}
		// });


		

		//
	

});








$('h2').click(function(){
	console.log('clicked')
	$('h2').addClass('strikethrough');
});

