(function ( $ ) {
 
	$.fn.matchHeight = function(options) {
	
        // Defualt Options
		var options = $.extend({
            children: "match",
            height: "min-height"
        }, options );

		// Run for each instance
		return this.each(function() {

			//Parent Container
			var container = $(this);

			//Check if match height data is set and if it's large than window size
			if($(window).width() >= container.attr('data-match-height') || !container.attr('data-match-height')) {

				var match = $(this).find('.' + options.children); // Elements to apply Height to
				var matchHeight = 0;

				//Set largest Height out of all Child .match
				$(match, container).each(function(){
					
					//Test if current stored height is smaller, if so set new height
					if(matchHeight < $($(this)).outerHeight()) {
						matchHeight = $($(this)).outerHeight();						
					}

				});

				// Apply Heights
				$(match, container).each(function(){
					
					// If a data height portion exists use it
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