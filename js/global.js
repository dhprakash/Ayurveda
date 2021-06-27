
$(function(){

	// Scroller
	$(".menuBox li a").click(function(event){

		$(".menuBox li").removeClass("active");
		$(this).parent().addClass("active");

		var object = $($(this).attr("href"));
		var pos = object.position();
		var scroller = pos.top - $("#headerCntr").outerHeight();

		$("html, body").stop().animate({
			scrollTop: scroller
		},{
			duration: 	500

		});

		event.preventDefault();

		return false;
	});

	$( window ).scroll( function() {
		var scrollTop = $( window ).scrollTop();
		if ( scrollTop > 80 ) {
			$( '#headerCntr' ).addClass( 'scrolled' );
		} else {
			$( '#headerCntr' ).removeClass( 'scrolled' );
		}
	} );


});







$(document).on('ready', function() {
      $('.lazy').slick({
        dots: true,
		prevArrow: false,
    	nextArrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplay:false,
		autoplaySpeed:3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true                
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 490,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
	
	
	 $('.product').slick({
        dots: true,
		prevArrow: false,
    	nextArrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
		autoplay:false,
		autoplaySpeed:3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true                
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 490,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
  
    });











