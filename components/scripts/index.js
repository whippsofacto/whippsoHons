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
    /*
    console.log(this.el.sceneEl);  // Reference to the scene element.
    var testBox = this.el.sceneEl.querySelector('#testBox');
    var myBox = this.el.sceneEl.querySelector('#myBox');
    var myBox1 = this.el.sceneEl.querySelector('#myBox1');
    var myBox2 = this.el.sceneEl.querySelector('#myBox2');


    console.log (testBox);
    testBox.onclick = function(){
      myBox.setAttribute('material', 'color', 'orange');
      myBox.setAttribute('class', 'test');
      myBox1.setAttribute('material', 'color', 'green');
      myBox2.setAttribute('material', 'color', 'red');
    }
    */
    $('#testBox').click(function() {
    if ($('#myBox').hasClass('test')) {
        $('#myBox').attr('scale',"0 0 0");
        $('#myBox1').attr('scale',"1.5 1.5 1.5");
        $('#myBox2').attr({position:"-0.91 0.5 -14.5",
                           scale: "3 3 3",
                           geometry: "primitive: cylinder"});
        $('#myBox').removeClass('test');
    } else {
      ($('#myBox').attr('scale',"1 1 1"));
      ($('#myBox').addClass('test'));
      $('#myBox1').attr('scale',"1 1 1");
      $('#myBox2').attr('position',"-4.0 1.26 -4.7");
    }
});







  }
});
