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


//Functions -------------------------------------------//

//Changing the block colors
toggleFunction = function(element,otherBox,anotherBox){
  $(element).click(function(){
     console.log("color change");
     $(element).removeClass("green");
     $(element).removeAttr("color");
     $(element).attr({
      material: "color: yellow"
    })
    $(element).off();
    $(element).addClass("yellow");
        $(element).click(function(){
          $(element).removeAttr("color");
          $(element).attr({
           material: "color: red"
         })
         $(element).off();
         $(element).removeClass("yellow");
         $(element).addClass("red");
             $(element).click(function(){
               $(element).removeAttr("color");
               $(element).attr({
                material: "color: green"
              })
              $(element).off();
              $(element).removeClass("red");
              $(element).addClass("green");

              if ($(".green").length > 2){
                alert("greater!")
                $(element).off();
                    } else {
                      toggleFunction(element,otherBox,anotherBox);
                    }
            });
       });
  });
}

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
       scene.append($(document.createElement("a-image"))
         .attr({
           id:"startInfoText",
           src:"#startInfo",
           scale: "2.5 1.5 1.5",
           position:"-2.83 2.1 -0.04",
           rotation:"0 90 0"
         })
       );

       //timeout and remove the first question block and replace with the first objective.
       setTimeout(function(){
         $("#startInfoText").remove();
         scene.append($(document.createElement("a-image"))
           .attr({
             id:"getGoingText",
             src:"#getGoing",
             scale: "2.5 1.5 1.5",
             position:"-2.83 2.1 -0.04",
             rotation:"0 90 0"
           })
         );
       }, 4000);
       //remove click Event
       setTimeout(function(){
         $("#getGoingText").remove();
         scene.append($(document.createElement("a-image"))
           .attr({
             id:"lightsHintText",
             src:"#lightsHint",
             scale: "2.5 1.5 1.5",
             position:"-2.83 2.1 -0.04",
             rotation:"0 90 0"
           })
         );
       }, 8000);
       //remove the second questionBlock
       setTimeout(function(){
        $("#getGoingText").remove();
        $("#startInfoText").remove();
        $("#lightsHintText").remove();

        // -- Removes the original click function and applies a new click function ---------------------------//
        // means that the original textboxes go and only the final message is
        // displayed in the text box from this point
        if ($("#questionBlock").hasClass("moreClicks")){
          $("#questionBlock").off();
          //what happens after the first click ----------------------//
          $("#questionBlock").click(function(){
            //show the lights hint message
            scene.append($(document.createElement("a-image"))
              .attr({
                id:"lightsHintText",
                src:"#lightsHint",
                scale: "2.5 1.5 1.5",
                position:"-2.83 2.1 -0.04",
                rotation:"0 90 0"
              })
            );
            //add sound to hidden entity
            $("#questionBlock").append($(document.createElement("a-entity"))
              .attr({
                id: "questionBlockSound",
                sound:"autoplay: on; loop: false; src: #box-sound; volume: 3; poolSize: 2",
                //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
              })
            );
            setTimeout(function(){
              $('#questionBlockSound')
              .attr({
               sound:"autoplay: on; loop: false; src: #close-box; volume: 3; poolSize: 2",
             })
             $("#lightsHintText")
             .attr({
               animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0",
             })
           },4000);
            //after 4 seconds remove the lights Hint message
            setTimeout(function(){
            $("#lightsHintText").remove();
            $('#questionBlockSound').remove();
          }, 6000);
          });
        } // end of if statement

      },13000);
       // remove the animation attribute and the questionBlock sound when clicked
       setTimeout( function () {
         $('#questionBlockSound').remove();
         $("#questionBlock").removeAttr("animation__bump");
         $("#questionBlock").addClass("moreClicks");
         //alert("removed");
         //--Beginning of Code Block that brings about the yellow box ------------------------------------------//
         if ($("#questionBlock").hasClass("moreClicks")){

         //Create the Box -- yellow, right of starting point. --*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--//
          scene.append($(document.createElement("a-entity"))
          .attr({
            id:"trafficLights"
          })
        );

         $("#trafficLights").append($(document.createElement("a-entity"))
                     .attr({
                              id:"rightBox",
                              geometry:"primative: box",
                              material:"color: yellow",
                              position:" 10.83 2 0.41",
                              scale:"0 0 0",
                              animation__scale:"property: scale; dir: normal; dur: 12000; easing: easeInSine; loop: false; to: 1 1 1"
                   })
                 );
         $("#trafficLights").append($(document.createElement("a-entity"))
                     .attr({
                              id:"middleBox",
                              geometry:"primative: box",
                              material:"color: yellow",
                              position:" 10.83 2 0.41",
                              scale:"0 0 0",
                              animation__scale:"property: scale; dir: normal; dur: 12000; easing: easeInSine; loop: false; to: 1 1 1"
                   })
                 );
         $("#trafficLights").append($(document.createElement("a-entity"))
                     .attr({
                              id:"leftBox",
                              geometry:"primative: box",
                              material:"color: yellow",
                              position:" 10.83 2 0.41",
                              scale:"0 0 0",
                              animation__scale:"property: scale; dir: normal; dur: 12000; easing: easeInSine; loop: false; to: 1 1 1"
                   })
                 );
           // Create the lighting for the Box above as a child element
           $('#trafficLights').append($(document.createElement("a-entity"))
                             .attr({
                                         id:"spotBox",
                                         light:"color: #9ef6ff; intensity:0.88; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
                                         position:"-3.02 -0.03 -0.12",
                                         rotation:"35.58 -87.94 0",
                                         animation__lightsUp: "property: light.intensity; dir: normal; dur: 12000; easing: easeInSine; loop: false; from: 0; to: 0.88"
                                           })
                                         );
            $('#trafficLights').one("click",function() {
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
       } //--end of code block that brings about the yellow bock to start the experience ----------------------------------//

     },500);// end of add sound to hidden entity
     });
   },700);//end of remove startup elements and add question block
});

