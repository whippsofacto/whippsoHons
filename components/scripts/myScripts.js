console.log("hello world");
//register the use of the extras
extras.registerAll();
AFRAME.registerComponent('log', {
  schema: {type: 'string'},
  init: function () {
    var stringToLog = this.data;
    console.log(stringToLog);
  }
});
