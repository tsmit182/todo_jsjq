//consider defining an empty global variable, should you need it:
// var App = {};

// click `.itemSubmit` to run following code block
$('.itemSubmit').click(function() {
	//inputVal gets user-input value of `.itemInput`
	var inputVal = $('.itemInput').val()
	//value is appended to the `.itemField` div
	$('.itemField').append('<div class="todoCont"><div class="todoItem active">' + inputVal + '</div><div class="remItemCont"><div class="remItem">x</div></div></div>');
	$('.itemInput').val('');
});





// $('.itemSubmit').on('click keydown', function (e){
//     if (e.type == "click" || e.keyCode == 13) {
//         alert("click or esc");
//     }	
//   });



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




//when `.remItem` clicked, removes corresponding todoItem
$('.itemField').on('click', '.remItem', function(){
	$(this).parent().parent().remove();
});