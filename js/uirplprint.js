/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */



(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    var appendPart = function(){
		_.templateSettings.variable = "rc";

	    // Grab the HTML out of our template tag and pre-compile it.
	    var template = _.template(
	        $( "script#receipt-item" ).html()
	    );

	    // Render the underscore template and inject it
	    // in our current DOM.
	    $( ".receipt-items" ).append(
	        template()
	    );

	    $(".remove-part").click(function(e){
			$(event.currentTarget).closest(".receipt-item-wrapper").remove()
		})
	}

	appendPart();

	$(".add-part").click(function(){
		appendPart();
	})

})(jQuery); // End of use strict
