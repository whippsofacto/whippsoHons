//require jquery
var $ = require ('jquery');
//*------ Components -----*//
AFRAME.registerComponent('foo', {
  init: function () {

    //Variables ---------------------------- //
    var scene = $('a-scene');
    var entity = $(document.createElement('a-entity'));
    var sky = $('#sky');

//--------- Functions -------------------------------------------//

//QuestionBlockFunction
//Changes the message that's inside the quesiton block -- function contains the animation, sound and text
//Takes the params of an ID for the element and the Src of the image.
questionBlockFunction = function(attId,srcId){
  $("#questionBlock").off();
  //what happens after the first click ----------------------//
  $("#questionBlock").click(function(){
    //show the lights hint message
      $("#" + attId)
      .attr({
        visible: "true",
        scale: "2.5 1.5 1.5",
        position:"-2.83 2.1 -0.04",
        rotation:"0 90 0"
      });
    //add sound to hidden entity
    $("#questionBlock").append($(document.createElement("a-entity"))
      .attr({
        id: "questionBlockSound",
        sound:"autoplay: on; loop: false; src: #box-sound; volume: 5; poolSize: 2",
        //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
      })
    );
    setTimeout(function(){
      $('#questionBlockSound')
      .attr({
       sound:"autoplay: on; loop: false; src: #close-box; volume: 5; poolSize: 2",
     })
     $("#" + attId)
     .attr({
       animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0",
     })
   },4000);
    //after 4 seconds remove the lights Hint message
    setTimeout(function(){
    $("#" + attId).remove();
    $('#questionBlockSound').remove();
        scene.append($(document.createElement("a-image"))
          .attr({
            id:  attId,
            src: srcId,
            visible: "false",
            scale: "2.5 1.5 1.5",
            position:"-2.83 2.1 -0.04",
            rotation:"90 0 0"

            //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
          })
        );

  }, 4700);
  });
} // end of function


//Ring Function
ring = function(){
$("#questionBlock").append($(document.createElement("a-ring"))
  .attr({
    id: "circle",
    "radius-inner": "1.4",
    "radius-outer": "1.5",
    position:"-0.01 0.39 -1.25",
    material:"color: yellow",
    sound:"autoplay: on; loop: true; src: #block-alert; volume: 3; poolSize: 2",
    "animation__scale-inner-radius":"property: scale; dir: normal; dur: 1000; easing: easeInSine; loop:true; to: 0.35 0.35 0.35",
    //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
    })
  );
}


endOfAllThings = function(){
  $("#testBox").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 30000; easing: easeInSine; loop: false; to: 0 0 0",
  })
  $("#ocean-1").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 29000; easing: easeInSine; loop: false; to: 0 0 0",
  })
  $("#ocean-2").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 24000; easing: easeInSine; loop: false; to: 0 0 0",
  })
  $("#ocean-3").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 19850; easing: easeInSine; loop: false; to: 0 0 0",
  })
  $("#ocean-4").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 17000; easing: easeInSine; loop: false; to: 0 0 0",
  })
  $("#startPoint").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 8000; easing: easeInSine; loop: false; to: 0 0 0",
  })
  $("#mainIsland").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 13000; easing: easeInSine; loop: false; to: 0 0 0",
  })
  $("#bridge").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 19000; easing: easeInSine; loop: false; to: 0 0 0",
  })
  $("#exitDoorText").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 10000; easing: easeInSine; loop: false; to: 0 0 0",
  })
  $("#endText").removeAttr("visible");
  $("#endText").attr({
         position: "-7.35 2.92 -41.23",
         rotation: "0 -11 0",
         scale:"0 0  0",
         animation__scale:"property: scale; dir: normal; dur: 18000; easing: easeInSine; loop: false; to: 2 1 1",
        })
  $("#cursor").attr({
    sound:"autoplay: true; volume: 1.25; loop:true; src: #loopEnd; poolSize: 2"
  })
  sky.removeAttr("animation__top");
  sky.removeAttr("animation__bottom");
  sky.attr({
  animation__top:"property: material.topColor; dir: normal; dur: 30000; easing: easeInSine; loop: false; to: 2 2 10",
  animation__bottom:"property: material.bottomColor; dir: normal; dur: 35000; easing: easeInSine; loop: false; to: 238 239 247"
  });
  //change fog to orange
  scene.removeAttr("animation__fog");
  scene.attr({animation__fog:"property: fog.color; dir: normal; dur: 6000; easing: easeInSine; loop: false; to:#4E2A73"});
  var timeoutVar = setTimeout(function(){ring();},40000);
  $("#questionBlock").off();
  $("#questionBlock").click(function(){
    //onNextClickEventRemoveTheRing
    clearTimeout(timeoutVar);
    //if ring is added it should be removed
    $("#circle").remove();
    $("#circle").remove();
    $("#timeToLeaveText")
    .attr({
      visible: "true",
      scale: "2.5 1.5 1.5",
      position:"-2.83 2.1 -0.04",
      rotation:"0 90 0"
    });
  //add sound to hidden entity
  $("#questionBlock").append($(document.createElement("a-entity"))
    .attr({
      id: "questionBlockSound",
      sound:"autoplay: on; loop: false; src: #box-sound; volume: 5; poolSize: 2",
      //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
    })
  );
  setTimeout(function(){
    $('#questionBlockSound')
    .attr({
     sound:"autoplay: on; loop: false; src: #close-box; volume: 5; poolSize: 2",
   })
   $("#timeToLeaveText")
   .attr({
     animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0",
   })
 },4000);
  //after 4 seconds remove the lights Hint message
  setTimeout(function(){
  $("#timeToLeaveText").remove();
  $('#questionBlockSound').remove();
  $('#startPoint').removeAttr("sound");
  $("#cursor").removeAttr("sound");
      scene.append($(document.createElement("a-image"))
        .attr({
          id:  "timeToLeaveText",
          src: "#timeToLeave",
          visible: "false",
          scale: "2.5 1.5 1.5",
          position:"-2.83 2.1 -0.04",
          rotation:"90 0 0"

          //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
        })
      );
    }, 4700);
  });
}


