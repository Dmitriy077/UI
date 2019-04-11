require('webpack-icons-installer/font-awesome');

import "./style.scss"
import "./fonts/fonts.scss"
import "./standart_buttons/standart_buttons.scss"
import "./standart_buttons/ripple.scss"
import "../node_modules/jquery/dist/jquery.min.js"
import "./standart_buttons/buttons.scss"
import "./arrow_buttons/arrow_buttons.scss"
import "./percentages/percentages.scss"
import "./js plugin/jquery.easypiechart.js"



$(".button").click(function (e) {

  // Remove any old one
  $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");


 // Make it round!
  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight; 
  }

  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;


  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});

$(function() {
        $('.chart').easyPieChart({
            size: 160,
            barColor: 'red',
            scaleColor: false,
            lineWidth: 8,
            trackColor: 'white',
            lineCap: 'circle',
            animate: 1000, //animation duration
        });
    });