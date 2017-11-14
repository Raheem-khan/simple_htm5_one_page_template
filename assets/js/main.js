(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        


    });
		
	$(window).on('scroll',function() {
var scroll = $(window).scrollTop();
if (scroll < 40){  
    $("#s-header").removeClass("sticky");
  }else{
    $("#s-header").addClass("sticky");
  }
});


    jQuery(window).load(function(){

        
    });


}(jQuery));	