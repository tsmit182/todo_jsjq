

//SUBMITTING TODO ITEMS
//create a function to submit the user's input & post it in the `.itemField` div
var submitFun = (function() {
	//inputVal gets user-input value of `.itemInput`
	var inputVal = $('.itemInput').val()
	//only active if input has content
	if (inputVal.length > 0){
		//value is appended to the `.itemField` div
		$('.itemField').append('<div class="todoCont"><div class="todoItem active">' + inputVal + '</div><div class="remItemCont"><div class="remItem">x</div></div></div>');
	  //reset the `.itemInput` field
		$('.itemInput').val('');
	}
});

//call submitFun when `itemSubmit` clicked
$('.itemSubmit').click(submitFun);
//call submitFun when return key pressed while text cursor is active within `.itemInput`
$('.itemInput').keypress(function() {
	if (event.which == 13) submitFun();
});


//STRIKING ITEMS ON LIST
//targets divs with the classes of `todoItem` and `active` on click
$('.itemField').on('click', '.todoItem.active', function() {
	//removes `active` class and adds `strikethrough` class (adds line-through in css)
  $(this).removeClass('active').addClass('strikethrough');
});
//targets divs with the classes of `todoItem` and `strikethrough` on click
$('.itemField').on('click', '.todoItem.strikethrough', function() {
	//removes `strikethough` class and adds `active` class (removes line-through if present)
	$(this).removeClass('strikethrough').addClass('active');
});


//REMOVING ITEMS FROM LIST
//when `.remItem` clicked, removes corresponding todoItem
$('.itemField').on('click', '.remItem', function(){
	$(this).parent().parent().remove();
});