$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
  initialize();
});


function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(12.928130, 77.573091),
    zoom:18,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  google.maps.event.addDomListener(window, 'load', initialize);
}
