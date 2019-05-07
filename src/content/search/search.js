// search
$('.i_search_loupe').on('click', function() {

		var search = $('.search').val();
		if (search == '') {
			$('.search_error').toggleClass('search_animation');
			$('.search_loupe_error').toggleClass('search_animation');
		}

});

$('.search').on('keypress', function(e) {
    if(e.which == 13) {

        var search = $('.search').val();
		if (search == '') {
			$('.search_error').toggleClass('search_animation');
			$('.search_loupe_error').toggleClass('search_animation');
		}

	}
});



jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		// var div = $(""); // тут указываем ID элемента
		// if (!div.is(e.target) // если клик был не по нашему блоку
		//     && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.search_error').removeClass('search_animation');	
			$('.search_loupe_error').removeClass('search_animation');	
	});
});



$(document).ready(function(){
	$(".i_search_loupe").click(function(){
		var term = "";
		var n = "0";
		$('body').removeHighlight();
		$("p.results").hide().empty();
		term = $('#term').val();
		console.log(term);
		if($('#term').val() == ""){
		// $("p.results").fadeIn().append("Enter search query in field above");
		return false;
		}else{
		$('.container').highlight( term );
		n = $("span.highlight").length;
		if(n == 0){
		$("p.results").fadeIn().append("Not found");
		}else{
		$("p.results").fadeIn().append('Found: '+n+' matches.');
		}
		return false;
		}
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