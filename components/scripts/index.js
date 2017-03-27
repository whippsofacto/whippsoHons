//require jquery
var $ = require ('jquery');
//require aframe
var aframe = require ('aframe');
//require the extras
var extras = require('aframe-extras');
//gradient-sky
var gradientSky = require('aframe-gradient-sky');
//event-set
var eventSet = require('aframe-event-set-component');
//aframe animation
var animation = require('aframe-animation-component');
//register the use of the extras
extras.registerAll();


//*------ Components -----*//
AFRAME.registerComponent('foo', {
  init: function () {

    //Variables ---------------------------- //
    var scene = $('a-scene');
    var entity = $(document.createElement('a-entity'));

    //--- Animations Testing ---//
    $('#testBox').click(function() {
    if ($('#myBox').hasClass('test')) {
        $('#myBox').attr({scale:"0 0 0",
                          visible:"false"});
        $('#myBox1').attr('scale',"1.5 1.5 1.5");
        $('#myBox2').attr({position:"-0.91 0.5 -14.5",
                           scale: "3 3 3",
                           geometry: "primitive: cylinder",
                           animation__thing:"property: scale; dir: normal; dur: 5000; easing: easeInSine; loop: false; to: 4 4 4"});
        $('#myBox').removeClass('test');
        $('#myBox2').removeAttr('animation__scale');
    } else {
      $('#myBox').attr('scale',"1 1 1");
      $('#myBox').addClass('test');
      $('#myBox1').attr('scale',"1 1 1");
      $('#myBox2').attr( {position:"-4.0 1.26 -4.7",
                          geometry:"primitive: box",
                          animation__scale:"property: scale; dir: normal; dur: 5000; easing: easeInSine; loop: false; to: 0 0 0"});
      $('#myBox2').removeAttr('animation__thing');
       }
    });

    //--Adding Elements On Click --//
    //.one means that the event can only fire once
    $('#myBox').one("click", function() {
      console.log("clicked");
      scene.append(entity);
      entity.attr({      id: "cone",
                         position:"-0.91 2.5 -14.5",
                         geometry: "primitive: cone",
                         animation__conescale:"property: scale; dir: normal; dur: 5000; easing: easeInSine; loop: false; from: 0 0 0; to: 1 1 1"});
    });











  }
});