finish = function(){
    $("questionBlock").addClass("finale");
    $("#circle").remove();
    $("#lastScene").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 1500; easing: easeInSine; loop: false; to: 0 0 0",
    sound:"autoplay: on; loop: false; src: #success; volume: 2; poolSize: 2"
  })
    $("#count-3-text").remove();
    $("#count-2-text").remove();
    $("#count-1-text").remove();
    $("#ratsText").remove();

    $('.secondBridge').removeAttr('visible');


    $("#bridge").attr({
      animation__length:"property: height; dir: normal; dur: 1500; easing: easeInSine; loop: false; to: 30",
      animation__position:"property: position; dir: normal; dur: 1500; easing: easeInSine; loop: false; to: 0 0.5 -19 "

    })


    $("#exitDoorText").removeAttr("visible");
    $("#exitDoorText").attr({
      position: "-6.05 1.72 -40.3",
      rotation: "0 -60.16 89.95",
      scale: "2 1 1"
     }
    )

    $("#exitDoorText").click(function(){
      endOfAllThings();
    });
}

endGameFunction = function(l,r,c,h){
  var endArray = [];

       $(l).click(function(){
         console.log("Left");
              //on second click
              //change color to red
              $(l).removeAttr("color");
              $(l).attr({
               material: "color: white"
             })
             //remove the previous click event
             $(l).off();
             //replace with white class
             $(l).addClass("white");
                  if($(this).hasClass("white")){
                     $(l).off();
                     endArray.push("left");
                     console.log(endArray);
                     if (endArray.length > 3){
                     clearTimeout(myTimeOutFunction)
                     finish();
                     }

           }
     }); //left

     $(r).click(function(){
       console.log("right");
            //on second click
            //change color to red
            $(r).removeAttr("color");
            $(r).attr({
             material: "color: white"
           })
           //remove the previous click event
           $(r).off();
           //replace with white class
           $(r).addClass("white");
                if($(this).hasClass("white")){
                   $(r).off();
                   endArray.push("right");
                   console.log(endArray);
                   if (endArray.length > 3){
                     clearTimeout(myTimeOutFunction)
                   finish();
                   }

         }
   }); //right
   $(c).click(function(){
     console.log("cent");
          //on second click
          //change color to red
          $(c).removeAttr("color");
          $(c).attr({
           material: "color: white"
         })
         //remove the previous click event
         $(c).off();
         //replace with white class
         $(c).addClass("white");
              if($(this).hasClass("white")){
                 $(c).off();
                 endArray.push("cent");
                 console.log(endArray);
                 if (endArray.length > 3){
                 clearTimeout(myTimeOutFunction)

                 finish();
                 }

       }
 }); //cent
 $(h).click(function(){
   console.log("hid");
        //on second click
        //change color to red
        $(h).removeAttr("color");
        $(h).attr({
         material: "color: white"
       })
       //remove the previous click event
       $(h).off();
       //replace with white class
       $(h).addClass("white");
            if($(this).hasClass("white")){
               $(h).off();
               endArray.push("hid");
               console.log(endArray);
               if (endArray.length > 3){
               clearTimeout(myTimeOutFunction)

               finish();
               }

     }
}); //hidden

//CountDown--------------------------------//
    setTimeout(function(){
    $("#count-3-text").removeAttr("visible")
    console.log("3");
    },12000)
    setTimeout(function(){
    $("#count-3-text").attr({visible:"false"})
    $("#count-2-text").removeAttr("visible")
    console.log("2");
    },13000)
    setTimeout(function(){
    $("#count-2-text").attr({visible:"false"})
    $("#count-1-text").removeAttr("visible")
    console.log("1");
    },14000)
    setTimeout(function(){
      $("#count-1-text").attr({visible:"false"})
      $("#ratsText").removeAttr("visible")
      console.log("RATS");
    },15000)


 var myTimeOutFunction = setTimeout(function(){
   if (endArray.length > 3){
     clearTimeout(myTimeOutFunction)
   } else {
     for (var i = endArray.length; i > 0; i--) {
      endArray.pop();
     }

   $(r).removeAttr("color");
   $(r).attr({
    material: "color: red"
   })
   $(r).removeClass("white")

   $(l).removeAttr("color");
   $(l).attr({
    material: "color: red"
   })
   $(l).removeClass("white")

   $(l).removeAttr("color");
   $(l).attr({
   material: "color: red"
   })
   $(l).removeClass("white")

   $(l).removeAttr("color");
   $(l).attr({
    material: "color: red"
   })
   $(l).removeClass("white")
   //--Clear Rats
   $("#ratsText").attr({visible:"false"})
   console.log(endArray + " RESET");
   endGameFunction(l,r,c,h);
  }
},16000)


}


