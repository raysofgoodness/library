$(function () {

	$('.search__tabs-item').on('click', function (e) {
		e.preventDefault();

		$('.search__tabs-item').removeClass('search__tabs-item--active');
		$('.search__content-item').removeClass('search__content-item--active');
		$(this).addClass('search__tabs-item--active');
		$($(this).attr('href')).addClass('search__content-item--active');
	});

	const anchors = document.querySelectorAll('a[href*="#tabs"], a[href*="#chevron"]')

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const blockID = anchor.getAttribute('href').substr(1)

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}

});