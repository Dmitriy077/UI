$(document).ready(function(){
		    $( "#slider_left" ).slider({
		 		range: false,
				value : 40,//Значение, которое будет выставлено слайдеру при загрузке
				min : 0,//Минимально возможное значение на ползунке
				max : 100,//Максимально возможное значение на ползунке
				step : 1,//Шаг, с которым будет двигаться ползунок
				create: function( event, ui ) {
					val = $( "#slider_left" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
					$( "#slider_left_content" ).html( val );//Заполняем этим значением элемент с id contentSlider
					$( "#slider_left_content" ).css('left', val + '%');
				},
		    	slide: function( event, ui ) {
					$( "#slider_left_content" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
					$( "#slider_left_content" ).css('left', ui.value + '%');
	 
	            }
	        });

	        $( "#slider_right" ).slider({
		 		range: 'min',
				value : 69,//Значение, которое будет выставлено слайдеру при загрузке
				min : 0,//Минимально возможное значение на ползунке
				max : 100,//Максимально возможное значение на ползунке
				step : 1,//Шаг, с которым будет двигаться ползунок
				create: function( event, ui ) {
					val = $( "#slider_right" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
					$( "#slider_right_content" ).html( val );//Заполняем этим значением элемент с id contentSlider
				},
		    	slide: function( event, ui ) {
					$( "#slider_right_content" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
	 
	            }
	        });
});



// $(document).ready(function(){

// 	jQuery("#slider").slider({
// 		min: 0,
// 		max: 1000,
// 		values: [0,1000],
// 		range: true,
// 		stop: function(event, ui) {
// 			jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
// 			jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
// 			},
// 			slide: function(event, ui){
// 			jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
// 			jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
// 			}
// 	});

// 	jQuery("input#minCost").change(function(){
// 		var value1=jQuery("input#minCost").val();
// 		var value2=jQuery("input#maxCost").val();

// 			if(parseInt(value1) > parseInt(value2)){
// 			value1 = value2;
// 			jQuery("input#minCost").val(value1);
// 			}
// 		jQuery("#slider").slider("values",0,value1);  
// 	});

	
// 	jQuery("input#maxCost").change(function(){
// 		var value1=jQuery("input#minCost").val();
// 		var value2=jQuery("input#maxCost").val();
		
// 		if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}

// 		if(parseInt(value1) > parseInt(value2)){
// 			value2 = value1;
// 		jQuery("input#maxCost").val(value2);
// 		}
// 	jQuery("#slider").slider("values",1,value2);
// 	});

// });

