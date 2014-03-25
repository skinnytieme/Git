

/* Discover Dropdown */
$(document).ready(function(){	    
	$('#discover-lnk').click(function() {
	
		$('.dropdown-overlay').toggle();
		$('#discover-drop').slideToggle('fast');
		return false;
	});

	$('#mob-nav-lnk').click(function(event) {
		$('.dropdown-overlay').toggle();
		$('#discover-drop').slideToggle('fast');
		
		return false;
	});

/* User Dropdown */
$('#user-lnk').click(function() {
	$('.dropdown-overlay').toggle();
	$('#user-drop').slideToggle('fast');
	return false;
	
});

/* Make Entire Entr Li Clickable */
$('ul.question li').click(function(evt) {
  if (evt.target.type !== 'checkbox') {
    var $checkbox = $(":checkbox", this);
    $checkbox.attr('checked', !$checkbox.attr('checked'));
    evt.stopPropagation();
    return false;
  }
});

$('ul#question li').click(function() {
	$('ul#question li').find('input').each(function(){
	    $(this).attr('checked', false);
	});
    	$(this).find('input:first').attr('checked', true);
	});
});
