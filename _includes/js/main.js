jQuery(document).ready(function($){
   	//open-close submenu on mobile
    $('.nav-trigger').on('click', function(event){
    	event.preventDefault();
        $('#main-nav-ul').slideToggle();        
    });
});