//----- Bring about the bridge and final transition ------//
finalFunction = function (){
  $("#movingLights").attr({
    animation__scaleDown:"property: scale; dir: normal; dur: 1500; easing: easeInSine; loop: false; to: 1.5 0 1.5",
    sound:"autoplay: on; loop: false; src: #success; volume: 0.5; poolSize: 2"
  })
  //brighten up the sky
  sky.removeAttr("animation__top");
  sky.removeAttr("animation__bottom");
  sky.attr({
  animation__top:"property: material.topColor; dir: normal; dur: 8000; easing: easeInSine; loop: false; to: 36 40 198",
  animation__bottom:"property: material.bottomColor; dir: normal; dur: 8000; easing: easeInSine; loop: false; to: 252 141 41"
  });
  //change fog to orange
  scene.removeAttr("animation__fog");
  scene.attr({animation__fog:"property: fog.color; dir: normal; dur: 6000; easing: easeInSine; loop: false; to:#4E2A73"});
  //fog #faa0a2
  //lighting
  scene.append($(document.createElement("a-entity"))
  .attr({
    id:"ambientLight",
    light:"angle: 10; color: #ff9dff; intensity: 0; type: ambient",
    animation__intensity:"property: light.intensity; dir: normal; dur: 3000; easing: easeInSine; loop: false; to: 0.4",
   })
  );
  //clear out old questionBoxStuff
  $("#questionBlock").removeClass("moreClicks");
  //new RING alert
  var timeoutVar = setTimeout(function(){ring(),$("#trafficLights").remove();},6000);//end of circle timeout
  $("#questionBlock").click(function(){
    $("#questionBlockSound").remove();
    //after the click has run once only show the questionBlock for "openBridge"
    if ($("#questionBlock").hasClass("openBridge")){
      questionBlockFunction("openBridgeText","#openBridge");
    }
    //only run the first time clicked
    else {
    //clear the timeout/remove the ring
    $("#moreSwitchesText").remove();
    $("#movingLights").remove();
    clearTimeout(timeoutVar);
    //if ring is added it should be removed
    $("#circle").remove();
    $("#goodJobText")
      .attr({
        visible: "true",
        scale: "2.5 1.5 1.5",
        position:"-2.83 2.1 -0.04",
        rotation:"0 90 0"
      });

    //timeout and remove the first question block and replace with the first objective.
    setTimeout(function(){
      $("#goodJobText").remove();
      $("#openBridgeText")
        .attr({
          visible:"true",
          scale: "2.5 1.5 1.5",
          position:"-2.83 2.1 -0.04",
          rotation:"0 90 0"
        });
    }, 4000);

    setTimeout(function(){
      $("#questionBlock").addClass("openBridge");
      $('#questionBlockSound')
      .attr({
       sound:"autoplay: on; loop: false; src: #close-box; volume: 5; poolSize: 2",
     })
     $("#openBridgeText")
     .attr({
       animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0",
     })
    },8000);
    setTimeout(function(){
      $('#questionBlockSound').remove();
    },11000)
  }
});
  //reveal bridge
  $("#bridge").removeAttr("visible");
  //add the walking panels
  $('.firstBridge').removeAttr('visible');
//QuestionBlock Light
$("#questionBlockLight").attr({
  animation__qbUP:"property: light.intensity; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 0.20",
  animation__qbColor:"property: light.color; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: #e1ff6a",
  animation__qbPosition:"property: position; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 0 -0.03 5"
})
    // ---- Add the elements for the last scene -----------------------------------------------------------------//
    scene.append($(document.createElement("a-entity"))
    .attr({
      id:"lastScene"
    })
    );

    $("#lastScene").append($(document.createElement("a-image"))
                .attr({id:"skullPlaneTextRight",
                       src:"#skullPlane",
                       position:"6 4 -16",
                       animation__scale:"property: scale; dir: normal; dur: 3000; easing: easeInSine; loop: false; to: 4 2 2",
                      })
    );
    $("#lastScene").append($(document.createElement("a-image"))
                .attr({id:"fourBoxSignText",
                       src:"#fourBoxSign",
                       position:" 11.20 4.38 0",
                       rotation:"0 -90 0",
                       animation__scale:"property: scale; dir: normal; dur: 3000; easing: easeInSine; loop: false; to: 5 2.5 2.5",
                      })
    );


    $("#lastScene").append($(document.createElement("a-image"))
                .attr({id:"skullPlaneTextRight",
                       src:"#skullPlane",
                       position:"6 4 -16",
                       animation__scale:"property: scale; dir: normal; dur: 3000; easing: easeInSine; loop: false; to: 4 2 2",
                      })
    );

    $("#lastScene").append($(document.createElement("a-image"))
                .attr({id:"skullPlaneTextLeft",
                       src:"#skullPlane",
                       position:"-6 4 -16",
                       animation__scale:"property: scale; dir: normal; dur: 3000; easing: easeInSine; loop: false; to: 4 2 2",
                      })
    );

    $("#lastScene").append($(document.createElement("a-entity"))
                .attr({
                id:"skullBoxCenter",
                geometry:"primative: box",
                material: "color: red",
                position:" -34 15 -100",
                scale:"0 0 0",
                animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 6 6 6",
                animation__yoyo:"property: position; dir: alternate; dur: 8000; easing: easeInSine; loop: true; to: 34 15 -100"
     })
    );
    $("#skullBoxCenter").append($(document.createElement("a-entity"))
    .attr({
      id:"skullBoxCenterLight",
      light:"color: #fff; angle 60 intensity:0.4; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
      position:"-0.3 0 3",
      rotation:"60 0 0",
      animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1"
    })
  );
    $("#lastScene").append($(document.createElement("a-entity"))
                .attr({
                  id:"skullBoxRight",
                  geometry:"primative: box",
                  material: "color: red",
                  position:" 9 5.5 -30",
                  scale:"0 0 0",
                  animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 1.75 1.75 1.75 "
      })
    );
    $("#skullBoxRight").append($(document.createElement("a-entity"))
    .attr({
      id:"skullBoxRightLight",
      light:"color: #fff; angle 60 intensity:0.4; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
      position:"0 -3.5 2.25",
      rotation:"60 0 0",
      animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1"
    })
  );
    $("#lastScene").append($(document.createElement("a-entity"))
                .attr({
                  id:"skullBoxLeft",
                  geometry:"primative: box",
                  material: "color: red",
                  position:" -9 5.5 -30",
                  scale:"0 0 0",
                  animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 1.75 1.75 1.75"
     })
    );
    $("#skullBoxLeft").append($(document.createElement("a-entity"))
    .attr({
      id:"skullBoxLeftLight",
      light:"color: #fff; angle 60 intensity:0.4; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
      position:"0 -3.5 2.25",
      rotation:"60 0 0",
      animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1"
    })
  );
    $("#lastScene").append($(document.createElement("a-entity"))
                .attr({
                  id:"skullBoxHidden",
                  geometry:"primative: box",
                  material: "color: red",
                  position:" 0 1.6 3",
                  scale:"0 0 0",
                  animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 1 1 1"
     })
    );
    $("#skullBoxHidden").append($(document.createElement("a-entity"))
    .attr({
      id:"skullBoxHiddenLight",
      light:"color: #fff; angle 60 intensity:0.4; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
      position:"0 -1 -3",
      rotation:"0 -180.00 0",
      animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1"
    })
  );

    endGameFunction($("#skullBoxLeft"),$("#skullBoxRight"),$("#skullBoxCenter"),$("#skullBoxHidden"));

}//End of finalFunction

