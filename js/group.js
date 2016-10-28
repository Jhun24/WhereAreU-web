$(document).ready(function() {
    $('#fullpage').fullpage({

      controlArrows:false,
    });
});

$(function(){
	$("#set").click(function(){
		$("#toggle").animate({});
	});

	function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
});