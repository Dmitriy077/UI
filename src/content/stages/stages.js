$(document).ready(function(){

    $(".stages").slider({
        min: 1,
        max: 5,
        value: 3,
        range: "min",
        animate: "fast",
            // create: function( event, ui ) {
            //     val = $( ".stages" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
            //     val = (val + 3);
            //     for (var a = 1; a <= val; a++) {
            //          $('.stages_content_container .stages b:nth-child('+a+')')
            //          .css({"background-color": "#E65635", "color": "white", "border-color": "#E65635"});
            //          console.log('a' + a);
            //      }       
            // },
            slide: function( event, ui ) {
                var vall = (ui.value + 3);
                var max = (opt.max + 3);

                for (var k = 1; k <= vall; k++) {
                     $('.stages_content_container .stages b:nth-child('+k+')')
                     .css({"background-color": "#E65635", "color": "white", "border-color": "#E65635"});
                     // console.log('k' + k);
                 }

                for (var c = max; c > vall; c--) {
                     $('.stages_content_container .stages b:nth-child('+c+')')
                     .css({"background-color": "#E4E4E4", "color": "black", "border-color": "#E4E4E4"});
                     // console.log('c' + c);
                 }
            }
    })
    
     //    slide: function( event, ui ) {
     //        var vall = ui.value;
     //    for (var k = 0; k < vall; k++) {
     //        var vaal = $(".stages_content_container .stages b:eq(k)");
     //        vaal.css({"background-color": "#E65635", "color": "white"});
     //    // console.log (k);
     //    console.log (vall);
     //    }

     

    var opt = $(".stages").data().uiSlider.options,
    min = opt.min,
    raz = opt.max - min;
    for (var i = 0; i <= raz; i++) {
        $(".stages").append($('<b>'+(min++)+'</b>').css('left',(i/raz*100)+'%'));
        $('.stages_content_container .stages b:nth-child('+(i + 2)+')')
                     .css({"background-color": "#E65635", "color": "white", "border-color": "#E65635"});
                     // console.log('a' + i);
    }
    // var vall = (ui.value + 3);
    // for (var k = 1; k <= vall; k++) {
    //      $('.stages_content_container .stages b:nth-child('+k+')')
    //      .css({"background-color": "#E65635", "color": "white"});
    //      console.log(k);
    //  }
});