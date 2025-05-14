$(document).ready(function(){
	$(".headC").click(function(){
		$(".headB").slideToggle();
	});
});

window.addEventListener('scroll', function () {
	const header = document.getElementById('mainHeader');
	if (window.scrollY > 10) {
	  header.classList.add('scrolled');
	} else {
	  header.classList.remove('scrolled');
	}
});