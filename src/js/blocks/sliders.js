// Swiper Slider
// ---------------------------------------------- 
if ($('._grid-swiper').length) {
	var promo = new Swiper('._grid-swiper .swiper-container', {
		// Optional parameters
		loop: true,
		slidesPerView: 6,
		slidesPerGroup: 6,
		spaceBetween: 30,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {


			100: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 16,
			},
			575: {
				spaceBetween: 30,
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			
			768: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				
			},

			992: {
				slidesPerView: 5,
				slidesPerGroup: 5,
			},
			1260: {
				slidesPerView: 6,
				slidesPerGroup: 6,
			},
		}

	})
};


if ($('.news-slider').length) {
	var news = new Swiper('.news-slider .swiper-container', {
		// Optional parameters
		loop: false,
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 30,
		
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {


			100: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 16,
			},

			575: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 30,
			},

		
		}

	})
};


if ($('._news-swiper').length) {
	var tour = new Swiper('._news-swiper .swiper-container', {
		// Optional parameters
		loop: false,
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 30,
		
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {

			100: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 16,
			},
			575: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 30,
			},

			992: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},

			1260: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},

		
		}

	})
};

if ($('.card-gallery').length) {
	var cardGallery = new Swiper('.card-gallery .swiper-container', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		effect: 'fade',
		spaceBetween: 0,
		autoHeight: true,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		

	})
};



if ($('.reviews-slider').length) {
	var reviews = new Swiper('.reviews-slider .swiper-container', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 30,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,

		},
		breakpoints: {

			100: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 20,
			},
			575: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				
			},
			992: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},

		
		}

	})
};

if ($('.cards-week').length) {
	var reviews = new Swiper('.cards-week .swiper-container', {
		// Optional parameters
		loop: false,
		slidesPerView: 3,
		spaceBetween: 30,
		slidesPerColumn: 2,
		slidesPerColumnFill: 'row',
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {

			100: {
				slidesPerView: 1,
				slidesPerColumn: 2,
				slidesPerColumnFill: 'row',
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				slidesPerColumnFill: 'row',
				spaceBetween: 30,
			},
			1260: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerColumnFill: 'row',
				
			},

		
		}

	})
};


if ($('.interesting-wrap').length) {
	var bambreakpoint = window.matchMedia( '(min-width:576px)' );
	var blogArhiveSwiper;

	$('.interesting-wrap__controls').hide()

	var breakpointChecker = function() {

	 if ( bambreakpoint.matches === true ) {
	  if ( blogArhiveSwiper !== undefined ) {
	  	blogArhiveSwiper.destroy( true, true );
	  	$('.interesting-wrap__controls').hide()
	  }
	  return;
	   } else if ( bambreakpoint.matches === false ) {

	     return enableSwiper();
	   }
	};


	var enableSwiper = function() {
		blogArhiveSwiper = new Swiper ('.interesting-wrap .swiper-container', {
			loop: true,
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 20,
			watchOverflow: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		
		});

		$('.interesting-wrap__controls').show()
	};

	bambreakpoint.addListener(breakpointChecker);
	breakpointChecker();
}


if ($('.page-article-swiper').length) {
	var reviews = new Swiper('.page-article-swiper .swiper-container', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
	
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".page-article-swiper__next",
			prevEl: ".page-article-swiper__prev",
		},
		pagination: {
			el: ".page-article-swiper__pagination",
			clickable: true,
		},
		

	})
};