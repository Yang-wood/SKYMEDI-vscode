$(document).ready(function(){
	$(".allMenu").click(function(){
		$(".headB").slideToggle();
	});
});

window.addEventListener('scroll', function () {
	const header = document.querySelector('.mainHeader');
	if (window.scrollY > 10) {
	  	header.classList.add('scrolled');
		setTimeout(function () {
			header.classList.remove('scrolled');
		}, 1000);
	} else {
		header.classList.remove('scrolled');
	}
});
