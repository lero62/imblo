
// Selectbox
// =============================================================
$selectbox = $('.selectbox');
$selectboxHead = $('.selectbox__head');
$selectboxDropdown = $('.selectbox__drop');
$selectboxTitle = $('.selectbox__text');



$selectboxHead.on('click', function(){
	var selectboxParent = $(this).closest($selectbox);
	
	$selectbox.not($(selectboxParent)).removeClass('_open')
	
	if(!$(selectboxParent).hasClass('_open')) {
		openSelectbox(selectboxParent)
	} else {
		closeSelectbox(selectboxParent)
	}
	
	return false;
})


$($selectboxDropdown).on('click', 'li', function(){
	var selectboxDropLi = $(this).html();
	var selectboxParent = $(this).closest($selectbox);
	$(this).closest($selectbox)
		.addClass('_change')
		.find($selectboxTitle)
		.html(selectboxDropLi)

	$(this).closest('ul')
		.find('li')
		.not($(this))
		.removeClass('_selected')

	$(this).addClass('_selected')
	closeSelectbox(selectboxParent)
	return false;
})


$(document).on('click', function(e) {
	if (!$(e.target).closest($selectbox).length) {
		$selectbox.removeClass('_open')
	}
	e.stopPropagation();
});

function openSelectbox(selectboxParent) {
	selectboxParent.addClass('_open')
}
function closeSelectbox(selectboxParent) {
	selectboxParent.removeClass('_open')
}