movingPuzzle = function (boxUp,boxBack,boxSign){
  var colors = [];

  $(boxUp).click(function(){
    console.log("BoxUp");
         //on second click
         //change color to red
         $(boxUp).removeAttr("color");
         $(boxUp).attr({
          material: "color: purple"
        })
        //remove the previous click event
        $(boxUp).off();
        //replace with red class
        $(boxUp).addClass("purple");
             //on third click
            $(boxUp).click(function(){
              //change the color to green
              $(boxUp).removeAttr("color");
              $(boxUp).attr({
               material: "color: yellow"
             })
             //remove the previous click event
             $(boxUp).off();
             //change class from red
             $(boxUp).removeClass("purple");
             //to green
             $(boxUp).addClass("yellow");
             if($(this).hasClass("yellow")){
                $(boxUp).off();
                colors.push("yellow");
                console.log(colors);
                if (colors.length > 2){
                finalFunction();
                }

      }
  });
 }); //boxUp
 $(boxBack).click(function(){
   console.log("boxBack");
        //on second click
        //change color to red
        $(boxBack).removeAttr("color");
        $(boxBack).attr({
         material: "color: yellow"
       })
       //remove the previous click event
       $(boxBack).off();
       //replace with red class
       $(boxBack).addClass("yellow");
            //on third click
           $(boxBack).click(function(){
             //change the color to green
             $(boxBack).removeAttr("color");
             $(boxBack).attr({
              material: "color: green"
            })
            //remove the previous click event
            $(boxBack).off();
            //change class from red
            $(boxBack).removeClass("yellow");
            //to green
            $(boxBack).addClass("green");
            if($(this).hasClass("green")){
               $(boxBack).off();
               colors.push("green");
               console.log(colors);
               if (colors.length > 2){
                finalFunction();
              }

     }
 });
}); //boxBack
 $(boxSign).click(function(){
   console.log("boxSign");
        //on second click
        //change color to red
        $(boxSign).removeAttr("color");
        $(boxSign).attr({
         material: "color: green"
       })
       //remove the previous click event
       $(boxSign).off();
       //replace with red class
       $(boxSign).addClass("green");
            //on third click
           $(boxSign).click(function(){
             //change the color to green
             $(boxSign).removeAttr("color");
             $(boxSign).attr({
              material: "color: purple"
            })
            //remove the previous click event
            $(boxSign).off();
            //change class from red
            $(boxSign).removeClass("green");
            //to green
            $(boxSign).addClass("purple");
            if($(this).hasClass("purple")){
               $(boxSign).off();
               colors.push("purple");
            }
            if (colors.length > 2){
                finalFunction();
          }
   });
 }); //boxSign
}

