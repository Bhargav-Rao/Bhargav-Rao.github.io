$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
  initialize();
});


function initialize() {

  $(".hideabs").click(hide)

  $(".readabs").click(show)

  function show(ele){
    var newid = "#"+ele.target.id+"para"
    $("#"+ele.target.id).html("Hide Abstract")
    $(newid).css({"display":"block"})
    $("#"+ele.target.id).removeClass("readabs")
    $("#"+ele.target.id).addClass("hideabs")
    $("#"+ele.target.id).click(hide)
  }

  function hide(ele){
    var newid = "#"+ele.target.id+"para"
    $("#"+ele.target.id).html("Show Abstract")
    $(newid).css({"display":"none"})
    $("#"+ele.target.id).addClass("readabs")
    $("#"+ele.target.id).removeClass("hideabs")
    $("#"+ele.target.id).click(show)
  }


  if(google){
    var mapProp = {
      center:new google.maps.LatLng(12.928130, 77.573091),
      zoom:18,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
     var marker = new google.maps.Marker({
      position: new google.maps.LatLng(12.928130, 77.573091),
      map: map,
      title: 'My Home'
    });
    google.maps.event.addDomListener(window, 'load', initialize);
  }

}
