jQuery(document).ready(function($) {
	
	$('#nav > ul > li').hover(function(e) {
		
		if($(window).width() >= 992) {
        
			_this = $(this);
			
			if(!_this.hasClass('active') && _this.find('ul').length) {
			
				$('#nav ul ul').stop().fadeOut(200, function() {
					_this.find('ul').stop().fadeIn(200);	
				});
			
			}
		
		}
		
    }, function() {
		
		if($(window).width() >= 992) {
        
			_this = $(this);
			
			if(!_this.hasClass('active') && _this.find('ul').length) {
			
				_this.find('ul').fadeOut(200, function() {
					$('#nav li.active ul').fadeIn(200);	
				});	
			
			}
		
		}
		
	});
	
	function equalHeight() {
		if($(window).width() >= 992) {
			
			var content = $("#content").outerHeight() - 50;
			var sidebar = $("#sub").outerHeight();
			
			if(content >= sidebar)
				$("#sub").height(content + 50);
			else
				$("#content").height(sidebar - 50);
			
		} else {
			
			$("#content").height('auto');
			$("#sub").height('auto');
				
		}
	}
	
	equalHeight();
	
	$(window).resize(equalHeight);
	
	$("#nav .expand").click(function() {
		$("#nav > ul").slideToggle(300);	
	});
	
});