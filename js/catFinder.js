$(document).ready(function() {


	$( "#howItWorks" ).click(function() {
 		 $( "header .bottom" ).fadeIn(800);
	});

	$("#close").click(function(e) { //Actually clicked
        		console.log("Click");
        		$("header .bottom").fadeOut(800);
	});

	$( "input#reviewCatButton" ).click(function() {
 		 $( ".catMainAdReview").fadeIn(800);
 		 $( ".lostCatForm").css('width', '50%');
 		 $('input#reviewCatButton').hide();
 		 $("#submitCatButton").show();
 		 return false;
	});

});