//-------Large Screen -------//
} else {
 $('#startBox').click(function(){
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
    $("#questionBlock").one("click",function(){
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
      scene.append($(document.createElement("a-image"))
        .attr({
          id:"startInfoText",
          src:"#startInfo",
          scale: "2.5 1.5 1.5",
          position:"-2.83 2.1 -0.04",
          rotation:"0 90 0"
        })
      );

      //timeout and remove the first question block and replace with the first objective.
      setTimeout(function(){
        $("#startInfoText").remove();
        scene.append($(document.createElement("a-image"))
          .attr({
            id:"getGoingText",
            src:"#getGoing",
            scale: "2.5 1.5 1.5",
            position:"-2.83 2.1 -0.04",
            rotation:"0 90 0"
          })
        );
      }, 4000);
      //remove click Event
      setTimeout(function(){
        $("#getGoingText").remove();
        scene.append($(document.createElement("a-image"))
          .attr({
            id:"lightsHintText",
            src:"#lightsHint",
            scale: "2.5 1.5 1.5",
            position:"-2.83 2.1 -0.04",
            rotation:"0 90 0"
          })
        );
      }, 8000);
      //remove the second questionBlock
      setTimeout(function(){
       $("#getGoingText").remove();
       $("#startInfoText").remove();
       $("#lightsHintText").remove();

             // -- Removes the original click function and applies a new click function ---------------------------//
             // means that the original textboxes go and only the final message is
             // displayed in the text box from this point
             if ($("#questionBlock").hasClass("moreClicks")){
               $("#questionBlock").off();
               //what happens after the first click ----------------------//
               $("#questionBlock").click(function(){
                 //show the lights hint message
                 scene.append($(document.createElement("a-image"))
                   .attr({
                     id:"changeColorsText",
                     src:"#changeColors",
                     scale: "2.5 1.5 1.5",
                     position:"-2.83 2.1 -0.04",
                     rotation:"0 90 0"
                   })
                 );
                 //add sound to hidden entity
                 $("#questionBlock").append($(document.createElement("a-entity"))
                   .attr({
                     id: "questionBlockSound",
                     sound:"autoplay: on; loop: false; src: #box-sound; volume: 3; poolSize: 2",
                     //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
                   })
                 );
                 setTimeout(function(){
                   $('#questionBlockSound')
                   .attr({
                    sound:"autoplay: on; loop: false; src: #close-box; volume: 3; poolSize: 2",
                  })
                  $("#changeColorsText")
                  .attr({
                    animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0",
                  })
                },4000);
                 //after 4 seconds remove the lights Hint message
                 setTimeout(function(){
                 $("#changeColorsText").remove();
                 $('#questionBlockSound').remove();
               }, 6000);
               });
             } // end of if statement
           },13000);
            // remove the animation attribute and the questionBlock sound when clicked
            setTimeout( function () {
              $('#questionBlockSound').remove();
              $("#questionBlock").removeAttr("animation__bump");
              $("#questionBlock").addClass("moreClicks");
              //alert("removed");

              //--Beginning of Code Block that brings about the yellow box ------------------------------------------//
              if ($("#questionBlock").hasClass("moreClicks")){

                //Create the Box -- yellow, right of starting point. --*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--//
                 scene.append($(document.createElement("a-entity"))
                 .attr({
                   id:"trafficLights"
                 })
               );
                //Create the right facing box
                $("#trafficLights").append($(document.createElement("a-entity"))
                            .attr({
                                     id:"rightBox",
                                     geometry:"primative: box",
                                     material:"color: green",
                                     position:" 10.83 2 2",
                                     scale:"0 0 0",
                                     animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 1.5 1.5 1.5"
                          })
                        );

              //Add the box-toggle function
              toggleFunction($("#rightBox"),$("#middleBox"),$("#leftBox"));

              //Create the middle Box
              $("#trafficLights").append($(document.createElement("a-entity"))
                          .attr({
                                   id:"middleBox",
                                   geometry:"primative: box",
                                   material:"color: orange",
                                   position:" 10.83 2 0",
                                   scale:"0 0 0",
                                   animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 1.5 1.5 1.5"
                        })
                      );
              //Add the box-toggle function
              toggleFunction($("#middleBox"),$("#leftBox"),$("#rightBox"));
              //Create the left box
              $("#trafficLights").append($(document.createElement("a-entity"))
                          .attr({
                                   id:"leftBox",
                                   geometry:"primative: box",
                                   material:"color: tomato",
                                   position:" 10.83 2 -2",
                                   scale:"0 0 0",
                                   animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 1.5 1.5 1.5"
                        })
                      );
               //Add the box-toggle function
               toggleFunction($("#leftBox"),$("#rightBox"),$("#middleBox"));

              // Create the lighting for the Box above as a child element
              $('#trafficLights').append($(document.createElement("a-entity"))
                                .attr({
                                            id:"spotBox",
                                            light:"color: #9ef6ff; intensity:0.88; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
                                            position:"-3.02 -0.03 -0.12",
                                            rotation:"35.58 -87.94 0",
                                            animation__lightsUp: "property: light.intensity; dir: normal; dur: 4000; easing: easeInSine; loop: false; from: 0; to: 0.88"
                                              })
                                            );





/*
                   $('#trafficLights').one("click",function() {
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
              });*/
            } //--end of code block that brings about the yellow bock to start the experience ----------------------------------//


          },500);// end of add sound to hidden entity
        });
      },700);//end of remove startup elements and add question block
     });
    }


  }//end if init function ------------------//
});//end of "foo" component ----------------//
