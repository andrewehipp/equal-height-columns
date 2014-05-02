(function ( $ ) {
 
	$.fn.matchHeight = function(options) {
	
        // Defualt Option Names.
		var options = $.extend({
            children: "match",
            height: "min-height"
        }, options );

	// Run for each instance
	return this.each(function() {

		//Check if match height daya is set and if it's large than window size
		if($(window).width() >= $(this).attr('data-match-height') || !$(this).attr('data-match-height')) {

			var match = $(this).find('.' + options.children); // Elements to apply Height to
			var matchCount = match.length;
			var matchHeight = match.outerHeight();

			//Set largest Height out of all Child .match
			$(match, $(this)).each(function(){
				
				//Test if current stored height is smaller, if so set new height
				if(matchHeight < $($(this)).outerHeight()) {
					matchHeight = $($(this)).outerHeight();						
				}

			});

			$(match, $(this)).each(function(){
				
				//Test if current stored height is smaller, if so set new height
				if($(this).attr('data-match-height-portion')) {
					$(this).css(options.height, matchHeight * $(this).attr('data-match-height-portion'));
				} else {
					$(this).css(options.height, matchHeight);
				}

			});

		}

    });


	};
  
}( jQuery ));