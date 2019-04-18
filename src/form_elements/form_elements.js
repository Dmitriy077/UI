//form button
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

//toggles
$('.toggles_status_off_position_left').on('click', function() {

	$('.toggles_status_off_position_left').css("display", "none");
	$('.toggles_status_on_position_left').css("display", "inline-block");
	$('.toggles_status_on_position_right').css("display", "none");
	$('.toggles_status_off_position_right').css("display", "inline-block");

});

$('.toggles_status_on_position_right').on('click', function() {

	$('.toggles_status_off_position_left').css("display", "none");
	$('.toggles_status_on_position_left').css("display", "inline-block");
	$('.toggles_status_on_position_right').css("display", "none");
	$('.toggles_status_off_position_right').css("display", "inline-block");

});

$('.toggles_status_on_position_left').on('click', function() {

	$('.toggles_status_off_position_left').css("display", "inline-block");
	$('.toggles_status_on_position_left').css("display", "none");
	$('.toggles_status_on_position_right').css("display", "inline-block");
	$('.toggles_status_off_position_right').css("display", "none");

});

$('.toggles_status_off_position_right').on('click', function() {

	$('.toggles_status_off_position_left').css("display", "inline-block");
	$('.toggles_status_on_position_left').css("display", "none");
	$('.toggles_status_on_position_right').css("display", "inline-block");
	$('.toggles_status_off_position_right').css("display", "none");

});

// tick
$('.tick_status_on_position_left').on('click', function() {

	$('.tick_status_on_position_left').css("display", "none");
	$('.tick_status_off_position_left').css("display", "inline-block");

});

$('.tick_status_off_position_left').on('click', function() {

	$('.tick_status_on_position_left').css("display", "inline-block");
	$('.tick_status_off_position_left').css("display", "none");

});

$('.tick_status_on_position_right').on('click', function() {

	$('.tick_status_on_position_right').css("display", "none");
	$('.tick_status_off_position_right').css("display", "inline-block");

});

$('.tick_status_off_position_right').on('click', function() {

	$('.tick_status_on_position_right').css("display", "inline-block");
	$('.tick_status_off_position_right').css("display", "none");

});