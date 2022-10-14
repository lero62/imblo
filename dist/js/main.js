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

	$('.ct-filter-category > li').on('click', function () {
		$('.ct-filter-category > li').not($(this)).removeClass('is-active')
		$(this).addClass('is-active')
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
	

const selectboxHeads = document.querySelectorAll('.selectbox__head');
const selectboxListElements = document.querySelectorAll('.selectbox__drop ul li');

if(selectboxHeads.length > 0) {
	
	selectboxHeads.forEach( item => {
		item.addEventListener('click', selectboxOpen)
	});

	selectboxListElements.forEach( item => {
		item.addEventListener('click', selectboxChange)
	})
}

// Изменяем значение селекта
function selectboxChange() {
	const thisText = this.innerHTML;
	const thisSelectbox = this.closest('.selectbox');
	const selectboxText = thisSelectbox.querySelector('.selectbox__text');
	const selectboxListEls = thisSelectbox.querySelectorAll('li');


	if(selectboxText.classList.contains('placeholder') ) {
		selectboxText.classList.remove('placeholder')
	}

	if(thisSelectbox.classList.contains('_open')) {
		thisSelectbox.classList.remove('_open')
	} 

	thisSelectbox.classList.add('_change')
	selectboxText.innerHTML = thisText;

	selectboxListEls.forEach( item => {
		item.classList.remove('_selected')
	})
	
	this.classList.add('_selected')
}

// Открытие селекта
function selectboxOpen() {
	const selectbox = this.closest('.selectbox');
	if(!selectbox.classList.contains('_open')) {
		selectboxClose();
		selectbox.classList.add('_open')
	} else {
		selectbox.classList.remove('_open')
	}
}

// Закрытие селекта
function selectboxClose() {
	document.querySelectorAll('.selectbox').forEach(item => item.classList.remove('_open'));
}

document.addEventListener('click', function (e) {
	if (!e.target.closest(".selectbox")){
		selectboxClose()
	}
})





	
// Dynamic
// data-da=calss, index(last, first), media
// ---------------------------------------------- 

var originalPositions = [];
var daElements = document.querySelectorAll('[data-da]');
var daElementsArray = [];
var daMatchMedia = [];
//Заполняем массивы
if (daElements.length > 0) {
	var number = 0;
	for (var index = 0; index < daElements.length; index++) {
		var daElement = daElements[index];
		var daMove = daElement.getAttribute('data-da');
		if (daMove != '') {
			var daArray = daMove.split(',');
			var daPlace = daArray[1] ? daArray[1].trim() : 'last';
			var daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
			var daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
			var daDestination = document.querySelector('.' + daArray[0].trim())
			if (daArray.length > 0 && daDestination) {
				daElement.setAttribute('data-da-index', number);
				//Заполняем массив первоначальных позиций
				originalPositions[number] = {
					"parent": daElement.parentNode,
					"index": indexInParent(daElement)
				};
				//Заполняем массив элементов 
				daElementsArray[number] = {
					"element": daElement,
					"destination": document.querySelector('.' + daArray[0].trim()),
					"place": daPlace,
					"breakpoint": daBreakpoint,
					"type": daType
				}
				number++;
			}
		}
	}
	dynamicAdaptSort(daElementsArray);

	//Создаем события в точке брейкпоинта
	for (var index = 0; index < daElementsArray.length; index++) {
		var el = daElementsArray[index];
		var daBreakpoint = el.breakpoint;
		var daType = el.type;

		daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
		daMatchMedia[index].addListener(dynamicAdapt);
	}
}
//Основная функция
function dynamicAdapt(e) {
	for (var index = 0; index < daElementsArray.length; index++) {
		var el = daElementsArray[index];
		var daElement = el.element;
		var daDestination = el.destination;
		var daPlace = el.place;
		var daBreakpoint = el.breakpoint;
		var daClassname = "_dynamic_adapt_" + daBreakpoint;

		if (daMatchMedia[index].matches) {
			//Перебрасываем элементы
			if (!daElement.classList.contains(daClassname)) {
				var actualIndex = indexOfElements(daDestination)[daPlace];
				if (daPlace === 'first') {
					actualIndex = indexOfElements(daDestination)[0];
				} else if (daPlace === 'last') {
					actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
				}
				daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
				daElement.classList.add(daClassname);
			}
		} else {
			//Возвращаем на место
			if (daElement.classList.contains(daClassname)) {
				dynamicAdaptBack(daElement);
				daElement.classList.remove(daClassname);
			}
		}
	}
	
}

//Вызов основной функции
dynamicAdapt();

//Функция возврата на место
function dynamicAdaptBack(el) {
	var daIndex = el.getAttribute('data-da-index');
	var originalPlace = originalPositions[daIndex];
	var parentPlace = originalPlace['parent'];
	var indexPlace = originalPlace['index'];
	var actualIndex = indexOfElements(parentPlace, true)[indexPlace];
	parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
}
//Функция получения индекса внутри родителя
function indexInParent(el) {
	var children = Array.prototype.slice.call(el.parentNode.children);
	return children.indexOf(el);
}
//Функция получения массива индексов элементов внутри родителя 
function indexOfElements(parent, back) {
	var children = parent.children;
	var childrenArray = [];
	for (var i = 0; i < children.length; i++) {
		var childrenElement = children[i];
		if (back) {
			childrenArray.push(i);
		} else {
			//Исключая перенесенный элемент
			if (childrenElement.getAttribute('data-da') == null) {
				childrenArray.push(i);
			}
		}
	}
	return childrenArray;
}
//Сортировка объекта
function dynamicAdaptSort(arr) {
	arr.sort(function (a, b) {
		if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
	});
	arr.sort(function (a, b) {
		if (a.place > b.place) { return 1 } else { return -1 }
	});
}

	

var maxFileSize = 5 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
var queue = {};
var imagesList = $('.uploadImagesList');
var form = $('form#uploadImages');


$('.addImages').on('change', function (event) {
   var files = event.target.files;
   var filesMax = $(this).data('max');
   
   if (files.length <= filesMax && $(this).closest('.upload').find('.upload-images__item').length < filesMax) {
      for (var i = 0; i < files.length; i++) {
          var file = files[i];
          var output = $(this).closest('.upload').find('.upload-images');
			

         if ( !file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
				
				$(this).closest('.upload').find('.upload__input').after('<div class="text-error">Фотография должна быть в формате jpg, png или gif</div>	')
				continue;
			} else {
				$(this).closest('.upload').find('.text-error').remove();
			}

			if ( file.size > maxFileSize ) {
				$(this).closest('.upload').find('.upload__input').after('<div class="text-error">Вы загрузили слишком большое фото. Рекомендуемый размер фото не более 5 МБ</div>	')
	
				continue;
			} else {
				$(this).closest('.upload').find('.text-error').remove();
			}

         var picReader = new FileReader();
         picReader.addEventListener("load", function (event) {
             var picFile = event.target;

             var div = document.createElement("div");
            $(div).addClass('upload-images__item').html("<div class='upload-images__preview'><img src='" + picFile.result + "' alt='" + picFile.name + "'></div>"+
										"<div class='upload-images__remove'>удалить</div>")
             output.append(div, null);
             $(div).data('id', file.name);
            
             queue[file.name] = file;

         });
         picReader.readAsDataURL(file);
			 

      }

       imagesList.on('click', '.upload-images__remove', function () {
         var item = $(this).closest('.upload-images__item'),
         	 id = item.data('id');

         delete queue[id];
             
         item.remove();
         
     });

   	this.value = '';
   } else {
   	$(this).closest('.upload').find('.upload__input').after('<div class="text-error">Максимальное количество загруженых файлов не должно привышать ' + filesMax+'</div>	')
   
   	this.value = '';
   }
});


$('.addImage').on('change', function (event) {
   var files = this.files;
	
	   for (var i = 0; i < files.length; i++) {
	       var file = files[i];
	       var output = $(this).closest('.upload').find('.upload-images');
	       
			if ( !file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
				
				$(this).closest('.upload').find('.upload__input').after('<div class="text-error">Фотография должна быть в формате jpg, png или gif</div>	')
				continue;
			} else {
				$(this).closest('.upload').find('.text-error').remove();
			}

			if ( file.size > maxFileSize ) {
				$(this).closest('.upload').find('.upload__input').after('<div class="text-error">Вы загрузили слишком большое фото. Рекомендуемый размер фото не более 5 МБ</div>	')
	
				continue;
			} else {
				$(this).closest('.upload').find('.text-error').remove();
			}
			if(!file.size > maxFileSize || file.type.match(/image\/(jpeg|jpg|png|gif)/)){
				output.addClass('_change')
			} else {
				output.removeClass('_change')
			}

			var picReader = new FileReader();
			picReader.addEventListener("load", function (event) {
				 var picFile = event.target;

				 var div = output.find('.upload-images__item');
				
				 output.find('img').attr('src', picFile.result)
				$(div).data('id', file.name);

				queue[file.name] = file;

			});
			picReader.readAsDataURL(file);



			imagesList.on('click', '.upload-images__remove', function () {
				var item = $(this).closest('.upload-images__item'),
				 id = item.data('id');

				delete queue[id];
				 
				item.closest('.upload-images').removeClass('_change').find('img').attr('src', ' ');

			});

			this.value = '';
	}

});

// Отправка формы
// form.on('submit', function(event) {

//    var formData = new FormData(this);

//    for (var id in queue) {
//        formData.append('images[]', queue[id]);
//    }

//    $.ajax({
//        url: $(this).attr('action'),
//        type: 'POST',
//        data: formData,
//        async: true,
//        success: function (res) {
//            alert(res)
//        },
//        cache: false,
//        contentType: false,
//        processData: false
//    });

//    return false;
// });

     // Удаление фотографий



});



