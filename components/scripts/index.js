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
    var sky = $('#sky');

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
                  position:" 7.68 2 10.33",
                  sound:"on: click; src: #click-sound",
                  scale:"0 0 0",
                  animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 2 2 2",
                  animation__move:"property: position; dir: alternate; dur: 1650; easing: easeInSine; loop: true; to: -2.61 2 10.33"
            });
     movingBox.append(movingLight);
     movingLight.attr({
       id:"movingLight",
       light:"color: #9ef6ff; intensity:0.88; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
       position:"-0.59 -0.03 -4.04",
       rotation:"35.58 -178.19 0",
       animation__lightsUp:"property: light.intensity; dir: normal; dur: 2000; easing: easeInSine; loop: false; from: 0; to: 0.88",
       animation__move:"property: position; dir: alternate; dur: 1650; easing: easeInSine; loop: true; to: -3.82 -0.03 -4.04"
   });

       //second box click function
       movingBox.one("click",function() {
       console.log("movingClick");
       scene.append(hoverBox);
       //Add 3rd Box
       hoverBox.attr({ id:"hoverBox",
                       geometry:"primative: box",
                       position:" 6.24 7.50 0.18",
                       sound:"on: click; src: #click-sound",
                       scale:"0 0 0",
                       animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1",
                    });
       hoverBox.append(hoverLight);
       //Add lighting to the 3rd Box
       hoverLight.attr({
         light:"color: #9ef6ff; intensity:0.88; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
         position:"5.4 -0.03 -4.04",
         rotation:"21.77 -177.62 2.86",
         animation__lightsUp:"property: light.intensity; dir: normal; dur: 2000; easing: easeInSine; loop: false; from: 0; to: 0.88",
         animation__move:"property: position; dir: alternate; dur: 1650; easing: easeInSine; loop: true; to: -0.59 -0.03 -4.04"
       });
       //Prompt
       entity.attr({  id:"mustBeAnotherOneSomewhereText",
                      "obj-model":"obj: #anotherOneSomewhere-obj; mtl: #anotherOneSomewhere-mtl",
                      scale:"0.6 0.6 0.6",
                      position:"0.3 2.26 -5.20",
                      rotation:"90 0 0",
                      animation__text:"property: position; dir: normal; dur: 6000; easing: easeInSine; loop: false; to: -2.3 3.08 -5.20"
                  });
                });

      //3rd Box Function ---------------------//
      hoverBox.one("click",function() {
        //celebrate the lights coming on
        entity.attr({  id:"aziz",
                       "obj-model":"obj: #aziz-obj; mtl: #aziz-mtl",
                       scale:"0.6 0.6 0.6",
                       position:"0.3 2.26 -5.20",
                       rotation:"90 0 0",
                       animation__text:"property: position; dir: normal; dur: 6000; easing: easeInSine; loop: false; to: -2.3 3.08 -5.20"});

        //sky animation
        sky.attr({
        animation__top:"property: material.topColor; dir: normal; dur: 8000; easing: easeInSine; loop: false; to: 140 200 250",
        animation__bottom:"property: material.bottomColor; dir: normal; dur: 8000; easing: easeInSine; loop: false; to: 172 233 237"});
        //lights ON!
        scene.append(light);
        light.attr({
        light:"type: ambient; color: #BBB"
      });
        scene.attr({animation__fog:"property: fog.density; dir: normal; dur: 6000; easing: easeInSine; loop: false; to: 0.1"});

        $('#signPost').one("click",function(){
          entity.attr({"obj-model": "obj: #warning-obj; mtl: #warning-mtl",
                           id:"warnText" ,
                           position:"3.72 2.49 -1.55",
                           rotation:" 0 -136.94 -89.95",
                           animation__explode:"property: scale; dir: normal; dur: 200; easing: easeInSine; loop: false; from: 0 0 0; to: 1 1 1"

          })
          setTimeout(function () {
            $('#clown-img').attr({
            visible:"true",
            sound:"autoplay: true; volume: 0.04; loop:false; src: #scream"});
          }, 2000);

          setTimeout(function(){
            $('#clown-img').attr({
            visible:"false"
          });
          },7000)


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
