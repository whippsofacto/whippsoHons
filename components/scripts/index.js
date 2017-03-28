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
    var box = $(document.createElement('a-entity'));
    var movingBox = $(document.createElement('a-entity'));
    var movingLight = $(document.createElement('a-entity'));
    var hoverBox = $(document.createElement('a-entity'));
    var hoverLight = $(document.createElement('a-entity'));
    var light = $(document.createElement('a-entity'));
    var nestedEntity = $(document.createElement('a-entity'));

    //var yesBtn = $(document.createElement('a-plane'));
    //var noBtn = $(document.createElement('a-plane'));


    //--- Intro ----------------------------------------//



    setTimeout(function () {
        scene.append(entity);
        entity.attr({  id:"intro1",
                       "obj-model":"obj: #intro_1-obj; mtl: #intro_1-mtl",
                       scale:"0.6 0.6 0.6",
                       position:"-2.3 2.26 -5.20",
                       rotation:"90 0 0",
                       animation__text:"property: position; dir: normal; dur: 6000; easing: easeInSine; loop: false; to: -2.3 3.08 -5.20"});
    }, 200);

    setTimeout(function(){
      scene.append(entity);
      entity.attr({  id:"lightsOnIntro",
                     "obj-model":"obj: #lightsOnText-obj; mtl: #lightsOnText-mtl",
                     scale:"0.6 0.6 0.6",
                     position:"0.2 2.26 -3.20",
                     rotation:"90 0 0"});
   },9000);

   $('#lightBox').one("click",function() {
     console.log("ello box");
     scene.append(movingBox);
     movingBox.attr({
                  id:"movingBox",
                  geometry:"primative: box",
                  position:" 3.91 2 10.33",
                  scale:"0 0 0",
                  animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1.5 1.5 1.5"
                  //animation__move:"property: position; dir: alternate; dur: 1650; easing: easeInSine; loop: true; to: -3.49 2 10.33"
            });
     movingBox.append(movingLight);
     movingLight.attr({
       light:"color: #9ef6ff; intensity:0.88; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
       position:"-0.59 -0.03 -4.04",
       rotation:"35.58 -178.19 0",
       animation__lightsUp:"property: light.intensity; dir: normal; dur: 2000; easing: easeInSine; loop: false; from: 0; to: 0.88",
       animation__move:"property: position; dir: alternate; dur: 1650; easing: easeInSine; loop: true; to: -3.82 -0.03 -4.04"
   });

     movingBox.one("click",function() {
       console.log("movingClick");
       scene.append(hoverBox);
       hoverBox.attr({ id:"hoverBox",
                       geometry:"primative: box",
                       position:" 6.24 7.50 0.18",
                       scale:"0 0 0",
                       animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1",
                       animation__move:"property: position; dir: alternate; dur: 1650; easing: easeInSine; loop: true; to: -4.36 7.5 0.18"
                    });
       hoverBox.append(hoverLight);
       hoverLight.attr({
         light:"color: #9ef6ff; intensity:0.88; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
         position:"5.4 -0.03 -4.04",
         rotation:"21.77 -177.62 2.86",
         animation__lightsUp:"property: light.intensity; dir: normal; dur: 2000; easing: easeInSine; loop: false; from: 0; to: 0.88",
         animation__move:"property: position; dir: alternate; dur: 1650; easing: easeInSine; loop: true; to: -0.59 -0.03 -4.04"
       });
     });


 });














    /*
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
      entity.attr({    "obj-model": "obj: #speech-obj; mtl: #speech-mtl",
                       position:"-1.36 2.49 -2.37",
                       scale:"0 0 0",
                       rotation:" 90 25 0",
                       animation__conescale:"property: scale; dir: normal; dur: 200; easing: easeInSine; loop: false; from: 0 0 0; to: 0.4 0.4 0.4"});
     scene.append(yesBtn);
     yesBtn.attr({
         id: "yesBtn",
         scale: "0.5 0.5 0.5",
         rotation:" 0 25 0",
         position:"-0.52 1.66 -2.78",
         material: "color: #1BEDC3",
         animation__conescale:"property: scale; dir: normal; dur: 200; easing: easeInSine; loop: false; from: 0 0 0; to: 0.4 0.4 0.4"});
     yesBtn.one("click",function(){
          console.log("yes!");
          yesBtn.attr({animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 0 0 0",
                       animation__rotate:"property: rotation; dir: normal; dur: 300; easing: easeInOutSine; loop:true; from: 0 0 0; to: 0 0 1080"
              });
          setTimeout(function(){
                      $(yesBtn).remove();
                      alert("removed");
                    },2200);
          });
     scene.append(noBtn);
     noBtn.attr({
         id: "noBtn",
         scale: "0.5 0.5 0.5",
         rotation:" 0 25 0",
         position:"-1.91 1.66 -2.10",
         animation__conescale:"property: scale; dir: normal; dur: 200; easing: easeInSine; loop: false; from: 0 0 0; to: 0.4 0.4 0.4"});
     noBtn.one("click",function(){
          console.log("no!");
          setTimeout(function(){
                      $(noBtn).remove();
                      alert("removed");
                    },300);
        });
    });

*/

















  }
});
