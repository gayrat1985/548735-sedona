window.addEventListener('load', function(e) {
	var btn = document.querySelector('.button-search');
	btn.addEventListener('click', function(e) {
		document.querySelector('.pop-up-dropdown').classList.toggle('pop-up-hide');
	});
});
