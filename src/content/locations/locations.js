// $(document).ready(function(){
	
// 	function initMap() {
// 		var element = document.getElementById('map');
// 		var options = {
// 			zoom: 17,
// 			center: {lat:37.79119431231414, lng: 122.4151033}
// 		};

// 		var myMap = new google.maps.Map(element, options);
// 	}37.7910917,-122.4172697,17
	
// });

ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [37.7910, -122.4172],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });

        myMap.controls
        	.remove('geolocationControl')
        	.remove('searchControl')
        	.remove('trafficControl')
        	.remove('typeSelector')
        	.remove('fullscreenControl')
        	.remove('zoomControl')
        	.remove('rulerControl')
        	.remove('control.Button');

        myMap.behaviors.disable([
			// 'drag',
			'scrollZoom'
        	]);

        var myPlacemark = new ymaps.Placemark([37.7910, -122.4172], {}, {
    		iconLayout: 'default#image',
		    iconImageHref: './img/pin.png',
		    iconImageSize: [105, 105],
		    iconImageOffset: [-37, -38]
        });
		myMap.geoObjects.add(myPlacemark);
    }