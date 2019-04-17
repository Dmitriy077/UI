$('.form_elements_button').on('click', function() {

	var name = $('.message_form_name').val();
	var email = $('.message_form_email').val();

	if (name != '') {
		$('.message_form_error_name').css("display", "none");
		$('.message_form_thanks_name').css("display", "block");
	} else {
		$('.message_form_error_name').css("display", "block");
		$('.message_form_thanks_name').css("display", "none");
	};

	if (email != '') {
		$('.message_form_error_email').css("display", "none");
		$('.message_form_thanks_email').css("display", "block");
	} else {
		$('.message_form_error_email').css("display", "block");
		$('.message_form_thanks_email').css("display", "none");
	}

	});