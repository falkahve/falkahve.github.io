if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}

$(document).ready(function() {
		 $('textarea[id^="textarea_"]').maxlength({
			 alwaysShow: true,
             warningClass: 'label label-warning',
             limitReachedClass: 'label label-success'
	     });
});