//Changing the block colors
//passes the three box elements [target element]
toggleFunction = function(element){
  $(element).click(function(){
    //on first click change the color to yellow
     console.log("color change");
     //removeClass green if added from previous iteration
     if ($(this).hasClass("green")){
     $(element).removeClass("green");
     }
        //on second click
          //change color to red
          $(element).removeAttr("color");
          $(element).attr({
           material: "color: red"
         })
         //remove the previous click event
         $(element).off();
         //replace with red class
         $(element).addClass("red");
              //on third click
             $(element).click(function(){
               //change the color to green
               $(element).removeAttr("color");
               $(element).attr({
                material: "color: green"
              })
              //remove the previous click event
              $(element).off();
              //change class from red
              $(element).removeClass("red");
              //to green
              $(element).addClass("green");
              //if the green class exceeds 2 elements -- initiate next puzzle
              if ($(".green").length > 2){

                //remove click events from all elements when all blocks are green
                $("#trafficLights").attr({
                  animation__scaleDown:"property: scale; dir: normal; dur: 1500; easing: easeInSine; loop: false; to: 1.5 0 1.5",
                  sound:"autoplay: on; loop: false; src: #success; volume: 0.5; poolSize: 2"
                })
                //brighten up the sky
                sky.attr({
                animation__top:"property: material.topColor; dir: normal; dur: 8000; easing: easeInSine; loop: false; to: 50 40 84",
                animation__bottom:"property: material.bottomColor; dir: normal; dur: 8000; easing: easeInSine; loop: false; to: 148 51 48"
              });
              //change fog to red
              scene.attr({animation__fog:"property: fog.color; dir: normal; dur: 6000; easing: easeInSine; loop: false; to:#faa0a2 "});
              //fog #faa0a2
                $("#questionBlock").addClass("nextClicks")
                  $(element).removeAttr("animation__scaleDown");
                  questionBlockFunction("moreSwitchesText","#moreSwitches");
                  //add Circle after 4 seconds
                  var timeoutVar = setTimeout(function(){ring(),$("#trafficLights").remove();},6000);//end of circle timeout

                      $("#questionBlock").click(function(){
                      //onNextClickEventRemoveTheRing
                      clearTimeout(timeoutVar);
                      //if ring is added it should be removed
                      $("#circle").remove();
                      //Create the Box -- yellow, right of starting point. --*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--//
                       if ($("#questionBlock").hasClass("nextClicks")){
                         $("#questionBlock").removeClass("nextClicks"); //remove the class that creates the next round of elements so as it can only occur once.
                              scene.append($(document.createElement("a-entity"))
                              .attr({
                                id:"movingLights"
                              })
                            );
                            $("#movingLights").append($(document.createElement("a-image"))
                                        .attr({
                                                id:"colourBoxesText",
                                                src: "#colourBoxes",
                                                position:" 11.20 4.38 0",
                                                rotation:"0 -90 0",
                                                animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 6 3 3"
                                              })
                            );
                            $("#movingLights").append($(document.createElement("a-entity"))
                                        .attr({id:"boxUp",
                                               geometry:"primative: box",
                                               material: "color: pink",
                                               position:" 0.17 8.52 -5",
                                               scale:"0 0 0",
                                               animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 1.5 1.5 1.5"
                                              })
                            );

                            $("#boxUp").append($(document.createElement("a-entity"))
                            .attr({
                              id:"boxUpLight",
                              light:"color: #fff; angle 60 intensity:0.4; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
                              position:"0 -3.5 2.25",
                              rotation:"60 0 0",
                              animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1"
                            })
                          );

                          //red: #ff0d08
                          //orange: ##eeff00
                          //green: #00ff75
                            $("#movingLights").append($(document.createElement("a-entity"))
                                        .attr({id:"boxBack",
                                               geometry:"primative: box",
                                               material: "color: blue",
                                               position:"0 2.5 8",
                                               scale:"0 0 0",
                                               animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 2 2 2",
                                               animation__move:"property: position; dir: alternate; dur: 4000; easing: easeInSine; loop: true; to: -10 2.5 8"

                                              })
                            );


                            $("#boxBack").append($(document.createElement("a-entity"))
                            .attr({
                              id:"boxBackLight",
                              light:"color: #fff; angle: 20; intensity:0.8; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
                              position:"0 0 -3.5",
                              rotation:"-0.5 180 0",
                              animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1",
                            })
                          );

                            $("#movingLights").append($(document.createElement("a-entity"))
                                        .attr({id:"boxSign",
                                               geometry:"primative: box",
                                               material: "color: orange",
                                               position:" 14 2 0",
                                               scale:"0 0 0",
                                               animation__scale:"property: scale; dir: normal; dur: 3000; easing: easeInSine; loop: false; to: 3 3 3",
                                               animation__move:"property: position; dir: alternate; dur: 4000; easing: easeInSine; loop: true; to: 14 14 0"
                                              })
                            );



                            $("#boxSign").append($(document.createElement("a-entity"))
                            .attr({
                              id:"boxSignLight",
                              light:"color: #fff; angle:20; intensity:0.8; groundColor: #8afff0; decay: -100; penumbra: 1; type: spot",
                              position:"-9 0 0",
                              rotation:"7.5 -90 0.5",
                              animation__scale:"property: scale; dir: normal; dur: 2000; easing: easeInSine; loop: false; to: 1 1 1",
                              animation__move:"property: position; dir: alternate; dur: 4000; easing: easeInSine; loop: true; to: 0 0 0"

                            })
                          );
                          //Add the box-toggle function
                          movingPuzzle($("#boxUp"),$("#boxBack"),$("#boxSign"));


                      } //end of IF statement
                   })

              }
              //if the green glass does not exceed 2 elements -- continue clicking
              else {
                toggleFunction(element);
              }
       });
  });
}

