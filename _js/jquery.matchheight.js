(function ( $ ) {
 
	$.fn.matchHeight = function(options) {
	
        // Defualt Options
		var options = $.extend({
            children: "match",
            breakpoint: "768"
        }, options );

        var $matchHeight = $(this);

		$(window).resize(function(){

			// Run for each instance
			return $matchHeight.each(function() {

				//Parent Container
				var $container = $(this);
				var $winWidth = $(window).width();

				var $match = $(this).find('.' + options.children); // Elements to apply Height to
				var $matchHeight = 0;

				//Check if match height data is set and if it's large than window size
				if(($winWidth >= $container.attr('data-mh-breakpoint') || !$container.attr('data-mh-breakpoint')) && !($winWidth < options.breakpoint)) {


					//Set largest Height out of all Child .match
					$($match, $container).each(function(){
						
						// Store new height after clearing and checking new height
						var $newHeight = $(this).css('min-height', 'initial').outerHeight();

						//Test if current stored height is smaller, if so set new height
						if($matchHeight < $newHeight) {
							$matchHeight = $newHeight;						
						}

					});

					// Apply Heights
					$($match, $container).each(function(){
						
						// If a data height portion exists use it
						if($(this).attr('data-mh-scale')) {
							$(this).css('min-height', $matchHeight * $(this).attr('data-mh-scale'));
						} else {
							$(this).css('min-height', $matchHeight);
						}

					});

				// If smaller than set and defualt breakpoints
				} else {


					//Loop through all .match
					$($match, $container).each(function(){
						
						// Set no min-height
						$(this).css('min-height', 'initial');


					});


				}

			});

		});
		$(window).resize();

	};
  
}( jQuery ));