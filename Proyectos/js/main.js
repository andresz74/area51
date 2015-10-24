$( document ).ready(function() {
    
	$('.ui-tab').click(loadTab);

	// var tabs = $('.ui-tab').toArray();
	var tabs = $('.ui-tab');
	var time = 0;

	window.setInterval(reloadTab, 3000);

	function reloadTab(){
		if (time < tabs.length) {
			if ( $(tabs[time]).hasClass('active') ) {
				time++;
			} else{
				tabs[time].click(loadTab);
				time++;	
			};
		} else{
			time = 0
		};
	}

	function loadTab(){
		var activar = '#'+ $(this).data('tab');

		$('.ui-tab').removeClass('active');
		$('.tab-banner').hide().removeClass('active');

		$(this).fadeIn(1000).addClass('active');
		$(activar).fadeIn(1000).addClass('active');;
	}

	$('.min-menu').click(function(){
		if (!$('.nav-menu').hasClass('active')) {
			$('.nav-menu').addClass('active');
			$('.nav-menu').slideDown();
		} else{
			$('.nav-menu').removeClass('active');
			$('.nav-menu').slideUp();
		};
	});

	$('.l-menu').click(function(){
		$('.nav-menu').slideUp();
	});


});