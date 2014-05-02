$(document).ready(function(){

	//Match Heights of Elements
	function matchHeight(){

		//Run for each instance of .match-height
		$('.match-height').each(function(){

			var elem = $(this);

			if($(window).width() >= elem.attr('data-match-height') || !elem.attr('data-match-height')) {

				var match = elem.find('.match'); // Elements to apply Height to
				var matchHalf = elem.find('.match-half'); // Additional Class to apply half the height
				var matchCount = match.length;
				var matchHeight = match.outerHeight();

				//Set largest Height out of all Child .match
				for(var i=0;i<match.length;i++){
					$(match, elem).each(function(){
						
						//Test if current stored height is smaller, if so set new height
						if(matchHeight < $(this).outerHeight()) {
							matchHeight = $(this).outerHeight();						
						}

					});
				}

				//Apply Min Height to all Child .match
				match.css('min-height', matchHeight);
				//Apply Half Min Height to all Child .match
				matchHalf.css('min-height', matchHeight / 2);

			}

		});
	}
	//Run Function
	matchHeight();

});