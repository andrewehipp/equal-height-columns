(function ( $ ) {
 
	$.fn.matchHeight = function(options) {
	
        // Defualt Options
		var options = $.extend({
            children: "match",
            height: "min-height",
            breakpoint: "768"
        }, options );

		// Run for each instance
		return this.each(function() {

			//Parent Container
			var $container = $(this);
			var $winWidth = $(window).width();

			//Check if match height data is set and if it's large than window size
			if(($winWidth >= $container.attr('data-mh-breakpoint') || !$container.attr('data-mh-breakpoint')) && !($winWidth < options.breakpoint)) {

				var $match = $(this).find('.' + options.children); // Elements to apply Height to
				var $matchHeight = 0;

				//Set largest Height out of all Child .match
				$($match, $container).each(function(){
					
					var $newHeight = $(this).outerHeight();

					//Test if current stored height is smaller, if so set new height
					if($matchHeight < $newHeight) {
						$matchHeight = $newHeight;						
					}

				});

				// Apply Heights
				$($match, $container).each(function(){
					
					// If a data height portion exists use it
					if($(this).attr('data-mh-scale')) {
						$(this).css(options.height, $matchHeight * $(this).attr('data-mh-scale'));
					} else {
						$(this).css(options.height, $matchHeight);
					}

				});

			}

	    });

	};
  
}( jQuery ));