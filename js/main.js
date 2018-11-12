;(function(){
	var humb = document.getElementById('humb');
	var navigation = document.querySelector('.navigation');
	humb.addEventListener('click',function(){
		this.classList.toggle('active-humb');
		navigation.classList.toggle('show-navigation');
	});
	var header = document.querySelector('.header');

	window.addEventListener('scroll', Ascroll);
	function Ascroll(){
		if(window.pageYOffset > 50){
			header.classList.add('bgBlack');
		}else{
			header.classList.remove('bgBlack');
		}
	};

	$(document).ready(function(){
		$('#slider').slick({
			dots: true,
			arrows: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 7000,
			cssEase: 'linear'
		});
		$('.slider-item').slick({
			dots: true,
			arrows: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			cssEase: 'linear'
		});
	});
})();