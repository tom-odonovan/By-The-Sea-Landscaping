(function($) {
	"use strict";
	
	$.fn.portfolio_inside_isotop = function(columns) {
		return this.each(function() {
			var $window = $(window);
			var $container = $(this);
			var $els = $('li', $container);
			var columnsWidth, defaultColumnsNum;

			if (columns == undefined || parseInt(columns) < 0) {
				columns = 3;
			}
			
			defaultColumnsNum = columns;
			
			var setColumns = function () {
				var width = $container.width();

				switch(true) {
					case (width > 780): columns = defaultColumnsNum; break;
					case (width > 400): columns = 2; break;
					default: columns = 1;
				}

				columnsWidth = Math.floor($container.width() / columns);
				$els.width(columnsWidth);
			};

			var run_isotope = function() {
				setColumns();

				$container.imagesLoaded(function () { 
					$container.isotope({ 
						itemSelector : 'li',
						masonry: {
							columnWidth: columnsWidth
						},
						resizable : true,
						layoutMode : 'masonry',
					});
				});
			};

			run_isotope();
			$window.on('resize',run_isotope);
		});
	};
	
})(jQuery);