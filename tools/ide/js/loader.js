$(document).ready(function(){
  var source;
  
  window.onBespinLoad = function(){
    window.bespin = document.getElementById("editor").bespin
  };
  
  function runSketch() {
     //use sancho's PJSBox Bookmarklet
     var e=document.createElement('script');
     e.setAttribute('type','text/javascript');
     e.setAttribute('src','js/pjs-box.min.js?'+ new Date());
     document.body.appendChild(e);
  };



  $('#Run').click(function(){runSketch();});


});
