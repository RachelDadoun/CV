$(document).ready(function() {
	$('.CVdetails').hide(); 
	$('.dtl').hide(); 
	$('.CVtitle:first').addClass('active').next().show(); 
	$('.CVtitle').hover(function(){
		if( $(this).next().is(':hidden') ) { 
			$('.CVtitle').removeClass('active').next().slideUp(350); 
			$(this).toggleClass('active').next().slideDown(350); 
		}
		return false; 
	});
	$('.dtlH').hover(function(){
		if( $(this).next().is(':hidden') ) { 
			$('.dtlH').removeClass('active').next().slideUp(350); 
			$(this).toggleClass('active').next().slideDown(350); 
		}
		return false; 
	});
		
	

});
