//require jquery
var $ = require ('jquery');
//require aframe
var aframe = require ('aframe');
//require the extras
var extras = require('aframe-extras');
//gradient-sky
var gradientSky = require('aframe-gradient-sky');
//event set-image
var eventSet = require('aframe-event-set-component');


console.log("hello world");
//register the use of the extras
extras.registerAll();

AFRAME.registerComponent('log', {
  schema: {type: 'string'},
	init: function () {
    var stringToLog = this.data;
    console.log(stringToLog);

		var title = $( "#testBox" )
		.attr({
			color:"blue",
			position: "0 0 -9"
		});
  }
});
