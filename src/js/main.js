svg4everybody();

$(window).on('load', function () {
	$('body').removeClass('loaded');
});

$(function () {
	$(document).on('click', function (event) {

		if ($(event.target).closest("[data-toltipe]").length) {
			return;
		} else {
			$('[data-toltipe]').removeClass('_open')
		}
		event.stopPropagation();
	});


	// Mobile Menu 
	// ---------------------------------------------- 
	function mobileMenu() {
		var mmNavbar = $('.mobile-navbar'),
			mmClose = $('.mobile-navbar__close'),
			mmContainer = $('.mobile-navbar__container');

		$('.mm-toggle').on('click', function () {
			$('.mm-toggle.burger').toggleClass('is-active')
			mmNavbar.toggleClass('is-open');
			$('body').toggleClass('lock')
		})

	}
	mobileMenu();


	$('.mm-item > a').on('click', function () {
		$('.mm-item').not($(this).parent()).removeClass('is-active')
		$(this).parent().toggleClass('is-active')

		return false;
	})


	$('.ct-item > a').on('click', function () {
		$('.ct-item').not($(this).parent()).removeClass('is-active')
		$(this).parent().toggleClass('is-active')

		return false;
	})


	$('body').on('click', '._like', function () {
		$(this).toggleClass('_active')
		return false;
	})

	$('body').on('click', '._share', function () {
		$(this).toggleClass('_active')
		$(this).find('.dropdown-share').slideToggle(0)
		return false;
	})

	$(document).mouseup(function (e) {

		if (!$("._share").is(e.target) && $("._share").has(e.target).length === 0) {
			$("._share").removeClass('_active')
			$('.dropdown-share').slideUp(0)
		}

		if (!$(".search-int").is(e.target) && $(".search-int").has(e.target).length === 0) {
			$(".search-int").removeClass('is-open')
			$('.open-search').removeClass('is-active')
		}
	});



	$('.dropdown-button').on('click', function () {
		$('.dropdown').not($(this).parent()).removeClass('is-open')
		$(this).parent('.dropdown').toggleClass('is-open')

		return false;

	})

	$('.dropdown-menu > li').on('click', function () {
		var thisText = $(this).html();
		$(this).parents('.dropdown').removeClass('is-open').find('.dropdown-button').html(thisText);
		$(this).parents('.dropdown').find('.dropdown-menu li').removeClass('is-active')
		$(this).addClass('is-active')
		return false;

	})



	$('.ct-filter-item > a').on('click', function () {
		$('.ct-filter-item').not($(this).parent()).removeClass('is-active')
		$(this).parent().toggleClass('is-active')

		return false;
	})

	$('.cf-item > a ').on('click', function () {
		$(this).closest('.cf-item').toggleClass('is-open')
		return false;
	})


	$('.ct-filter-option > a').on('click', function () {
		var thisText = $(this).html();
		$(this).parents('.ct-filter-item').find('.ct-filter-option').removeClass('is-active')
		$(this).parent().addClass('is-active')
		$(this).parents('.ct-filter-item').removeClass('is-active').addClass('is-selected')
		$(this).parents('.ct-filter-item').children('a').html(thisText);
		return false;

	})

	// Favorite
	$('.favorite').on('click', function () {
		$(this).toggleClass('_active')
		return false;
	})


	//Toggle

	$('._toggle').on('click', function () {
		$('._toggle').not($(this)).removeClass('is-active')
		$(this).addClass('is-active')
		return false;
	})

	function openSearch() {
		$('.open-search').on('click', function () {
			$(this).toggleClass('is-active').parents('.search-int').toggleClass('is-open')

			return false;
		})

	}
	openSearch();

	function openMoreBlock() {
		$('.i-btn').on('click', function () {
			namebl = $(this).html();
			dataNameBl = $(this).data('title');
			if (namebl == dataNameBl) {
				$(this).html('Cвернуть');
				$(this).parents('.i-wrapper').find('.i-hidden-iphone').removeClass('i-hidden-iphone').addClass('i-visible-xs')
			} else {
				$(this).html(dataNameBl);
				$(this).parents('.i-wrapper').find('.i-visible-xs').removeClass('i-visible-xs').addClass('i-hidden-iphone')
			}

			return false;
		})
	}
	openMoreBlock();



	// Открыть отзывы в каталоге
	$('._open-comment').on('click', function () {
		$(this).toggleClass('_active')
		if ($(this).closest('.master')) {
			$(this).closest('.master').find('.master__reviews').slideToggle(0)
			$(this).closest('.master').find('.master__contacts').slideUp(0)
			$(this).closest('.master').find('._open-contacts').removeClass('_active')
		}
		if ($(this).closest('.card')) {
			$(this).closest('.card').find('.card__reviews').slideToggle(0)
			$(this).closest('.card').find('.card__contacts').slideUp(0)
			$(this).closest('.card').find('._open-contacts').removeClass('_active')
		}
		return false;
	})

	$('._open-contacts').on('click', function () {
		$(this).toggleClass('_active')
		if ($(this).closest('.master')) {
			$(this).closest('.master').find('.master__reviews').slideUp(0)
			$(this).closest('.master').find('.master__contacts').slideToggle(0)
			$(this).closest('.master').find('._open-comment').removeClass('_active')
		}
		if ($(this).closest('.card')) {
			$(this).closest('.card').find('.card__reviews').slideUp(0)
			$(this).closest('.card').find('.card__contacts').slideToggle(0)
			$(this).closest('.card').find('._open-comment').removeClass('_active')
		}
		return false;
	})



	// Скрыть комментарии  в каталоге
	$('._toggle-comment').on('click', function () {
		$(this).toggleClass('active')
		if ($(this).hasClass('active')) {
			if ($(this).closest('.master')) {
				$(this).closest('.master').find('.comment-list').slideUp(0)
			}
			if ($(this).closest('.card')) {
				$(this).closest('.card').find('.comment-list').slideUp(0)
			}
			$(this).html('Показать комментарии')
		} else {
			if ($(this).closest('.master')) {
				$(this).closest('.master').find('.comment-list').slideDown(0)
			}
			if ($(this).closest('.card')) {
				$(this).closest('.card').find('.comment-list').slideDown(0)
			}
			$(this).html('Скрыть комментарии')
		}
		return false;
	})





	// Toltipe 
	// $('[data-toltipe]').on('click', function () {
	// 	$(this).toggleClass('_open')
	// 	return false;
	// })

	// if($('[data-toltipe]')) {
	// 	$(window).on('resize', function(){
	// 		if($('[data-toltipe]').hasClass('_open')) {
	// 			$('[data-toltipe]').removeClass('_open')
	// 		}
	// 	});
	// }



	// Открыть отзывы
	$('.js-open-comment').on('click', function () {
		$(this).toggleClass('is-active')
		$('.comment-block-form').slideUp(0)
		$('.comment-block').slideToggle(0)

		return false;
	})

	// Открыть форму для добавления отзыва
	$('.js-open-reviews').on('click', function () {
		$(this).toggleClass('is-active')
		$('.comment-block').slideUp(0)
		$('.comment-block-form').slideToggle(0)

		return false;
	})





	function openNavAndFilter() {
		$('.open-nav').on('click', function () {

			$(this).toggleClass('is-active')
			$('.fix-filter').slideUp('200')
			$('.open-filter').removeClass('is-active')
			$('.fix-nav').slideToggle('200')
			return false;
		})
		$('.open-filter').on('click', function () {
			$('.fix-nav').slideUp('200')
			$('.open-nav').removeClass('is-active')
			$(this).toggleClass('is-active')
			$('.fix-filter').slideToggle('200')
			return false;
		})
	}
	openNavAndFilter();


	$("._open-block").on('change', function () {
		var dataName = $(this).data('name')
		if ($(this).is(':checked')) {
			$('.' + dataName).slideDown()
		} else {
			$('.' + dataName).slideUp()
		}
	})



	$('.js-minus').click(function () {
		var $input = $(this).parent().find('.counter__input');
		var count = parseInt($input.text()) - 1;
		count = count < 1 ? 1 : count;
		$input.text(count);
		$input.change();
		return false;
	});
	$('.js-plus').click(function () {
		var $input = $(this).parent().find('.counter__input');
		$input.text(parseInt($input.text()) + 1);
		$input.change();
		return false;
	});


	if ($('.range-slider').length) {
		$(".range-slider").slider({
			range: true,
			min: 1,
			max: 100,
			values: [4, 52],
			slide: function (event, ui) {
				$(".rangefrom").val(ui.values[0].toLocaleString());
				$(".rangeto").val(ui.values[1].toLocaleString());

			}
		});
		$(".rangefrom").on('change', function () {
			$(".range-slider").slider('values', 0, $(this).val());
		});
		$(".rangeto").on('change', function () {
			$(".range-slider").slider('values', 1, $(this).val());
		});
	};

	$('a.anchor').bind('click.smoothscroll', function () {
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body,html').animate({ scrollTop: bl_top }, 600);
		return false;
	});


	if ($('[data-toltipe]').length > 0) {
		$('[data-toltipe]').tooltipster({
			functionInit: function (instance, helper) {
				var content = $(helper.origin).find('.toltipe').detach();
				instance.content(content);
			},
			minWidth: 150,
			maxWidth: 300,
			distance: 10,
			delay: 0,
			trigger: 'custom',

			triggerOpen: {
				mouseenter: true,
				touchstart: true,

			},
			triggerClose: {
				scroll: true,
				click: true,
				mouseleave: true,
			},



		})
	}

	// magnificPopup 
	// ---------------------------------------------- 
	if ($(".open-popup").length > 0) {
		$('.open-popup').magnificPopup({
			type: 'inline',
			midClick: true,

		});
	}

	if ($(".p-gallery").length > 0) {
		$('.p-gallery').each(function () {
			$(this).magnificPopup({
				delegate: '.img-gallery-info',
				type: 'image',
				image: {
					titleSrc: false,
					markup: '<div class="mfp-figure mfp-figure-info">' +
						'<div class="mfp-close"></div>' +
						'<div class="popup-gallery">' +
						'<div class="popup-gallery__img">' +
						'<div class="mfp-img"></div>' +
						'</div>' +
						'<div class="popup-gallery__info">' +

						'</div>' +
						'</div>' +
						'</div>',
				},
				callbacks: {

					change: function () {
						$(this.content)
							.find('.popup-gallery__info')
							.html(

								$(this.currItem.el).next().html()

							);


					}
				},
				gallery: {
					enabled: true
				}
			});
		});
	}

	if ($(".i-gallery").length > 0) {
		$('.i-gallery').each(function () {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',

				gallery: {
					enabled: true
				}
			});
		});
	}


	if ($('.grid').length > 0) {
		$('.grid').masonry({

			itemSelector: '.grid-item',

			columnWidth: '.grid-sizer',
			percentPosition: true,

		})
	}

	if ($('.datepicker-here').length > 0) {
		new AirDatepicker('.datepicker-here', {
			selectedDates: ['2022-06-25']
		})
	}

	if ($('.datepicker-input').length > 0) {
		new AirDatepicker('.datepicker-input', {
			minDate: [new Date()],
			autoClose: true,
		})
	}

	if ($('.datepicker-input2').length > 0) {
		new AirDatepicker('.datepicker-input2', {
			minDate: [new Date()],
			autoClose: true,
		})
	}


	// Mask Phone 
	// ---------------------------------------------- 
	if ($("input.tel").length > 0) {

		$.each($('input.tel'), function (index, val) {
			$(this).attr('type', 'tel');
			$(this).focus(function () {
				$(this).inputmask('+357 999-99-99', {
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					showMaskOnHover: false,

				});

			});
		});

	}

	@@include('./blocks/sliders.js')
	@@include('./blocks/selectbox.js')

	@@include('./blocks/dynamic.js')
	@@include('./blocks/upload_file.js')

});



