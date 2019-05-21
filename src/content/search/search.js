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
		} else {
			var term = "";
		var n = "0";
		$('body').removeHighlight();
		$("div.results").hide().empty();
		term = $('#term').val();
		if($('#term').val() == ""){
		// $("p.results").fadeIn().append("Enter search query in field above");
		return false;
		}else{
		$('.container').highlight( term );
		n = $("span.highlight").length;
		if(n == 0){
		$("div.results").fadeIn().append("Not found");
		}else{
		$("div.results").fadeIn().append('Found: '+n+' matches.');
		}
		return false;
		}
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
			$('div.results').empty();	
	});
});




	$(".i_search_loupe").click(function(){
		var term = "";
		var n = "0";
		$('body').removeHighlight();
		$("div.results").hide().empty();
		term = $('#term').val();
		if($('#term').val() == ""){
		// $("p.results").fadeIn().append("Enter search query in field above");
		return false;
		}else{
		$('.container').highlight( term );
		n = $("span.highlight").length;
		if(n == 0){
		$("div.results").fadeIn().append("Not found");
		}else{
		$("div.results").fadeIn().append('Found: '+n+' matches.');
		}
		return false;
		}
	});      



// dropdown


$(function() {

	$('select, ul').dropdown({
		toggleText: 'Choose An Option',
		// followLinks: false
	});
});