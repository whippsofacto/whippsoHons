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

//----------- Test components -----------//
console.log("hello world");
// log component --for testing
/*AFRAME.registerComponent('log', {
  schema: {type: 'string'},
	init: function () {
    var stringToLog = this.data;
    console.log(stringToLog);
		var title = $( "#testBox" )
		.attr({
			color:"blue",
			position: "0 0 -9"
		})
    console.log(title)
  }
});*/
