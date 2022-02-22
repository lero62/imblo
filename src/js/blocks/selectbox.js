

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



