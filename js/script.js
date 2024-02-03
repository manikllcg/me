$(document).ready(function(){
	$('.myCarosul').owlCarousel({
		items: 3,
		margin: 30,
		loop:true,
		// center: true,
		mouseDrag: true,
		touchDrag: true,
		startPosition: 2,
		nav: true,

		autoplayHoverPause: true,
		smartSpeed: 110,
		
		
		
		
				smartSpeed: 110,
		responsive: {
			767: {
				items: 3
			},
			575: {
				items: 2
			},
			320: {
				items: 1
			},
			
		},
	});
});
$(document).ready(function(){
    
    $('.mobile-nav').click(function(){
       $('.main-menu').toggleClass('Navclose');
    });
    $('.close-mobile-nav').click(function(){
       $('.main-menu').addClass('Navclose');
    });
	
})





