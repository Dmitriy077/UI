// search
$('.i_search_loupe').on('click', function() {

		$('.search_error').toggleClass('search_animation');

});

$('#search').on('keypress', function(e) {
    if(e.which == 13) {

        $('.search_error').toggleClass('search_animation');

	}
});



jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		// var div = $(""); // тут указываем ID элемента
		// if (!div.is(e.target) // если клик был не по нашему блоку
		//     && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.search_error').removeClass('search_animation');	
	});
});


// dropdown
jQuery.fn.twittymenu = function(){

	return this.each(function(i){
	
		var $ul = jQuery(this);
		var $button = jQuery('<div id="twittyButton-' + i + '" class="twittyButton"><b></b>' + this.title + '<i></i></div>').insertBefore($ul);
		var buttonPosition = $button.position();
		var buttonRealHeight = $button.height() + parseInt($button.css('padding-top')) + parseInt($button.css('padding-bottom')) + parseInt($button.css('border-top-width'))*2;
		var drop = $('.dropdown');
		
		$ul.attr('title', '').attr('id', 'twittyMenu-' + i);
		
		if (!$ul.hasClass('twittyMenu'))
		{
			$ul.addClass('twittyMenu');
		}

		drop.click(function(){


			$('i.i_dropdown').css('border-radius', '0 5px 0 0');

			// çàêðûâàåì îòêðûòûå ìåíþ
			jQuery('.twittyButton:not(#twittyButton-' + i + ')').removeClass('clicked');
			jQuery('.twittyMenu:not(#twittyMenu-' + i + ')').removeClass('open');
			
			$ul.css({
				'top': (buttonPosition.top + (buttonRealHeight + 3)) + 'px',
				'left': buttonPosition.left + 'px'
			});
			
			$button.toggleClass('clicked');
			$ul.toggleClass('open');
			
			return false;

		});

		$button.click(function(){

			$('i.i_dropdown').css('border-radius', '0 5px 0 0');
			
			// çàêðûâàåì îòêðûòûå ìåíþ
			jQuery('.twittyButton:not(#twittyButton-' + i + ')').removeClass('clicked');
			jQuery('.twittyMenu:not(#twittyMenu-' + i + ')').removeClass('open');
			
			$ul.css({
				'top': (buttonPosition.top + (buttonRealHeight + 3)) + 'px',
				'left': buttonPosition.left + 'px'
			});
			
			$button.toggleClass('clicked');
			$ul.toggleClass('open');
			
			return false;

		});
		
	});

};

// çàêðûâàåì îòêðûòûå ìåíþ
jQuery(document).click(function(e){

	if (jQuery(e.target).parents('.twittyMenu').size() == 0)
	{
		jQuery('.twittyButton').removeClass('clicked');
		jQuery('.twittyMenu').removeClass('open');
	}

});

jQuery(function(){

	$('.twittyMenu').twittymenu();

});