//require jquery
var $ = require ('jquery');
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


    var yesBtn = $(document.createElement('a-plane'));
    var noBtn = $(document.createElement('a-plane'));


//--- Opening State ----------------------------------------//
//-- Show signs to inform user of how to interact with the environment --//
//--If a mobile sized screen show the VR Info
//-------Small Screen -------//
if (screen.width < 750){
  scene.append($(document.createElement('a-image'))
      .attr({
      id:"VRInfo",
      src: "#clickInfoVR",
      position:"0 2.6 -3.6",
      rotation:"0 0 0",
      scale:" 0 0 0",
      animation__scale:"property: scale; dir: normal; dur: 1000; easing: easeInSine; loop: false; to: 3 2 2"
     })
   );
  $("#VRInfo").append($(document.createElement("a-image"))
    .attr({
    id:"startBox",
    src: "#startBtn",
    scale:"0.4 0.4 0.4",
    position:"0.37 -0.64 0.11",
    rotation:"0 -15 0"
    })
  );
  $("#VRInfo").append($(document.createElement("a-entity"))
    .attr({
    id:"VrInfoLightR",
    light:"color: #fff; angle 39.5 intensity:0.4; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
    scale:"0 0 0",
    position:"10 -1.3 6.73",
    rotation:"19.5 23.5 -0.57",
    animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1"
    })
  );
  $("#VRInfo").append($(document.createElement("a-entity"))
    .attr({
    id:"VrInfoLightL",
    light:"color: #fff; angle 39.5 intensity:0.4; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
    scale:"0 0 0",
    position:"-14 -1.3 2.7",
    rotation:"25.78 -31.51 1.72",
    animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1"
    })
  );
//-------Large Screen -------//
//--Else, show the desktop info --//
} else {
scene.append($(document.createElement('a-image'))
    .attr({
    id:"desktopInfo",
    src: "#clickInfo",
    position:"0 2.6 -3.6",
    rotation:"0 0 0",
    scale:" 0 0 0",
    animation__scale:"property: scale; dir: normal; dur: 1000; easing: easeInSine; loop: false; to: 3 2 2"
   })
 );
$("#desktopInfo").append($(document.createElement("a-image"))
  .attr({
  id:"startBox",
  src: "#startBtn",
  scale:"0.4 0.4 0.4",
  position:"0.37 -0.64 0.11",
  rotation:"0 -15 0",
  })
);
$("#desktopInfo").append($(document.createElement("a-entity"))
    .attr({
    id:"VRSignDesktopLightR",
    light:"color: #fff; angle 39.5 intensity:0.4; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
    scale:"0 0 0",
    position:"10.00 -1.3 6.73",
    rotation:"19.5 23.5 -0.57",
    animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1"
    })
  );
$("#desktopInfo").append($(document.createElement("a-entity"))
    .attr({
    id:"VRSignDesktopLightL",
    light:"color: #fff; angle 39.5 intensity:0.4; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
    scale:"0 0 0",
    position:"-14 -1.3 2.7",
    rotation:"25.78 -31.51 5.72",
    animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1"
    })
  );
}
//----- Once the start button is clicked, remove the opening signs and start the experience -------------------
//-------Small Screen -------//
if (screen.width < 750){
  $('#startBox').one("click",function(){
    $("#startBox").attr({
    sound:"autoplay: on; loop: false; src: #click-sound; volume: 10; poolSize: 2",
    animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"

    })
    $("#VRInfo").attr({
     animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0",
     animation__scaleOut:"property: position; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 2.0 -4"
    });

    setTimeout(function(){
   //-- Remove the startUp elements and add the question block
    $("#VRInfo").remove();
    scene.append($(document.createElement("a-entity"))
                .attr({ id:"questionBlock",
                       "obj-model":"obj: #questionBlock-obj; mtl: #questionBlock-mtl",
                        position:"-4.83 1.80 -0.04",
                        scale:"1.9 1.9 1.9",
                        rotation:"0 90 0"})
            );
        $("#questionBlock").append($(document.createElement("a-entity"))
          .attr({
            id:"questionBlockLight",
            light:"color: #ffd913; angle:13.24; intensity:0.3; groundColor: #fff; decay: -100; penumbra: 1; type: spot",
            position:"0 -0.5 5",
            rotation:"6.88 -4 -0.5"
           })
       );
       //add Circle after 4 seconds
       var timeoutVar = setTimeout(function(){
       $("#questionBlock").append($(document.createElement("a-ring"))
         .attr({
           id: "circle",
           "radius-inner": "1.4",
           "radius-outer": "1.5",
           position:"-0.01 0.39 -1.25",
           material:"color: yellow",
           sound:"autoplay: on; loop: true; src: #block-alert; volume: 0.8; poolSize: 2",
           "animation__scale-inner-radius":"property: scale; dir: normal; dur: 1000; easing: easeInSine; loop:true; to: 0.35 0.35 0.35",
           //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
         })
       );
     },5000);//end of circle timeout
     //--- Question Block Click Event -------------------------//
     $("#questionBlock").click(function(){
       // remove the timer for the semi-circle if clicked before ring element added
       clearTimeout(timeoutVar);
       console.log("clicked");
       $("#circle").remove();
       //add animation to questionBlock
       $("#questionBlock")
         .attr({
           //sound:"autoplay: on; loop: false; src: #box-sound; volume: 0.8; poolSize: 2",
           "animation__bump":"property: scale; dir: alternate; dur: 100; easing: easeInSine; loop: false; to: 1.2 1 1.2"
           })
       //add sound to hidden entity
       $("#questionBlock").append($(document.createElement("a-entity"))
         .attr({
           id: "questionBlockSound",
           sound:"autoplay: on; loop: false; src: #box-sound; volume: 3; poolSize: 2",
           //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
         })
       );
       //add the textBox
       $("#questionBlock").append($(document.createElement("a-image"))
         .attr({
           id:"startInfoText",
           src:"#startInfo",
           scale: "2.5 1.5 1.5",
           position:"0 0.38 0.28",
           rotation:"0 0 0"
         })
       );
       //timeout and remove the first question block and replace with the first objective.
       setTimeout(function(){
         $("#startInfoText").remove();
         $("#questionBlock").append($(document.createElement("a-image"))
           .attr({
             id:"getGoingText",
             src:"#getGoing",
             scale: "2.5 1.5 1.5",
             position:"0 0.38 0.28",
             rotation:"0 0 0"
           })
         );
       }, 4000);
       //remove the second questionBlock
       setTimeout(function(){
        $("#getGoingText").remove();
        $("#startInfoText").remove();
       },8000);
       // remove the animation attribute and the questionBlock sound when clicked
       setTimeout( function () {
       $('#questionBlockSound').remove();
       $("#questionBlock").removeAttr("animation__bump");
       //alert("removed");
     },500);// end of add sound to hidden entity


     });
   },700);//end of remove startup elements and add question block
  });
//-------Large Screen -------//
} else {
 $('#startBox').one("click",function(){
   $("#startBox").attr({
   sound:"autoplay: on; loop: false; src: #click-sound; volume: 10; poolSize: 2",
   animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"

   })
   $("#desktopInfo").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0",
    animation__scaleOut:"property: position; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 2.0 -4"
   });

   setTimeout(function(){
  //-- Remove the startUp elements and add the question block
   $("#desktopInfo").remove();
   scene.append($(document.createElement("a-entity"))
               .attr({ id:"questionBlock",
                      "obj-model":"obj: #questionBlock-obj; mtl: #questionBlock-mtl",
                       position:"-4.83 1.80 -0.04",
                       scale:"1.9 1.9 1.9",
                       rotation:"0 90 0"})
           );
       $("#questionBlock").append($(document.createElement("a-entity"))
         .attr({
           id:"questionBlockLight",
           light:"color: #ffd913; angle:13.24; intensity:0.3; groundColor: #fff; decay: -100; penumbra: 1; type: spot",
           position:"0 -0.5 5",
           rotation:"6.88 -4 -0.5"
          })
      );
      //add Circle after 4 seconds
      var timeoutVar = setTimeout(function(){
      $("#questionBlock").append($(document.createElement("a-ring"))
        .attr({
          id: "circle",
          "radius-inner": "1.4",
          "radius-outer": "1.5",
          position:"-0.01 0.39 -1.25",
          material:"color: yellow",
          sound:"autoplay: on; loop: true; src: #block-alert; volume: 0.8; poolSize: 2",
          "animation__scale-inner-radius":"property: scale; dir: normal; dur: 1000; easing: easeInSine; loop:true; to: 0.35 0.35 0.35",
          //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
        })
      );
    },5000);//end of circle timeout
    //--- Question Block Click Event -------------------------//
    $("#questionBlock").click(function(){
      // remove the timer for the semi-circle if clicked before ring element added
      clearTimeout(timeoutVar);
      console.log("clicked");
      $("#circle").remove();
      //add animation to questionBlock
      $("#questionBlock")
        .attr({
          //sound:"autoplay: on; loop: false; src: #box-sound; volume: 0.8; poolSize: 2",
          "animation__bump":"property: scale; dir: alternate; dur: 100; easing: easeInSine; loop: false; to: 1.2 1 1.2"
          })
      //add sound to hidden entity
      $("#questionBlock").append($(document.createElement("a-entity"))
        .attr({
          id: "questionBlockSound",
          sound:"autoplay: on; loop: false; src: #box-sound; volume: 3; poolSize: 2",
          //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
        })
      );
      //add the textBox
      $("#questionBlock").append($(document.createElement("a-image"))
        .attr({
          id:"startInfoText",
          src:"#startInfo",
          scale: "2.5 1.5 1.5",
          position:"0 0.38 0.28",
          rotation:"0 0 0"
        })
      );
      //timeout and remove the first question block and replace with the first objective.
      setTimeout(function(){
        $("#startInfoText").remove();
        $("#questionBlock").append($(document.createElement("a-image"))
          .attr({
            id:"getGoingText",
            src:"#getGoing",
            scale: "2.5 1.5 1.5",
            position:"0 0.38 0.28",
            rotation:"0 0 0"
          })
        );
      }, 4000);
      //remove the second questionBlock
      setTimeout(function(){
       $("#getGoingText").remove();
       $("#startInfoText").remove();
      },8000);
      // remove the animation attribute and the questionBlock sound when clicked
      setTimeout( function () {
        $('#questionBlockSound').remove();
        $("#questionBlock").removeAttr("animation__bump");
        //alert("removed");
    },500);// end of add sound to hidden entity



    });
  },700);//end of remove startup elements and add question block
 });
}