//--- Opening State ----------------------------------------//
//-- Show signs to inform user of how to interact with the environment --//
//--If a mobile sized screen show the VR Info
//-------Small Screen -------//
if (screen.width < 750){
  scene.append($(document.createElement("a-entity"))
      .attr({
      id:"begin"
      })
    );
  $("#begin").append($(document.createElement('a-image'))
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
  scene.append($(document.createElement("a-entity"))
      .attr({
      id:"begin",
      })
    );
$("#begin").append($(document.createElement('a-image'))
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
  $("#desktopInfo").addClass("begin");
}
//----- Once the start button is clicked, remove the opening signs and start the experience -------------------
//-------Small Screen -------//

  $('#startBox').one("click",function(){
    $("#startBox").attr({
    sound:"autoplay: on; loop: false; src: #click-sound; volume: 5; poolSize: 2",
    animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"

    })
    $("#begin").attr({
     animation__scaleDown:"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0",
     animation__scaleOut:"property: position; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 2.0 -4"
    });

    setTimeout(function(){
   //-- Remove the startUp elements and add the question block
    $("#begin").remove();
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
       var timeoutVar = setTimeout(function(){ring()},4000);//end of circle timeout


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
           sound:"autoplay: on; loop: false; src: #box-sound; volume: 5; poolSize: 2",
           //"animation__scale-outer-radius":"property: scale; dir: normal; dur: 700; easing: easeInSine; loop: false; to: 0 0 0"
         })
       );
       //add the textBox
       $("#startInfoText")
         .attr({
           visible: "true",
           scale: "2.5 1.5 1.5",
           position:"-2.83 2.1 -0.04",
           rotation:"0 90 0"
         });

       //timeout and remove the first question block and replace with the first objective.
       setTimeout(function(){
         $("#startInfoText").remove();
         $("#getGoingText")
           .attr({
             visible:"true",
             scale: "2.5 1.5 1.5",
             position:"-2.83 2.1 -0.04",
             rotation:"0 90 0"
           });
       }, 4000);
       //remove click Event
       setTimeout(function(){
         $("#getGoingText").remove();
         $("#lightsHintText")
           .attr({
             visible:"true",
             scale: "2.5 1.5 1.5",
             position:"-2.83 2.1 -0.04",
             rotation:"0 90 0"
           });
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
           questionBlockFunction("changeColorsText","#changeColors");
         }
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
          $("#trafficLights").append($(document.createElement("a-image"))
                      .attr({
                               id:"greenBoxesText",
                               src: "#greenBoxes",
                               position:" 11.20 4.38 0",
                               rotation:"0 90 0",
                               animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 5 2.5 2.5"
                             })
                  );
           //Create the right facing box
           $("#trafficLights").append($(document.createElement("a-entity"))
                       .attr({
                                id:"rightBox",
                                geometry:"primative: box",
                                material: "color: pink",
                                position:" 10.83 2 2",
                                scale:"0 0 0",
                                animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 1.5 1.5 1.5"
                     })
                   );

         //Add the box-toggle function
         toggleFunction($("#rightBox"));

         //Create the middle Box
         $("#trafficLights").append($(document.createElement("a-entity"))
                     .attr({
                              id:"middleBox",
                              geometry:"primative: box",
                              material: "color: grey",
                              position:" 10.83 2 0",
                              scale:"0 0 0",
                              animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 1.5 1.5 1.5"
                   })
                 );
         //Add the box-toggle function
         toggleFunction($("#middleBox"));
         //Create the left box
         $("#trafficLights").append($(document.createElement("a-entity"))
                     .attr({
                              id:"leftBox",
                              geometry:"primative: box",
                              material: "color: orange",
                              position:" 10.83 2 -2",
                              scale:"0 0 0",
                              animation__scale:"property: scale; dir: normal; dur: 4000; easing: easeInSine; loop: false; to: 1.5 1.5 1.5"
                   })
                 );
          //Add the box-toggle function
          toggleFunction($("#leftBox"));

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

           } //--end of code block
         },8000);// end of add sound to hidden entity
         });
       },700);//end of remove startup elements and add question block
    });
  }//end if init function ------------------//
});//end of "foo" component ----------------//
