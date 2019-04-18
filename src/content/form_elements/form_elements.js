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
$('.toggles_animation_left').on('click', function() {

	if ($('.toggles_animation_left').hasClass('toggles_status_off_position_left')) {
		$('.toggles_status_off_position_left').addClass('toggles_status_on toggles_status_on_position_left');
		$('.toggles_status_on_position_right').addClass('toggles_status_off toggles_status_off_position_right');
		$('.toggles_status_on_position_right').removeClass('toggles_status_on toggles_status_on_position_right');
		$('.toggles_status_off_position_left').removeClass('toggles_status_off toggles_status_off_position_left');
	
	} else if ($('.toggles_animation_left').hasClass('toggles_status_on_position_left')) {
		$('.toggles_status_on_position_left').addClass('toggles_status_off toggles_status_off_position_left');
		$('.toggles_status_off_position_right').addClass('toggles_status_on toggles_status_on_position_right');
		$('.toggles_status_off_position_right').removeClass('toggles_status_off toggles_status_off_position_right');
		$('.toggles_status_on_position_left').removeClass('toggles_status_on toggles_status_on_position_left');
	}

});

$('.toggles_animation_right').on('click', function() {

	if ($('.toggles_animation_right').hasClass('toggles_status_off_position_right')) {
		$('.toggles_status_on_position_left').addClass('toggles_status_off toggles_status_off_position_left');
		$('.toggles_status_off_position_right').addClass('toggles_status_on toggles_status_on_position_right');
		$('.toggles_status_off_position_right').removeClass('toggles_status_off toggles_status_off_position_right');
		$('.toggles_status_on_position_left').removeClass('toggles_status_on toggles_status_on_position_left');		
	
	} else if ($('.toggles_animation_right').hasClass('toggles_status_on_position_right')) {
		$('.toggles_status_off_position_left').addClass('toggles_status_on toggles_status_on_position_left');
		$('.toggles_status_on_position_right').addClass('toggles_status_off toggles_status_off_position_right');
		$('.toggles_status_on_position_right').removeClass('toggles_status_on toggles_status_on_position_right');
		$('.toggles_status_off_position_left').removeClass('toggles_status_off toggles_status_off_position_left');
	}

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