//Create the Box -- yellow, right of starting point.
scene.append($(document.createElement("a-entity"))
            .attr({
                     id:"lightBox",
                     geometry:"primative: box",
                     material:"color: yellow",
                     position:" 10.83 2 0.41",
                     scale:"0 0 0",
                     animation__scale:"property: scale; dir: normal; dur: 12000; easing: easeInSine; loop: false; to: 1 1 1"
          })
        );
  // Create the lighting for the Box above as a child element
  $('#lightBox').append($(document.createElement("a-entity"))
                    .attr({
                                id:"spotBox",
                                light:"color: #9ef6ff; intensity:0.88; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
                                position:"-3.02 -0.03 -0.12",
                                rotation:"35.58 -87.94 0",
                                animation__lightsUp: "property: light.intensity; dir: normal; dur: 12000; easing: easeInSine; loop: false; from: 0; to: 0.88"
                                  })
                                );


/*
    setTimeout(function(){
      scene.append(entity);
      entity.attr({  id:"lightsOnIntro",
                     "obj-model":"obj: #lightsOnText-obj; mtl: #lightsOnText-mtl",
                     scale:"0.6 0.6 0.6",
                     position:"0.2 2.26 -3.20",
                     rotation:"90 0 0"});
   },9000);
*/
   $('#lightBox').one("click",function() {
     console.log("ello box");
     scene.append(movingBox);
     movingBox.attr({
                  id:"movingBox",
                  geometry:"primative: box",
                  position:" 7.68 2 10.33",
                  sound:"autoplay: on; loop: false; src: #click-sound; volume: 10; poolSize: 2",
                  scale:"0 0 0",
                  animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 2 2 2",
                  animation__move:"property: position; dir: alternate; dur: 1850; easing: easeInSine; loop: true; to: -2.61 2 10.33"
            });
     movingBox.append(movingLight);
     movingLight.attr({
       id:"movingLight",
       light:"color: #9ef6ff; intensity:0.88; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
       position:"-0.59 -0.03 -4.04",
       rotation:"35.58 -178.19 0",
       animation__lightsUp:"property: light.intensity; dir: normal; dur: 2000; easing: easeInSine; loop: false; from: 0; to: 0.88",
       animation__move:"property: position; dir: alternate; dur: 1850; easing: easeInSine; loop: true; to: -3.82 -0.03 -4.04"
   });

       //second box click function
       movingBox.one("click",function() {
       console.log("movingClick");
       scene.append(hoverBox);
       //Add 3rd Box
       hoverBox.attr({ id:"hoverBox",
                       geometry:"primative: box",
                       position:" 6.24 7.50 0.18",
                       sound:"autoplay: on; loop: false; src: #click-sound; volume: 1; poolSize: 2",
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
        $('#signPost').removeAttr("visible");
        $('#signPost').attr({sound:"autoplay: on; loop: false; src: #click-sound; volume: 1; poolSize: 2",});
      /*  $('#signPost').one("click",function(){
          entity.attr({"obj-model": "obj: #warning-obj; mtl: #warning-mtl",
                           id:"warnText" ,
                           position:"3.72 2.49 -1.55",
                           rotation:" 0 -136.94 -89.95",
                           animation__explode:"property: scale; dir: normal; dur: 200; easing: easeInSine; loop: false; from: 0 0 0; to: 0.6 0.6 0.6"

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
          entity.attr({   id: "frightQuestion",
                          "obj-model": "obj: #fright-obj; mtl: #fright-mtl",
                          scale:"0.6 0.6 0.6",
                          position:"-0.89 2.26 -5.20",
                          rotation:"90 90 90",
          })
          entity.append(yesBtn);
          yesBtn.attr({
              id: "yesBtn",
              scale: "1.5 1.5 1.5",
              rotation:" -81.36 -37.24 126.05",
              position:"-2 2 0.5",
              material: "color: #1BEDC3",
              animation__conescale:"property: scale; dir: normal; dur: 200; easing: easeInSine; loop: false; from: 0 0 0; to: 0.4 0.4 0.4"});
          entity.append(noBtn);
              noBtn.attr({
                  id: "noBtn",
                  scale: "0.7 0.7 0.7",
                  rotation:" -59.59 76.20 10.31",
                  position:"-3.38 0.5 0.5",
                  animation__conescale:"property: scale; dir: normal; dur: 200; easing: easeInSine; loop: false; from: 0 0 0; to: 0.4 0.4 0.4"});
        },5000)



        });
*/
    });

    $("#signPost").one("click",function(){
      $("#bridge").removeAttr('visible');
      //text
      setTimeout(function(){
        entity.attr({  id:"bridgeOpenText",
                       "obj-model":"obj: #bridgeOpen-obj; mtl: #bridgeOpen-mtl",
                       scale:"0.6 0.6 0.6",
                       position:"0.2 2.26 -5.52",
                       rotation:"0 0 0"});

      },3000);

      setTimeout(function(){
        entity.attr({  id:"answerText",
         "obj-model":"obj: #answer-obj; mtl: #answer-mtl",
         scale:"0.6 0.6 0.6",
         position:"0.2 2.26 -6.20",
         rotation:"0 0 0"});
         $("#testBox").attr({ sound:"autoplay: on; loop: false; src: #click-sound; volume: 1; poolSize: 2",});

      },7000);

      setTimeout(function(){
     entity.attr({
                   id:"riddleText",
                   "obj-model":"obj: #riddle-obj; mtl: #riddle-mtl",
                   scale:"0.6 0.6 0.6",
                   position:"0.2 2.26 -7.20",
                   rotation:"0 0 0"});

      $("#testBox").one("click",function(){
       $('#pads').removeAttr('visible');
      });
      },12000);
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
