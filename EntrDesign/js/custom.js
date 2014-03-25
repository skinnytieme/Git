/* Entr Button Hover 
$(document).ready(function(){
  $(".entr-btn").hover(
	  function () {
	    $(this).addClass('animated tada');
	  }, 
	  function () {
	    $(this).removeClass('animated tada');
	  }
   );		
});
-----*/

/*  Editorial Promos (Sticky)--
$(window).load(function() {
if ($(window).width() >= 800){	
			jQuery('.sticky').containedStickyScroll({
        duration: 300,
        unstick: true,
        closeChar: '' 
    });
 }	
});


$(window).on('resize', function(){
if ($(window).width() >= 800){	
			jQuery('.sticky').containedStickyScroll({
        duration: 300,
        unstick: true,
        closeChar: '' 
    });
 }	
});

---*/

/* --- Slab --- */
$(document).ready(function(){	    
    function slabTextHeadlines() {
        $(".slabtext").slabText({});
    };
    $(window).load(function() {
        setTimeout(slabTextHeadlines, 1);
        $(".slabtext").css("display", "block");
    });
});		



$(document).ready(function () {
    var dropdowns = [
        { link: '#discover-lnk', dropDown: '#discover-drop' },
        { link: '#mob-nav-lnk', dropDown: '#discover-drop' },

        { link: '#user-lnk', dropDown: '#user-drop' },

        { link: '#mob-login-lnk', dropDown: '#mob-login-drop' },


        { link: '#country-lnk', dropDown: '#country-drop' },
        { link: '#mob-country-lnk', dropDown: '#country-drop' }];

    $.each(dropdowns, function (i, e) {
        $(e.link).click(function (event) {
            if ($(e.dropDown).is(':visible')) {
                $(e.dropDown).slideUp('fast', function () {
                    $('.dropdown-overlay').hide();
                });
            } else {
                $('.dropdown-overlay').show();
                $.each(dropdowns, function (ii, ie) {
                    if (ie.dropDown != e.dropDown)
                        $(ie.dropDown).slideUp('fast');
                });
                $(e.dropDown).slideDown('fast');
            }
            event.preventDefault();
        });
    });

    $('.dropdown-overlay').click(function () {
        $.each(dropdowns, function (i, e) {
            $(e.dropDown + ':visible').slideUp('fast', function () {
                $('.dropdown-overlay').hide();
            });
        });
    });
});



/*$(document).ready(function(){	  
	$('#discover-lnk').click(function() {
		$('.dropdown-overlay').toggle();
		$('#discover-drop').slideToggle('fast');
		return false;
	});

	$('#country-lnk').click(function() {
		$('.dropdown-overlay').toggle();
		$('#country-drop').slideToggle('fast');
		return false;
	});

	$('#mob-country-lnk').click(function() {
		$('.dropdown-overlay').toggle();
		$('#country-drop').slideToggle('fast');
		return false;
	});


	$('#mob-nav-lnk').click(function(event) {
		$('.dropdown-overlay').toggle();
		$('#discover-drop').slideToggle('fast');
		
		return false;
	});

	$('#user-lnk').click(function() {
		$('.dropdown-overlay').toggle();
		$('#user-drop').slideToggle('fast');
		return false;
	});
});/*


/* Make Entire Entr Li Clickable
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
 */
 
 


/* -- DROPDOWN PLAYGROUND 

$(document).ready(function(){	  
	$('#discover-lnk').click(function() {
		$('#discover-drop').slideToggle('fast');
		
		$("#user-drop").css("display", "none");
		
		if ($('#discover-drop').css('display') === 'none') 
			{
		$('.dropdown-overlay').hide();
			}
		else if ($('.drop').css('display') === 'block')
			{		
		$('.dropdown-overlay').toggle();
			}
		return false;
	});

	$('#mob-nav-lnk').click(function(event) {
		$('#discover-drop').slideToggle('fast');
		
	return false;
	

	});

	$('#user-lnk').click(function() {
		$('#user-drop').slideToggle('fast');
		
		$("#discover-drop").css("display", "none");
		
		
		if ($('#user-drop').css('display') === 'none') 
			{
		$('.dropdown-overlay').hide();
			}
		else if ($('.drop').css('display') === 'block')
			{		
		$('.dropdown-overlay').toggle();
			}
		return false;
	});

		
});

------------*/
