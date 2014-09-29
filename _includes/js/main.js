jQuery(document).ready(function($){
   	//open-close submenu on mobile
    $('.nav-trigger').on('click', function(event){
    	event.preventDefault();
        $('#main-nav-ul').slideToggle();        
    });

    $(".side-nav-trigger").on('click', function(event){
		event.preventDefault();

		selector = $(this).parent().find('span > i');

		if (selector.hasClass("fa-angle-down"))
			selector.removeClass("fa-angle-down").addClass("fa-angle-right");
		else
			selector.removeClass("fa-angle-right").addClass("fa-angle-down");
		
		headingSelector = ulSelector = $(this).parent();

		headingSelector.toggleClass('non-active-heading active-heading');

		ulSelector = $(this).parent().next('ul');		

		ulSelector.slideToggle("slow");		

    });
});
