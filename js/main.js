$(document).ready(function(){

	//모바일 화면용 버튼 구현
	$(".allMenu").click(function(){
		const headB = $(".headB");
		const headD = $(".headD");

		if (headB.is(":visible")) {
			headB.slideUp(300);
			headD.fadeIn(200);
		} else {
			headB.slideDown(300);
			headD.fadeOut(200);
		}
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
