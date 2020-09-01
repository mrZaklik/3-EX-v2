// Навигация (моб.)
$(function() {
	let $mnav_popup = $('.media_nav');
	
	$(".media_nav-triger, .media_nav-close").click(function(){
		$mnav_popup.slideToggle(300, function(){
			if ($mnav_popup.is(':hidden')) {
				$('pointer').removeClass('media_nav-pointer');
			} else {
				$('pointer').addClass('media_nav-pointer');
			}					
		});  
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.media_nav_wrapper').length){
			$('pointer').removeClass('media_nav-pointer');
			$mnav_popup.slideUp(300);
		}
	});
});


// Увеличение картинок
$(function(){
	$('.minimized').click(function(event) {
	  let i_path = $(this).attr('src');
	  $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
	  $('#magnify').css({
		  left: ($(document).width() - $('#magnify').outerWidth())/2,
			  top: ($(window).height() - $('#magnify').outerHeight())/2
		});
	  $('#overlay, #magnify').fadeIn('fast');
	});
	
	$('body').on('click', '#close-popup, #overlay', function(event) {
	  event.preventDefault();
   
	  $('#overlay, #magnify').fadeOut('fast', function() {
		$('#close-popup, #magnify, #overlay').remove();
	  });
	});
  });


  // Окно отправки
//   $(document).ready(function () {
//     $("form").submit(function () {
//         let formID = $(this).attr('id');
//         let formNm = $('#' + formID);
//         $.ajax({
//             type: "POST",
//             url: 'mail.php',
//             data: formNm.serialize(),
//             success: function (data) {
//                 $(formNm).html(data); 
//             },
//             error: function (jqXHR, text, error) {
//                 $(formNm).html(error);         
//             }
//         });
//         return false;
//     });
// });