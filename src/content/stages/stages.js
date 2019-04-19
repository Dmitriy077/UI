$(document).ready(function(){

    $(".stages").slider({
        min: 1,
        max: 5,
        value: 3,
        range: "min",
        animate: "fast",
            slide: function( event, ui ) {
                var vall = (ui.value + 3);
                for (var k = 1; k <= vall; k++) {
                     $('.stages_content_container .stages b:nth-child('+k+')')
                     .css({"background-color": "#E65635", "color": "white"});
                     console.log(k);
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
    }
    // var vall = (ui.value + 3);
    // for (var k = 1; k <= vall; k++) {
    //      $('.stages_content_container .stages b:nth-child('+k+')')
    //      .css({"background-color": "#E65635", "color": "white"});
    //      console.log(k);
    //  }
});